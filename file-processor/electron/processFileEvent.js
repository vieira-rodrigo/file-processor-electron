const { ipcMain } = require("electron");
const fs = require("fs");

ipcMain.on("PROCESS_FILE", (event, filePath) => {
  event.reply("PROCESS_FILE", process(getWords(filePath)));
});

const process = (words) => {
  const groupedWords = words.reduce(agroup, {});

  return Object.keys(groupedWords)
    .map((key) => ({ word: key, amount: groupedWords[key] }))
    .sort((a, b) => b.amount - a.amount);
};

const getWords = (path) => {
  return fs
    .readFileSync(path)
    .toString("utf-8")
    .replace(/(?:\r\n|\r|\n)/g, " ")
    .replace(/[-,?=!.'"%$~}{/:)(><]/g, " ")
    .replace(/[0-9]/g, "")
    .replace("[", "")
    .replace("]", "")
    .trim()
    .toLowerCase()
    .split(" ")
    .filter(filter);
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
