import React, {useEffect, useRef} from "react"
import style from './Slider.module.scss'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import img from './../../../common/images/block4/Rectangle 36.png'
export const URL = 'http://165.22.192.77/'

export const Slider = ({acc}) => {
    const carouselRef = useRef()
    return (
        <OwlCarousel
            ref={carouselRef}
            className="owl-theme"
            loop
            center
            autoWidth
            autoplay
            autoplayTimeout={5000}
            smartSpeed={700}
            margin={10}
            items={1}
            style={{
                width: '75%',
                height: '31vw',
                borderRadius:'50px',
                boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.25)',
                overflow:'hidden',
            }}
        >
                    <div className={style.item}>
                        <img src={acc.animal_photo?URL + acc.animal_photo:'https://im0-tub-ru.yandex.net/i?id=f406483937e799b3c2ce106422fa6774&n=13'} />
                    </div>

        </OwlCarousel>
    )
}