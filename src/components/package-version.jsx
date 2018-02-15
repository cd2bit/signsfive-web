import React, { Component } from 'react';
import cx from 'classnames';

import { APP_VERSION } from '../constant';
import styles from '../styles/components/package-version.scss';

class PackageVersion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      version: APP_VERSION,
    };
  }

  render() {
    return (
      <sup>
        <span className={cx(styles.version, 'badge badge-pill badge-secondary text-uppercase')}>
          alpha {this.state.version}
        </span>
      </sup>
    );
  }
}

export default PackageVersion;
