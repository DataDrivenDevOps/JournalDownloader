const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');
const simpleGit = require('simple-git');

const folderName = 'journals';
let failedDownloads = 0;
let successfulDownloads = 0;
let skippedDownloads = 0;
const failedJournalNumbers = [];

if (!fs.existsSync(folderName)) {
  fs.mkdirSync(folderName);
}

async function downloadJournal(journalNumber) {
  const url = `https://xxx.xxx.xxx/eJournal${journalNumber}.pdf`;

  const filePath = path.join(folderName, `eJournal${journalNumber}.pdf`);

  if (fs.existsSync(filePath)) {
    console.log(`Journal ${journalNumber} already exists. Skipping download.`);
    skippedDownloads++;
    return;
  }

  try {
    const response = await fetch(url);

    if (!response.ok) {
      console.error(`Error: Download of journal ${journalNumber} failed with status ${response.status}.`);
      failedDownloads++;
      failedJournalNumbers.push(journalNumber);

      if (failedDownloads >= 3) {
        console.error('Too many failed downloads. Stopping script.');
        pushToGitHub();
        process.exit(1);
      }

      return;
    }

    const fileStream = fs.createWriteStream(filePath);
    response.body.pipe(fileStream);

    console.log(`Journal ${journalNumber} downloaded successfully.`);

    const now = new Date();
    const timestamp = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
    const log = `Journal ${journalNumber} downloaded at ${timestamp}\n`;
    fs.appendFileSync('download.txt', log);

    successfulDownloads++;
    failedDownloads = 0;
  } catch (error) {
    console.error(`Error: Download of journal ${journalNumber} failed with message ${error.message}.`);
    failedDownloads++;
    failedJournalNumbers.push(journalNumber);

    if (failedDownloads >= 3) {
      console.error('Too many failed downloads. Stopping script.');
      pushToGitHub();
      process.exit(1);
    }
  }
}

/* Putting on hold for now... 
function pushToGitHub() {
  const git = simpleGit();

  git.add('.')
    .then(() => git.commit('Downloaded journals'))
    .then(() => git.push())
    .then(() => console.log('Changes pushed to GitHub'))
    .catch(error => console.error(`Error: Failed to push changes to GitHub with message ${error.message}`));
}
*/

async function downloadJournals() {
  for (let i = 1; i <= 1000; i++) {
    await downloadJournal(i.toString().padStart(2, '0'));
  }

  if (failedJournalNumbers.length > 0) {
    console.error(`Failed to download ${failedJournalNumbers.length} journals: ${failedJournalNumbers.join(', ')}.`);
  }

  console.log(`Script finished with ${successfulDownloads} successful downloads, ${skippedDownloads} skipped downloads, and ${failedDownloads} failed downloads.`);
  pushToGitHub();
}

downloadJournals();

process.on('uncaughtException', error => {
  console.error(`Uncaught exception: ${error.message}`);
  pushToGitHub();
  process.exit(1);
});

process.on('SIGINT', () => {
  console.log('Script stopped by user.');
  pushToGitHub();
  process.exit(0);
});

process.on('exit', () => {
  console.log(`Script finished with ${successfulDownloads} successful downloads, ${skippedDownloads} skipped downloads, and ${failedDownloads} failed downloads.`);
  pushToGitHub();
});