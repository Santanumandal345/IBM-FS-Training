const fileHandler = {
    readFile: (filePath) => JSON.parse(fs.readFileSync(filePath, 'utf8')),
    writeFile: (filePath, data) => fs.writeFileSync(filePath, JSON.stringify(data, null, 2))
};
module.exports = fileHandler;
