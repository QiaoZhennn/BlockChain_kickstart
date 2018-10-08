const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath); // remove old folder

const campaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol');
const source = fs.readFileSync(campaignPath, 'utf8');
const output = solc.compile(source, 1).contracts; // output has two contracts

fs.ensureDirSync(buildPath); // create that ./build/ folder
// output is a Map, containing two contracts(key-value)
for (let contract in output) {
  fs.outputJsonSync(
    // contract is the key of map. starting with ':'
    path.resolve(buildPath, contract.replace(':', '')+'.json'),
    output[contract] // content of above json file.
  );
}
