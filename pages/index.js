import React, {Component} from 'react';
import {Card, Button} from 'semantic-ui-react';
import factory from '../ethereum/factory';
import Layout from '../components/Layout';
import {Link} from '../routes';

class CampaignIndex extends Component {
  //not traditional React style getInitialProps is only in Next.js
  //static define a class function, don't need to render component
  //Next.js will automatically call this function
  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();
    //Finally, Next.js will put the initial props into props field.
    return {campaigns};
  }

  renderCampaigns() {
    const items = this.props.campaigns.map(address => {
      return {
        header: address,
        description: (
          <Link route={`/campaigns/${address}`}>
            <a>View Campaign</a>
          </Link>
        ),
        fluid: true // extends to the right end
      };
    }); // using map, returns an array

    return <Card.Group items={items}/>;
  }

  render() {
    return (
      <Layout> {/*the <div> is passed to <Layout> as a property called: children*/}
        <div>
          <h3>Open Campaigns</h3>
          <Link route="/campaigns/new">
            <a>
              <Button
                content="Create Campaign"
                icon="add circle"
                primary
                floated="right"
              />
            </a>
          </Link>
          {this.renderCampaigns()}
        </div>
      </Layout>
    )}
}

// Next.js expect you to export React component
export default CampaignIndex;
