import React ,{useState} from 'react';
import styles from "../styles/right.module.css"
import News from '../components/News';
// data
import { newsData } from '../data/newsData';

const Right = () => {
    const [active, setActive] =useState({
        news:true,
        article:false,
        other:false
      })
    
    return (
        <div className={`col-lg-6 col-9 ${styles.rightParent}`}>
            <div className={` ${styles.middlePage}`}>
                    <ul class={`d-flex  ${styles.newsParent}`}>
                        <li><a onClick={()=>setActive({news:true}) } style={{backgroundColor:active.news?"#01C4DA":"white" ,color:active.news?"white":"black"}} href="##">آخرین خبر ها  </a></li>
                        <li><a onClick={()=>setActive({article:true}) } style={{backgroundColor:active.article?"#01C4DA":"white" ,color:active.article?"white":"black"}} href="##">مقالات علمی  </a> </li>
                        <li><a onClick={()=>setActive({other:true}) } style={{backgroundColor:active.other?"#01C4DA":"white" ,color:active.other?"white":"black"}} href="##">سایر </a> </li>
                    </ul> 
            </div>
                    {
                        newsData.map(item=><News  data={item} />)
                    }
        </div>
    );
};

export default Right;