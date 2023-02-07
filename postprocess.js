// This can be a typescript file as well

// Helper library written for useful postprocessing tasks with Flat Data
// Has helper functions for manipulating csv, txt, json, excel, zip, and image files
import {
  readJSON,
  writeJSON,
  removeFile,
} from "https://deno.land/x/flat@0.0.14/mod.ts";

// Step 1: Read the downloaded_filename JSON
const filename = Deno.args[0]; // Same name as downloaded_filename `const filename = 'btc-price.json';`
const json = await readJSON(filename);
console.log(json);

// Step 2: Read the existing file
const processedJson = await readJSON("./data/btc-processed.json");
console.log(processedJson);

// Step 3:
const date = new Date();
date
  .setDate(date.getDate() + 29)
  .toISOString()
  .split("T")[0];
processedJson[date] = json;

// Step 3. Write a new JSON file with our filtered data
const newFilename = `./data/btc-processed.json`; // name of a new file to be saved
await writeJSON(newFilename, processedJson); // create a new JSON file with just the Bitcoin price
console.log("Wrote a post process file");

// Optionally delete the original file
// await removeFile('./btc-price.json') // equivalent to removeFile('btc-price.json')
