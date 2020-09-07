const execSync = require('child_process').execSync;

const target = process.argv[2] || 'myFunctionTest'; // Default function if no args provided via CLI.

execSync("tsc-watch --onSuccess 'functions-framework " + target + " + --port=9000' ", {stdio:[0, 1, 2]});