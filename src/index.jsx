import React from 'react';
import ReactDOM from 'react-dom';

import { Favicon } from './Favicon';
import { Logo } from './Logo';
import { Resume } from './Resume';
import css from './index.module.scss';

const Main = () => {
  return (
    <div className={css.main}>
      <Favicon />
      <header>
        <Logo />
      </header>
      <div>
        <Resume />
      </div>
    </div>
  );
};

ReactDOM.render(<Main />, document.getElementById('mount'));
