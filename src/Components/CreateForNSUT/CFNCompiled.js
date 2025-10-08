import React, { Component } from "react";
import CFN1 from "./createFroNsutRev";
import CFN2 from "./createForNsut";
import { Element } from 'react-scroll';
import styles from './CFNCompiled.module.css';

export default class CFN extends Component {
  render() {
    return (
      <Element fluid id="cfn">
        <div fluid className={`p-4 ${styles['cfn-section']}`}>
          <div className={`d-flex align-items-center justify-content-center`}>
            <h2 className={`fw-bold text-center ${styles['title']}`}>Create for NSUT</h2>
          </div>
          <CFN1 />
          <CFN2 />
        </div>
      </Element>
    );
  }
}

// export default Team;
