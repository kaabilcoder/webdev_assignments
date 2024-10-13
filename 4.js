const fs = require("fs").promises;

async function writeToFile(filename, content) {
    try {
        await fs.writeFile(filename, content, "utf-8");
        console.log("FIle has been sucessfully read");
    } catch (error) {
        console.log('Error writing to file:',error);
    }
}

// Usage
writeToFile('a4.txt', "hey guys what's up!");

