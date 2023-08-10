const fs = require("fs");
import { unlinkSync } from "node:fs";
const path = require("path");

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

export default async function handler(req, res) {
  
  // Get config data by id
  if (req.method === "GET") {  
    try {
      //console.log("queyr: ", req.query);
      const { configID } = req.query;
      const folderPath = "json";
      const files = getAllFilesInFolder(folderPath);
      const result = await readMultipleJSONFilesAsync(files);
      const x = result.find((x) => x.id == configID);      
      return res.status(200).json(x);

    } catch (error) {}
  } 
  // Delete config data
  else if (req.method === "DELETE") {
    try {
      const { configID } = req.query;
      unlinkSync(`json/student-${configID}.json`);
    } catch (err) {
      // handle the error
      console.log(err);
    }
  } 
  // Update config data
  else if (req.method === "PUT") {
    try {
      const { configID } = req.query;
      let data = JSON.stringify(req.body);
      await fs.writeFileSync(`json/student-${configID}.json`, data);
      res.status(200).json({ message: "Data updated successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error storing data" });
    }
    return;
  }

  return res.status(200).json(1);

}
