# JSONFormatter README

This is code is about VSCode extension

## Features

This VSCode extension will be validating the JSON file and add on functionality of validating the JSON data based on hardcode JSON schema.
 - Go To JSON File
 - Right Click on Editor, It will show Sifive Test
 - Selecting Sifive Test will result the JSON File Validation and if JSON Data is same as schema, it will check for the Overlap.

## Extension Settings

In case if it's not working on local machine please check the installed version of VSCode engine and replace the same version on package.json file.

  "engines": {
    "vscode": "1.94.2"
  },


## How to compile the extension?

Clone this Repo, and go to the Folder
 ```
  cd vsCodePlugin-jsonValidator
 ```

Once that is done run,
```
 npm install
```

Press `CMD + Shift + P` and Select for `Debug: Start Debugging`
 - it will open a new VSCode Window Know as Extension Development Host


## How to run the extension?
  - Go To Extension Development Host Window
  - Create a JSON File
  - Right Click on the editor

  ![plot] (./src/assets/img/plugin_screenshot.png) 
## How to run the test?

## Explanation of your test. Are they unit tests or integration tests?

## Explanation of your logic and architecture

## If you have more time, what do you want to improve?

**Enjoy!**
