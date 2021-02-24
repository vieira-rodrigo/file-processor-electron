const { ipcMain } = require("electron");
const textract = require("textract");

ipcMain.on("PROCESS_FILE", (event, filePath) => {
  getWords(filePath)
    .then((words) => event.reply("PROCESS_FILE", process(words)))
    .catch((error) =>
      console.error(`Was not possible to process the file due error: ${error}`)
    );
});

const process = (words) => {
  const groupedWords = words.reduce(agroup, {});

  return Object.keys(groupedWords)
    .map((key) => ({ word: key, amount: groupedWords[key] }))
    .sort((a, b) => b.amount - a.amount);
};

const getWords = (path) => {
  return new Promise((resolve, reject) => {
    textract.fromFileWithPath(path, (error, text) => {
      if (error !== null) reject(error);

      let words = text
        .replace(/[-,?=!.'"%$~}{/:)(><]/g, " ")
        .replace(/[0-9]/g, "")
        .replace("[", "")
        .replace("]", "")
        .trim()
        .toLowerCase()
        .split(" ")
        .filter(filter);

      resolve(words);
    });
  });
};

const filter = (value) => {
  return value.trim().length > 0;
};

const agroup = (obj, word) => {
  if (obj[word]) {
    obj[word] = obj[word] + 1;
  } else {
    obj[word] = 1;
  }

  return obj;
};
