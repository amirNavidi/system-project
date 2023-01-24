import React from 'react';
import styles from "../styles/desc.module.css"

const InnerDescription = ({more}) => {
    return (
        <div className={` justify-center col-lg-2 col-md-6 col-10 ${styles.descParent}`}>
            <div className={`${styles.imgParent}`}>
                <img src={require(`../images/${more.image}.png`)} alt={more.id} />
            </div>

            <div className={`${styles.leftParent}`}>
                <h5>{more.head}</h5>
                <p>{more.desc}</p>
                <button>ادامه مطلب</button>
            </div>
            
        </div>
    );
};

export default InnerDescription;