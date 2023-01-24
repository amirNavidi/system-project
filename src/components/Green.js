import React from 'react';
import styles from "../styles/green.module.css"

const Green = () => {
    return (
        <div >
            <div className={`d-flex flex-wrap col-12 align-items-center  justify-content-center ${styles.greenParent}`}>
             <div className={`col-md-2 col-12 ${styles.innerParent}`}>
                <h5>22215</h5>
                <p>تعداد درخواست های ارائه شده </p>
             </div>
             <div className={`col-md-2 col-12 ${styles.innerParent}`}>
                <h5>15226</h5>
                <p>تعداد مشتریان </p>
             </div>
             <div className={`col-md-2 col-12 ${styles.innerParent}`}>
                <h5>25628</h5>
                <p>تعداد نمونه های دریافت شده </p>
             </div>
             <div className={`col-md-2 col-12 ${styles.innerParent}`}>
                <h5>541</h5>
                <p>تعداد آزمایشگاه ها</p>
             </div>
             <div className={`col-md-2 col-12 ${styles.innerParent}`}>
                <h5>107</h5>
                <p>تعداد دستگاه ها</p>
             </div>
            </div>
            <div className={styles.white}>

            </div>
        </div>
    );
};

export default Green;