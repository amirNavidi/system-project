import React from 'react';
import "./styles/main.css"
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import Header from './components/Header';
import SimpleSlider from './components/Slider';
import { image } from './data/imgData';
import BottomSlider from './components/BottomSlider';
import Deacription from './components/Deacription';
import Left from './components/Left';
import Media from './components/Media';

import Right from './components/Right';
import Green from './components/Green';


const App = () => {

 
  return (
    <div className='app' dir='rtl'>
      <Header />
      <SimpleSlider slider={image} />
      <BottomSlider />
      <Deacription /> 
      <div className='d-flex justify-content-center flex-wrap'>
        <Right />
        <Left /> 
      </div>
      <Media />
      <Green />
    </div>
  );
};

export default App;