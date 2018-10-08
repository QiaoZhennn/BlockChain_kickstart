import React from 'react';
import {Container} from 'semantic-ui-react'
import Header from './Header'
import Head from 'next/head'; // make content in <Head></Head> directly embedded into HTML <head/> tag

export default props => {
  return (
    <Container>
      <Head>
      <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css"></link>
</Head>
    <Header/>
      {/* make components who import Layout are the children of Layout */}
      {props.children}
  </Container>
  );
};
