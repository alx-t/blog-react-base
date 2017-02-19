import React, { PropTypes } from 'react';
import { Button, Segment, Header, Container } from 'semantic-ui-react';

import history from 'helpers/history';

import Link from 'components/elements/Link';

const MainLayout = ({ children }) => (
  <Container>
    <Logo />
    <GoBackButton />
    {children}
    <Footer />
  </Container>
);

MainLayout.propTypes = {
  children: PropTypes.node
};

export default MainLayout;

const Logo = () => (
  <Segment>
    <Header>
      <Link to='/'>Alex Blog</Link>
    </Header>
  </Segment>
);

const Footer = () => (
  <Segment>
    Powered for React Course
  </Segment>
);

const GoBackButton = () => (
  <Button onClick={() => history.goBack()}>Back</Button>
);
