const path = require("path");
const fs = require("fs");

// Hàm để đọc một tệp JSON bất đồng bộ
function readJSONFileAsync(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        try {
          const jsonData = JSON.parse(data);
          resolve(jsonData);
        } catch (error) {
          reject(error);
        }
      }
    });
  });
}

// Hàm để đọc nhiều tệp JSON bất đồng bộ
async function readMultipleJSONFilesAsync(filePaths) {
    try {
      const results = await Promise.all(
        filePaths.map((filePath) => readJSONFileAsync(filePath))
      );
      return results;
    } catch (error) {
      console.error("Error:", error);
      return [];
    }
}

function getAllFilesInFolder(folderPath) {
  try {
    const files = fs.readdirSync(folderPath);
    const filePaths = [];

    for (const file of files) {
      const filePath = path.join(folderPath, file);
      const stats = fs.statSync(filePath);

      if (stats.isFile()) {
        filePaths.push(filePath);
      }
    }

    return filePaths;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
}

function getAllFoldersInFolder(folderPath) {
  try {
    const entries = fs.readdirSync(folderPath);

    const folderNames = entries
      .map((entry) => path.join(folderPath, entry))
      .filter((entryPath) => fs.statSync(entryPath).isDirectory())
      .map((entryPath) => path.basename(entryPath)); // Extract only the folder names

    return folderNames;
  } catch (err) {
    console.error('Error reading folder:', err);
    return [];
  }
}

export default async function handler(req, res) {
    
    const results = [];
    results.push({"key":"1","User":"bot01","TeleID":"83782","api_key":"mx0vgleR","api_secret":"8cccc514976","web_token":"WEB554","proxyAddress":"IP: 192.1.1.1:9090"});
    results.push({"key":"2","User":"bot02","TeleID":"76124","api_key":"mahasdfasdf","api_secret":"8cccc888","web_token":"WEB123","proxyAddress":"IP: 192.1.2.1:9090"});
    results.push({"key":"3","User":"bot03","TeleID":"123813","api_key":"jhjhaksdfd","api_secret":"8cccc777","web_token":"WEB222","proxyAddress":"IP: 192.1.4.1:9090"});
    
    res.status(200).json(results);
}
