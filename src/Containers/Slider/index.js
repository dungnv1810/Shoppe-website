import React, {useState, useEffect} from "react";
import { SliderWrapper } from "./style";
import {Countries} from "./Countries";
import { ListLogo } from "./Countries";
import images01 from "../../Assets/images01.jpg"
import images02 from "../../Assets/images02.png"
const Slider = () => {
    const [current, setCurrent] = useState(0);
    const [autoPlay, setAutoPlay] = useState(true);
    let timeOut = null
    useEffect(()=>{
        timeOut = autoPlay && setTimeout(()=>{
            sliderRight()
        },2500)
    })
    const sliderRight = () => {
        if(current + 1 === Countries.length){
            setCurrent(0)
        }else{
            setCurrent(current + 1)
        }
    }
    const sliderLeft = () => {
        if(current === 0){
            setCurrent(Countries.length - 1)
        }else{
            setCurrent(current - 1)
        }
    }
    return (
        <>
            <SliderWrapper>
                <div className="grid wide">
                    <div className="row">
                        <div className="l-8">
                            <div className="carousel_wrapper"
                                onMouseEnter={()=>{setAutoPlay(false)}}
                                onMouseLeave={()=>{setAutoPlay(true)}}
                                >
                                {
                                    Countries.map((item, index, array) => {
                                        return(
                                            <div key={index} className={index === current ? "carousel_card carousel_card-active" : "carousel_card"}>
                                                <img src={item.images} alt="ảnh lỗi" className="card_images"/>
                                                <div className="card_overlay">
                                                    <p className="card_title">
                                                                    
                                                    </p>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                                <div className="carousel_arrow_left" onClick={sliderLeft}>
                                    &lsaquo;
                                </div>
                                <div className="carousel_arrow_right" onClick={sliderRight}>
                                    &rsaquo;
                                </div>
                                <div className="caroseo_pagination">
                                    {
                                        Countries.map((_,index) => {
                                            return(
                                                <div onClick={()=>setCurrent(index)} key={index} className={index === current ? "pagination_dot pagination_dot-active" : "pagination_dot"}></div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="l-4">
                            <div className="carousel_wrapper-images">
                                <a href="#" className="carousel_link">
                                    <img src={images01} alt="ảnh lỗi" className="carousel_img"/>
                                </a>
                                <a href="#" className="carousel_link">
                                    <img src={images02} alt="ảnh lỗi" className="carousel_img"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-12">
                        {
                            ListLogo.map((item, index, array) => {
                                return(
                                    <div className="l-1-5">
                                        <a href="#" className="carousel_link-list">
                                            <div className="carousel_link-item">
                                                <img src={item.images} alt="ảnh lỗi" className="carousel_link-images"/>
                                            </div>
                                            <p className="carousel_title">
                                                {item.title}
                                            </p>
                                        </a>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </SliderWrapper>
        </>
    )
}
export default Slider