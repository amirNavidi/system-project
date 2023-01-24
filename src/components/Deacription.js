import React from 'react';

// component
import InnerDescription from './InnerDescription';


// data
import { descriptData } from '../data/descripData';

// styles
import styles from "../styles/desc.module.css"

const Deacription = () => {
    return (
        <div className={`d-flex  justify-content-center ${styles.descriptCell}`}>
           {
            descriptData.map(item=><InnerDescription  key={item.id} more={item} />)
           } 
        </div>
    );
};

export default Deacription;