import React from 'react';
import styles from './Page.module.css';



function Page({ children }) {
    return (<section className={styles.root}>
        {children}
    </section>)
}

export default Page;