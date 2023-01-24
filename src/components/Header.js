import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';



// styles
import styles from "../styles/header.module.css" ;

// logo
import logo from "../images/logo.png";

// Icons
import * as Icon from 'react-bootstrap-icons';





const Header = () => {
 
    let [name , setName]=useState({
        home:true,
        fallowUp:false,
        list:false,
        guid:false,
        download:false,
        news:false,
        port:false,
        call:false,
        table:false,
        enter:false
    })

    let [hambur ,setHambur]=useState(false);
    const changeHambur=()=>{
        setHambur(!hambur)
    }


    return (
        <div className={`${styles.headerParent}`}>
            
         <div className={`d-flex  ${styles.container}`}>
        
            <div className="d-flex col-lg-2">
            <div className={`col-4 col-lg-6 m-3 ${styles.logoParent}`}>
                    <img className={styles.logo} src={logo} alt="logo" />
                </div>
                <div className={`col-6 ${styles.newsParent}`}>
                    <p className={`mt-3 ${styles.lastNews}`}>آخرین خبر</p>
                     <ul>
                        <li className={styles.news}>
                            <span>
                                    <Typewriter
                                    options={{
                                    strings: ['تعطیلی ساعتی پذیرش ', 'تمدید مهلت استفاده از اعتبار ' ,'تعطیلی ساعتی روز دوشنبه'],
                                    autoStart: true,
                                    loop: true,
                                    }}
                                    />
                            </span> 
                        </li>
                     </ul>
                   
                </div>
            </div>

       
            <div className={ `col-md-7 col-8 ${styles.centerParent}`}>
                 <div className={`${styles.sloganParent}`}><h5 className={`mt-2 ${styles.slogan}`}>سامانه جامع مدیریت اطلاعات آزمایشگاهی</h5></div>
                 <nav className={styles.nav} id="nav">
                    <ul className={`d-flex align-items-end justify-content-around ${styles.linksParent}`}>
                        <li><a href='#' className={`${styles.active}`} onClick={()=>setName({home:true})} style={{backgroundColor:name.home?" #FFC107":"transparent",color:name.home?"white":"purple"}}>صفحه اصلی</a></li>
                        <li><a href='#' className={`${styles.active}`} onClick={()=>setName({fallowUp:true})} style={{backgroundColor:name.fallowUp?" #FFC107":"transparent",color:name.fallowUp?"white":"purple"}} >پیگیری درخواست </a></li>
                        <li><a href='#' className={`${styles.active}`} onClick={()=>setName({list:true})} style={{backgroundColor:name.list?" #FFC107":"transparent",color:name.list?"white":"purple"}}>لیست آزمون ها </a></li>
                        <li><a href='#' className={`${styles.active}`} onClick={()=>setName({guid:true})} style={{backgroundColor:name.guid?" #FFC107":"transparent",color:name.guid?"white":"purple"}}>راهنمای ثبت درخواست انجام آزمون </a></li>
                        <li><a href='#' className={`${styles.active}`} onClick={()=>setName({download:true})} style={{backgroundColor:name.download?" #FFC107":"transparent",color:name.download?"white":"purple"}}>دانلود ها </a></li>
                        <li><a href='#' className={`${styles.active}`} onClick={()=>setName({news:true})} style={{backgroundColor:name.news?" #FFC107":"transparent",color:name.news?"white":"purple"}}>اخبار</a></li>
                        <li><a href='#' className={`${styles.active}`} onClick={()=>setName({port:true})} style={{backgroundColor:name.port?" #FFC107":"transparent",color:name.port?"white":"purple"}}>درگاه اینترنتی پرداخت </a></li>
                        <li><a href='#' className={`${styles.active}`} onClick={()=>setName({call:true})} style={{backgroundColor:name.call?" #FFC107":"transparent",color:name.call?"white":"purple"}}>تماس با ما </a></li>
                    </ul>
                 </nav>
            </div>

            <div className={`col-md-3 d-flex justify-content-end ${styles.loginParent}`}>
                <div className={`col-md-7 d-flex  align-items-center ${styles.login}`}>
                  <div>
                    <p className={`${styles.welcome}`}>کاربرد عزیز خوش آمدید</p>
                    <a href="#">ورود به پرتال مشتریان </a>/<a href='#'>ثبت نام </a><span ><Icon.Person color='purple' size={36}/></span>
                  </div>
                </div>

            </div>
            <div className={` ${styles.hamburParent}`}>{hambur ?<Icon.XLg onClick={changeHambur} size={32}/>:   <Icon.List onClick={changeHambur} size={32}/> }</div>
         </div>
         
           {/* divider */}
           <div className={`${styles.divider}`}></div>

         {/* Horizon menue */}
          <div className={`${styles.horizentalParent}`} style={{right:hambur?"0" :"100%"}} >

                <nav className={`${styles.horizental}`}>
                    <ul className={`${styles.linksParent}`}>
                        <li><a href='#'  onClick={()=>setName({enter:true})} style={{backgroundColor:name.enter?" #FFC107":"transparent",color:name.enter?"white":"purple"}}><Icon.Person size={20} />  ورود به حساب کاربری  </a></li>
                        <li><a href='#'  onClick={()=>setName({home:true})} style={{backgroundColor:name.home?" #FFC107":"transparent",color:name.home?"white":"purple"}}>صفحه اصلی</a></li>
                        <li><a href='#'  onClick={()=>setName({fallowUp:true})} style={{backgroundColor:name.fallowUp?" #FFC107":"transparent",color:name.fallowUp?"white":"purple"}} >پیگیری درخواست </a></li>
                        <li><a href='#'  onClick={()=>setName({list:true})} style={{backgroundColor:name.list?" #FFC107":"transparent",color:name.list?"white":"purple"}}>لیست آزمون ها </a></li>
                        <li><a href='#'  onClick={()=>setName({guid:true})} style={{backgroundColor:name.guid?" #FFC107":"transparent",color:name.guid?"white":"purple"}}>راهنمای ثبت درخواست انجام آزمون </a></li>
                        <li><a href='#'  onClick={()=>setName({download:true})} style={{backgroundColor:name.download?" #FFC107":"transparent",color:name.download?"white":"purple"}}>دانلود ها </a></li>
                        <li><a href='#'  onClick={()=>setName({news:true})} style={{backgroundColor:name.news?" #FFC107":"transparent",color:name.news?"white":"purple"}}>اخبار</a></li>
                        <li><a href='#'  onClick={()=>setName({port:true})} style={{backgroundColor:name.port?" #FFC107":"transparent",color:name.port?"white":"purple"}}>درگاه اینترنتی پرداخت </a></li>
                        <li><a href='#'  onClick={()=>setName({call:true})} style={{backgroundColor:name.call?" #FFC107":"transparent",color:name.call?"white":"purple"}}>تماس با ما </a></li>
                    </ul>
                 </nav>

          </div>

       

        </div>
    );
};

export default Header;