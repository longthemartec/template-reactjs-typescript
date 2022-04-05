import React, { useEffect, FC, useState } from 'react';
import { Redirect } from 'react-router-dom' ;
const Middleware: FC = (props ) => {
  const [needLoginPage, setNeedLoginPage] = useState(false);
  useEffect(() => {
    if (window.localStorage.getItem( 'authToken')) {
      setNeedLoginPage(true);
    } else {
      setNeedLoginPage(false);
    }
  }, []);

  return (
    <>
      {needLoginPage && <Redirect to="/login" />}
      {!needLoginPage && <>{props?.children}</>}
    </>
    );
};
