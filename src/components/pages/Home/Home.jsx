import React from 'react';
import KeyValueContainer from '../../KeyValueContainer';

import styles from './Home.scss';

const Home = () => (
  <div data-test-hook="homePage" className={styles.home}>
    <KeyValueContainer />
  </div>
);

export default Home;
