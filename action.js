const execSync = require('child_process').execSync;

const target = process.argv[2] || 'myActionTest'; // Default function if no args provided via CLI.
const action = target.split('=')[1];

execSync("tsc && node -e 'require(\"./dist\")[\"" + action + "\"]()'", {stdio:[0, 1, 2]});