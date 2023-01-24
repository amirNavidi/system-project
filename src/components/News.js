import React from 'react';
import img from "../images/logoWithout.png"
import styles from "../styles/news.module.css"

const News = ({data}) => {
    return (
        <div className={`d-flex ${styles.parent}`}>
            <img className={styles.logo} src={img} alt="logo" />
            <div>
                <p className={styles.date}>{data.date}</p>
                <h5 className={styles.description}>{data.description}</h5>
            </div>
        </div>
    );
};

export default News;