import React from 'react';

// styles
import styles from "../styles/underSlider.module.css"

// images
import searchLogo from "../images/search.png"
import followUp from "../images/followUp.png"

const BottomSlider = () => {
    return (
        <div className={`d-flex justify-content-center  ${styles.bottomParent}`}>

           <div className={`col-md-6 col-lg-5 col-10 ${styles.searchBox}`}>
              <img src={searchLogo} alt="search" />
              <input type="text" placeholder='آزمون مورد نظر خود را بیابید...' />
              <button className={`${styles.buton}`}>جستو جو </button>
           </div>

           <div className={`d-flex align-items-center col-lg-4 col-xl-3 col-8  col-md-5 ${styles.followUpParent}`}>
            <img src={followUp} alt="follow-up" />
            <div>
                <h5>پیگیری درخواست </h5>
                <p>مشاهده وضعیت درخواست و دریافت نتیجه آزمون</p>
            </div>
           </div>
        </div>
    );
};

export default BottomSlider;