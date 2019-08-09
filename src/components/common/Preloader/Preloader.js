import React from 'react';
import preloader from "../../../assets/gifs/coges.gif";
import style from './Preloader.module.css'

let Preloader = () => {
    return (
        <div className={style.preloaderImage} >
            <img src={preloader} alt='default'/>
        </div>)
};
export default Preloader;