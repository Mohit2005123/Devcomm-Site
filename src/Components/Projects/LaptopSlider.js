import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './slickStyles.css';

import styles from './laptopScreens.module.css';


const LaptopSlider = (props) => {
    const settings = {
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 1800,
        cssEase: "linear",
        arrows: false,
        pauseOnHover: false,
        focusOnSelect: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    centerMode: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: "40px",
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: "40px",
                    slidesToShow: 1,
                },
            },
        ],

    };
    return (
            <div className="laptopSlideContainer">
                <h2 className={`text-center pt-5 text-light fw-bold`}>{props.title}</h2>
                <Slider {...settings}>
                    {props.screens.map((screen, index) => {
                        return (
                            <div className={styles['slide-container']}>
                                <img src={screen} alt={index} />
                            </div>
                        );
                    })}
                </Slider>
            </div>
    );
}

export default LaptopSlider;