import React, { Component } from "react";
import CFN1 from "./createFroNsutRev";
import CFN2 from "./createForNsut";
import styles from './CFNCompiled.module.css';

export default class CFN extends Component {
  render() {
    return (
      <section id="cfn" className={styles['cfn-section']} style={{ padding: '1.5rem' }}>
        <div className="d-flex align-items-center justify-content-center mb-4">
          <h2 className={`fw-bold text-center ${styles['title']}`}>Create for NSUT</h2>
        </div>
        <CFN1 />
        <CFN2 />
      </section>
    );
  }
}


// export default Team;
