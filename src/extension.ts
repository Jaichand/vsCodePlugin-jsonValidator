// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

// Import the fs module to handle file system operations asynchronously
import * as fs from "fs";

// Import Ajv (Another JSON Validator) to validate JSON data against a schema
const Ajv = require("ajv");

import Schema, { PortDetails } from "./schema/mySchema";

const ajv = new Ajv(); // Create an instance of Ajv
const validate = ajv.compile(Schema); // Compile the schema


function checkOverLap(portDetails: PortDetails) {
	// Taking out the values of Ports
	const formattedPortValue = Object.values(portDetails);
	/**
	 * Mapping the StartPort => baseAddress
	 * EndPort => baseAddress + sizeBytes
	*/
	const portStartAndEndDetails = formattedPortValue.map((portObj) =>
		{ return {startPort: portObj.baseAddress, endPort: portObj.baseAddress + portObj.sizeBytes};
	});
	/**
	 * Sorting the StartPort and EndPort based
	*/
	const sortedPortsBasedOnStartAndEnd = portStartAndEndDetails.sort((a, b) => a.startPort - b.startPort);
	/**
	 * Looping through the sorted Port Array and checking the startPort and endPort, if the intersect, it is a overlap
	*/
	for(var i = 0; i < sortedPortsBasedOnStartAndEnd.length - 1; i++) {
		if(sortedPortsBasedOnStartAndEnd[i].endPort >= sortedPortsBasedOnStartAndEnd[i+1].startPort) {
			return "OverLap at " + sortedPortsBasedOnStartAndEnd[i+1].startPort + " " +  sortedPortsBasedOnStartAndEnd[i].endPort;
		}
 }
 return "No OverLap";
}

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  const disposable = vscode.commands.registerCommand(
    "JSONFormatter.sifiveTest",
    async () => {

      const editor = vscode.window.activeTextEditor;
      const filePath = editor?.document?.uri?.fsPath;

      if (filePath) {
				const data = fs.readFileSync(filePath, 'utf8'); // Read the file
				try {
					const jsonData: PortDetails = JSON.parse(data);
					const valid = validate(jsonData);
					if (valid) {
						vscode.window.showInformationMessage(JSON.stringify(checkOverLap(jsonData)));
					}
					vscode.window.showInformationMessage("JSON is valid!");
				} catch (e) {
					vscode.window.showErrorMessage("JSON File is Invalid " + e);
				}
      }
    }
  );

  const currentTime = vscode.commands.registerCommand(
    "JSONFormatter.currentTime",
    () => {
      // The code you place here will be executed every time your command is executed
      // Display a message box to the user
      vscode.window.showInformationMessage(
        "Hey, Current Time is " + new Date().toLocaleDateString()
      );
    }
  );

  const plugins = [disposable, currentTime];
  context.subscriptions.push(...plugins);
}

// This method is called when your extension is deactivated
export function deactivate() {}
