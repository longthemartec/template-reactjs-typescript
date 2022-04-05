import React, { FC } from 'react';
import RootPage from './root';

const HomePage: FC = (props) => {
  return (
    // @ts-ignore
    <RootPage header="home">
      page content header
    </RootPage>
  );
}

export default HomePage;
