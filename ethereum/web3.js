import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // We are in the browser, user uses MetaMask
  web3 = new Web3(window.web3.currentProvider);
} else {
  // We are on the server OR MetaMask not running. We need to set up our own provider, using Infura
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/v3/a705770c127e401c82c0092cbe7341d3'
  );
  web3 = new Web3(provider);
}

export default web3;
