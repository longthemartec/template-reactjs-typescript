import React, { FC } from 'react';
const Header = require('../components/header');
const Footer = require('../components/footer');

const RootPage: FC = (props) => {
  return (
    <>
      // @ts-ignore
      <Header active={header.active} />
      {/*<Sidebar />*/}
      {/*page content*/}
      {props.children}
      {/*end page content*/}
      // @ts-ignore
      <Footer />
    </>
  );
}

export default RootPage;
