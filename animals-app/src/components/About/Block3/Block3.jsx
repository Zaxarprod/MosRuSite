import React from "react"
import style from './Block3.module.scss'
import {Col, Row} from "antd";
import group from "../../../common/images/About/groupPhotos.svg";
import svg from "../../../common/images/ping.svg";

export const Block3 = () => {
    return (
        <Row className={style.wrapper}>
            <Col span={3}></Col>
            <Col span={18} className={style.mainBlock}>
                <h2 className={style.header}>Как помочь?</h2>
                <object type="image/svg+xml" data={group} className={style.groupPhotos}>
                    Your browser does not support SVG
                </object>
                <p>
                    Хотите помочь нам и нашим подопечным? Спасибо! Сделать финансовое пожертвование фонду или приюту — самый<br/>
                    надежный способ помочь. Сотрудники фондов знают, что действительно необходимо их подопечным в данный<br/>
                    момент. Каждый рубль важен, ведь именно он может спасти жизнь.
                </p>
                <p>
                    Фонд помощи домашним животным Fundvet.city помогает в первую очередь приюту PetsVillage, где на попечении 1600<br/>
                    животных. PetsVillage более 10 лет. И все эти годы мы спасали, лечили, заботились. По мере сил и средств мы<br/>
                    пытаемся обеспечить лучшие условия для содержания наших животных.
                </p>
                <p>
                    Как бы ни старались, всем им очень нужен дом и любящий хозяин. А нам нужна ваша помощь и поддержка, каждый<br/>
                    рубль важен.
                </p>
                <p>
                    Если вы готовы помогать регулярно, выберите себе подопечного и оформите опекунство над одним или несколькими<br/>
                    животными. Подпишитесь на регулярные пожертвования.
                </p>
                <div className={style.button}>
                    Помочь
                </div>
            </Col>
            <Col span={3}></Col>
        </Row>
    )
}