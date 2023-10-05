# JournalDownloader
I needed to download a series of PDFs located in a static directory, with each file distinguished by a unique number, such as “example1”, “example2”, and so on.

It works. 


# ChatJippity has provided a tutorial for those who are interested. 
- It’s an effective way to explain my project
-  I believe it should be more widely adopted given the technology we have at our disposal.

-- NOTICE -- : I don't have the time to verify the accuracy of the summary. 

This was created with the assistance of OpenAI 3.5-16K with custom parameters via API. Very cheap.


# Why did I do this? 
- I wanted a summary I can reference later so it's easy to understand :)



# Without further adieu, I give you the words of Bob.

"Sure, let’s break down the code into sections and explain what each part does":

## Section 1: Importing Required Modules

```
const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');
const simpleGit = require('simple-git');
```

This section imports the necessary modules for the script. node-fetch is used for making HTTP requests, fs for file system operations, path for handling file and directory paths, and simple-git for Git commands.


## Section 2: Variable Initialization

```
const folderName = 'journals';
let failedDownloads = 0;
let successfulDownloads = 0;
let skippedDownloads = 0;
const failedJournalNumbers = [];
```

Here, several variables are initialized. folderName is the name of the directory where the downloaded files will be stored. The other variables are counters to keep track of the number of successful, failed, and skipped downloads.

## Section 3: Directory Creation

```
if (!fs.existsSync(folderName)) {
  fs.mkdirSync(folderName);
}
```

This section checks if the directory specified by folderName exists. If it doesn’t, it creates the directory.


## Section 4: Download Function

```
async function downloadJournal(journalNumber) {
...
}
```

This function is responsible for downloading a single journal. It takes a journal number as an argument, constructs the URL for the journal, and checks if the file already exists. If it does, it skips the download. If not, it attempts to download the file and logs the result.



## Section 5: Main Function

```
async function downloadJournals() {
  ...
}
```

This function loops over a range of journal numbers and calls downloadJournal for each one. It also logs any failed downloads.


## Section 6: Script Execution

```
downloadJournals();
```

This line starts the execution of the script by calling the downloadJournals function.

## Section 7: Error Handling

```
process.on('uncaughtException', error => {
  ...
});

process.on('SIGINT', () => {
  ...
});

process.on('exit', () => {
  ...
});
```
These lines handle different types of errors and interruptions that might occur during the execution of the script. They ensure that any changes are pushed to GitHub before the script exits.



# Focusing on the main function.


Sure, let’s break down the async function downloadJournals():

```
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
```

This function is responsible for downloading a series of journals. Here’s what each part does:

| Code | Definition |
|------|------------|
| `for (let i = 1; i <= 1000; i++)` | This is a loop that iterates from 1 to 1000. Each iteration represents a journal number. |
| `await downloadJournal(i.toString().padStart(2, '0'))` | For each iteration, it calls the downloadJournal function with the current journal number. The await keyword is used to wait for the promise returned by downloadJournal to resolve before continuing to the next iteration. |
| `if (failedJournalNumbers.length > 0)` | After all journals have been attempted to be downloaded, it checks if there were any failed downloads. |
| `console.error(...):` | If there were any failed downloads, it logs an error message with the numbers of the journals that failed to download. |
| `console.log(...)` | Regardless of whether there were any failed downloads, it logs a message indicating how many downloads were successful, skipped, and failed. |
| `pushToGitHub()` | Finally, it calls the pushToGitHub function to push any changes to GitHub. |
| The `async` keyword before the function | Means that the function always returns a promise. |
| The `await` keyword | Can be used to wait for a promise to resolve or reject, and can only be used inside an async function. |

