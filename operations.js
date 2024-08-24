const fs = require('fs');

// Step 1: Create a file named "welcome.txt" with "Hello Node"
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if (err) throw err;
  console.log('File "welcome.txt" has been created.');

  // Step 2: Read and log the content from "welcome.txt"
  fs.readFile('welcome.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('Content of "welcome.txt":');
    console.log(data);
  });
});
