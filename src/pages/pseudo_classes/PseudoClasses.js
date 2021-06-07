import React from 'react';
import styles from './pseudo_classes.module.scss';

function PseudoClasses(props) {
  return (
    <div>
        <div>
          <h1>THIS IS A TITLE</h1>
        </div>
        <div className={styles.container}>
          <div className={styles.card}>
            <img src="//unsplash.it/400/400" alt="" />
            <div className={styles.content}>
              <h3 className={styles.title}>This is a card</h3>
              <p className={styles.body}> body of the card</p>
            </div>
          </div>
          <div className={styles.card}>
            <img src="//unsplash.it/401/401" alt="" />
            <div className={styles.content}>
              <h3 className={styles.title}>This is a card</h3>
              <p className={styles.body}> body of the card</p>
            </div>
          </div>
        </div>
    </div>
  );
}

export default PseudoClasses;