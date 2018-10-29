import React from 'react';
import SampleComponent from '../../SampleComponent';
import KeyValueContainer from '../../KeyValueContainer';

import styles from './Home.scss';
import KeyValue from '../../KeyValue/KeyValue';

const Home = () => (
  <div data-test-hook="homePage" className={styles.home}>
    <KeyValueContainer />
  </div>
);

export default Home;
