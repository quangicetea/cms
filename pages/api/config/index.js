const path = require("path");
const fs = require("fs");

function readJSONFile(filePath) {
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

async function readAllJSONFilesInFolder(folderPath) {
  const files = fs.readdirSync(folderPath);
  const result = [];

  for (const file of files) {
    const filePath = path.join(folderPath, file);
    try {
      const jsonData = await readJSONFile(filePath);
      result.push(jsonData);
    } catch (error) {
      console.error(`Error reading ${filePath}:`, error);
    }
  }

  return result;
}

export default async function handler(req, res) {
  if (req.method === "GET") {
    console.log("gett all");
    const folderPath = "json";
    const files = getAllFilesInFolder(folderPath);
    const result = await readMultipleJSONFilesAsync(files);
    res.status(200).json(result);
  } 
  else if (req.method === "POST") {
    try {
      const {
        symbol,
        tradeType,
        candleStick,
        oclist,
        extend,
        amountlist,
        takeProfit,
        autoIncreaseOC,
        reduceMode,
        reduceTakeProfit,
        interval,
        ignore,
        id,
      } = req.body;

      // Add the new data to the object
      const newData = {
        symbol,
        tradeType,
        candleStick,
        oclist,
        extend,
        amountlist,
        takeProfit,
        autoIncreaseOC,
        reduceMode,
        reduceTakeProfit,
        interval,
        ignore,
        id,
      };
      let data = JSON.stringify(newData);
      await fs.writeFileSync(`json/student-${id}.json`, data);
      res.status(200).json({ message: "Data stored successfully" });
    } catch (error) {
      console.error(error);
      // Send an error response
      res.status(500).json({ message: "Error storing data" });
    }
  }
}
