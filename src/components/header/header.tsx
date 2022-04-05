const Styles = require('./header-styles.scss');
import React, { memo } from 'react'

const Header: React.FC = () => {
  return (
    <header className={Styles.headerWrap}>
      <div className={Styles.headerContent}>
        <div className={Styles.logoutWrap}>
          <span data-testid="username">{/*getCurrentAccount().name*/}</span>
          <a data-testid="logout" href="#"> Logout </a>
        </div>
      </div>
    </header>
  )
}

export default memo(Header)
