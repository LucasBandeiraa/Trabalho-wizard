const fs = require('fs');
const path = require('path');

const fixFile = (file) => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/require\(['"](\..*?(?<!\.js))['"]\)/g, 'require(\'$1.js\')');
  fs.writeFileSync(file, content);
};
const walk = (dir) => {
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) walk(fullPath);
    else if (fullPath.endsWith('.js')) fixFile(fullPath);
  });
};
walk('routes');
walk('services');
fixFile('index.js');
