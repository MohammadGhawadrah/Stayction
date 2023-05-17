import React from 'react'
import img from '../../../src/Assets/hero.png'
import style from './style.module.css';
function HeroImage() {
    return (
        <div >
            <div className={style.heroBorderImg}></div>
            <img className={style.heroImg} src={img} />


        </div>
    )
}

export default HeroImage
