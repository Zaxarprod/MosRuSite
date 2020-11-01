import React from "react"
import style from './Home.module.scss'
import svg from './../../common/images/ping.svg'
import {Block1} from "./Block1/Block1";
import {Block2} from "./Block2/Block2";
import {Block3} from "./Block3/Block3";
import {Block4} from "./Block4/Block4";
import {Block5} from "./Block5/Block5";
import {Block6} from "./Block6/Block6";

export const Home = () => {
    return (
        <div className={style.home}>
            <object type="image/svg+xml" data={svg} className={style.pingSvg}>
                Your browser does not support SVG
            </object>
            <Block1 />
            <Block2 />
            <Block3 />
            <Block4 />
            <Block5 />
            <Block6 />
        </div>
    )
}
