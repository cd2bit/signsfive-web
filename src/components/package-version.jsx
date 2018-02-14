import React, { Component } from 'react';
import cx from 'classnames';

import { APP_VERSION } from '../constant';
import styles from '../styles/components/package-version.scss';

/**
 * Returns the NPM package version that was given by process.env.npm_version
 * @see {@link react}
 */
class PackageVersion extends Component {
  /**
   * @reactProps {object} props
   */
  constructor(props) {
    super(props);
    /**
     * @type {{version: APP_VERSION}} state
     */
    this.state = {
      version: APP_VERSION,
    };
  }
  /**
   * Renders the component
   * @return {ReactComponent}
   */
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
