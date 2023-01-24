import React from 'react';
import styles from "../styles/media.module.css"

import aparat from "../images/aparat.png"

const Media = () => {
    return (
        <div className={`${styles.media}`}>
            <img className={`${styles.img}`} src={aparat} alt="aparat logo" />
            <button className={`${styles.btn}`}>رسانه های ما </button>
        </div>
    );
};

export default Media;