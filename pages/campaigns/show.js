import React, {Component} from 'react';
import {Button, Card, Grid} from 'semantic-ui-react';
import Layout from '../../components/Layout';
import ContributeForm from '../../components/ContributeForm';
import Campaign from '../../ethereum/campaign';
import web3 from '../../ethereum/web3';
import {Link} from '../../routes';

class CampaignShow extends Component {
  //{props} 是getInitialProps自带的一个object
  static async getInitialProps(props) {
    {/*props.query can query the wildcard set in routes.js, which is ":address"*/}
    const campaign = Campaign(props.query.address);
    const summary = await campaign.methods.getSummary().call();

    return {
      address: props.query.address,
      minimumContribution: summary[0],
      balance: summary[1],
      requestsCount: summary[2],
      approversCount: summary[3],
      manager: summary[4]
    };
  }

  renderCards() {
    const {
      balance,
      manager,
      minimumContribution,
      requestsCount,
      approversCount
    } = this.props;
    const items = [
      {
        header: manager,
        meta: 'Address of Manager',
        description: 'The manager created this campaign and can create requests to withdraw money',
        style: {overflowWrap: 'break-word'}
      },
      {
        header: minimumContribution,
        meta: 'Minimum Contribution(wei)',
        description: 'You must contribute at least this wei',
        style: {overflowWrap: 'break-word'}
      },
      {
        header: requestsCount,
        meta: 'Number of Requests',
        description: 'A request tries to withdraw money from the contract',
        style: {overflowWrap: 'break-word'}
      }, {
        header: approversCount,
        meta: 'Number of Approvers',
        description: 'The number of people who have already donate to this campaign',
        style: {overflowWrap: 'break-word'}
      }, {
        header: web3.utils.fromWei(balance, 'ether'),
        meta: 'Campaign Balance (ether)',
        description: 'The balance is how much money this campaign has left to spend',
        style: {overflowWrap: 'break-word'}
      }
    ];

    return <Card.Group items={items}/>;
  }

  render() {
    return (
      <Layout>
        <h3>Campaign Show</h3>
        <Grid>
          <Grid.Row>
            <Grid.Column width={10}>
              {this.renderCards()}
            </Grid.Column>
            <Grid.Column  width={6}>
              <ContributeForm address={this.props.address}/>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Link route={`/campaigns/${this.props.address}/requests`}>
                <a>
                  <Button primary>View Requests</Button>
                </a>
              </Link>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Layout>
    );
  }
}

export default CampaignShow;
