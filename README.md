# JournalDownloader
I needed to download a series of PDFs located in a static directory, with each file distinguished by a unique number, such as “example1”, “example2”, and so on.

It works. 


# ChatJippity has provided a tutorial for those who are interested. 
- It’s an effective way to explain my project
-  I believe it should be more widely adopted given the technology we have at our disposal.


# Why did I do this? 
- I wanted a summary I can reference later so it's easy to understand :)

Without further adieu, I give you the words of Bob.

Sure, let’s break down the code into sections and explain what each part does:

Section 1: Importing Required Modules

```
const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');
const simpleGit = require('simple-git');
```

This section imports the necessary modules for the script. node-fetch is used for making HTTP requests, fs for file system operations, path for handling file and directory paths, and simple-git for Git commands.

Section 2: Variable Initialization

const folderName = 'journals';
let failedDownloads = 0;
let successfulDownloads = 0;
let skippedDownloads = 0;
const failedJournalNumbers = [];
Copy
Here, several variables are initialized. folderName is the name of the directory where the downloaded files will be stored. The other variables are counters to keep track of the number of successful, failed, and skipped downloads.

Section 3: Directory Creation

if (!fs.existsSync(folderName)) {
  fs.mkdirSync(folderName);
}
Copy
This section checks if the directory specified by folderName exists. If it doesn’t, it creates the directory.

I’ll continue with the rest of the code in my next message. Please type “continue” to proceed.




continue
Generating answers for you…

Generating answers for you…

Section 4: Download Function

async function downloadJournal(journalNumber) {
  ...
}
Copy
This function is responsible for downloading a single journal. It takes a journal number as an argument, constructs the URL for the journal, and checks if the file already exists. If it does, it skips the download. If not, it attempts to download the file and logs the result.

Section 5: Git Push Function

/* Putting on hold for now... 
function pushToGitHub() {
  ...
}
*/
Copy
This function is currently commented out. When active, it adds all changes to Git, commits them with a message, and pushes them to GitHub.

Section 6: Main Function

async function downloadJournals() {
  ...
}
Copy
This function loops over a range of journal numbers and calls downloadJournal for each one. It also logs any failed downloads.

Section 7: Script Execution

downloadJournals();
Copy
This line starts the execution of the script by calling the downloadJournals function.

Section 8: Error Handling

process.on('uncaughtException', error => {
  ...
});

process.on('SIGINT', () => {
  ...
});

process.on('exit', () => {
  ...
});
Copy
These lines handle different types of errors and interruptions that might occur during the execution of the script. They ensure that any changes are pushed to GitHub before the script exits.

Please type “continue” if you want me to go into more detail about any of these sections.

continue
Generating answers for you…

Generating answers for you…

Let’s delve deeper into the sections of the code:

Section 4: Download Function

async function downloadJournal(journalNumber) {
  ...
}
Copy
This function is responsible for downloading a single journal. It takes a journal number as an argument, constructs the URL for the journal, and checks if the file already exists. If it does, it skips the download. If not, it attempts to download the file and logs the result.

The function uses fetch to make a GET request to the URL of the journal. If the response is not OK (status code is not 200), it logs an error message and increments the failedDownloads counter. If there have been three or more failed downloads in a row, it stops the script.

If the response is OK, it creates a write stream to a file in the folderName directory and pipes the response body into it. It then logs a success message and increments the successfulDownloads counter.

Section 5: Git Push Function

/* Putting on hold for now... 
function pushToGitHub() {
  ...
}
*/
Copy
This function is currently commented out. When active, it adds all changes to Git, commits them with a message, and pushes them to GitHub.

The function uses simpleGit to execute Git commands. It first adds all changes in the current directory to Git using git.add('.'). It then commits these changes with a message using git.commit('Downloaded journals'). Finally, it pushes these changes to GitHub using git.push().

Section 6: Main Function

async function downloadJournals() {
  ...
}
Copy
This function loops over a range of journal numbers and calls downloadJournal for each one. It also logs any failed downloads.

The function uses a for loop to iterate over journal numbers from 1 to 1000. For each iteration, it calls downloadJournal with the current journal number. After all journals have been attempted to be downloaded, it logs how many downloads were successful, skipped, and failed.

Please type “continue” if you want me to go into more detail about any of these sections.

continu
Generating answers for you…

Generating answers for you…

Section 7: Script Execution

downloadJournals();
Copy
This line starts the execution of the script by calling the downloadJournals function. This function will attempt to download journals numbered from 1 to 1000.

Section 8: Error Handling

process.on('uncaughtException', error => {
  ...
});

process.on('SIGINT', () => {
  ...
});

process.on('exit', () => {
  ...
});
Copy
These lines handle different types of errors and interruptions that might occur during the execution of the script. They ensure that any changes are pushed to GitHub before the script exits.

uncaughtException: This event is emitted when an uncaught JavaScript exception bubbles all the way back to the event loop. If a listener is added for this event, the default action (which is to print a stack trace and exit) will not occur.
SIGINT: This event is emitted whenever the process receives a SIGINT signal, which is often sent by pressing Ctrl+C.
exit: This event is emitted when Node.js empties its event loop and has no additional work to schedule.
Each of these events has a corresponding handler function that logs an appropriate message, pushes any changes to GitHub, and then exits the process with a specific exit code.

That concludes the breakdown of your code. If you have any more questions or need further clarification, feel free to ask!

