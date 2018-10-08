import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x939891B057Ee4537B4a9C51d43906704521775b5' // copied from ADDRESS
);

export default instance;
