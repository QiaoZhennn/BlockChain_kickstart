const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

// infura user name: Zhen Qiao, email: gmail
// infura rinkeby link
// https://rinkeby.infura.io/v3/a705770c127e401c82c0092cbe7341d3
// 12 words: pumpkin suffer they drink earth traffic small atom pioneer focus neutral achieve

// run: node deploy.js

// Attempting to deploy from account 0xb573091c2090591757121bD56B8ABdeaef96034f

const provider = new HDWalletProvider(
  'pumpkin suffer they drink earth traffic small atom pioneer focus neutral achieve',
  'https://rinkeby.infura.io/v3/a705770c127e401c82c0092cbe7341d3'
);

const web3 = new Web3(provider);

// this deploy funcion exists only alow us to use async syntax;
const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({data:compiledFactory.bytecode})
    .send({from:accounts[0], gas:'1000000'})

  console.log('Contract deployed to', result.options.address);
};

deploy();
