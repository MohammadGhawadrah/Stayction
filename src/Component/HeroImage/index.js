import React from 'react'

import style from './style.module.css';
function HeroImage({ img }) {
    return (
        <div >
            <div className={style.heroBorderImg}></div>
            <img className={style.heroImg} src={img} />
        </div>
    )
}

export default HeroImage
