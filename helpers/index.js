const fs = require("fs");

const readFromFile = (filePath) => {
  try {
    const content = fs.readFileSync(filePath, "utf8");
    return JSON.parse(content);
  } catch (error) {
    console.log(`[ERROR]: read file - ${error.message}`);
    throw new Error(error.message);
  }
};

const writeToFile = (filePath, data) => {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 4));
  } catch (error) {
    console.log(error.message);
  }
};

const readAndAppend = (data, filePath) => {
  try {
    const content = readFromFile(filePath);
    content.push(data);
    writeToFile(filePath, content);
  } catch (error) {
    console.log(`[ERROR]: read and append file - ${error.message}`);
  }
};

module.exports = { readFromFile, writeToFile, readAndAppend };
