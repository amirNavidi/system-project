import React from 'react';
import styles from "../styles/left.module.css"

const Left = () => {
    return (
        <div className={`col-lg-3 col-9 ${styles.leftParent}`}>
            <div className={`${styles.firstParent}`} >
                <p>همکاری های متقابل</p>
            </div>
            <div className={`${styles.secoundParent}`}>
                <a href="#">پژوهشگاه شیمی و مهندسی شیمی ایران </a>
                <a href="#">شرکت کنترل کیفیت هوا </a>
                <a href="#">پژوهشگاه ملی مهندسی ژنتیک و زیست فناوری</a>
                <a href="#">سازمان ملی استاندارد </a>
                <a href="#">سازمان جهاد دانشگاهی صنعتی شریف</a>
                <a href="#">سازمان پژوهش های علمی و صنعتی ایران </a>
                <a href="#">سازمان سیالات حفاری پارس</a>
                <a href="#">شرکت مهندسی و ساخت نیرو گاه اتمی</a>
                <a href="#">شرکت بیم گستر تابان </a>
                <a href="#">شرکت کیتو تک </a>
                <a href="#">پژوهشگاه نیرو </a>
                <a href="#">شرکت آریا سینا کنترل</a>
            </div>
            
        </div>
    );
};

export default Left;