import React, {useState, useEffect, useRef} from "react";
import images01 from "../../Assets/comeback.png"
import images02 from "../../Assets/armor.png"
import images03 from "../../Assets/oto.png"
import {BiChevronRight} from "react-icons/bi"
import {FaChevronLeft, FaChevronRight} from "react-icons/fa"
import { ShoppeeMallWrapper } from "./style";
import { Countries } from "./Countries";
import { Countriess } from "./Countries";
const ShoppeeMall = () => {
    const [current, setCurrent] = useState(0);
    const [autoPlay, setAutoPlay] =useState(true)
    let timeOut = null
    const carousel = useRef(null)
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
    const handleRightClick = () => {
        console.log(carousel.current.offsetWidth)
        carousel.current.scrollLeft += carousel.current.offsetWidth
    }
    const handleLeftClick = () => {
        console.log(carousel.current.offsetWidth)
        carousel.current.scrollLeft -= carousel.current.offsetWidth
    }
    return(
        <>
            <ShoppeeMallWrapper>
                <div className="grid wide grid_bk">
                    <div className="row">
                        <div className="l-12">
                            <div className="ShoppeeMall_heading">
                                <div className="ShoppeeMall_heading-item">
                                    <a href="" className="ShoppeeMall_heading-link-left">
                                        SHOPEE MALL
                                    </a>
                                    <ul className="ShoppeeMall_list">
                                        <li className="ShoppeeMall_list-item">
                                            <a href="#" className="ShoppeeMall_list-link">
                                                <img src={images01} alt="ảnh lỗi" className="ShoppeeMall_list-img"/>
                                                7 Ngày Miễn Phí Trả Hàng
                                            </a>
                                        </li>
                                        <li className="ShoppeeMall_list-item">
                                            <a href="#" className="ShoppeeMall_list-link">
                                                <img src={images02} alt="ảnh lỗi" className="ShoppeeMall_list-img"/>
                                                Hàng Chính Hãng 100%
                                            </a>
                                        </li>
                                        <li className="ShoppeeMall_list-item">
                                            <a href="#" className="ShoppeeMall_list-link">
                                                <img src={images03} alt="ảnh lỗi" className="ShoppeeMall_list-img"/>
                                                Miễn Phí Vận Chuyển
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <button className="ShoppeeMall_btn-right">
                                    Xem Tất Cả
                                    <div className="ShoppeeMall_btn-icon">
                                        <BiChevronRight className="ShoppeeMall_btn-icon-right"/>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div className="l-4">
                            <div className="carousel_wrapper" 
                                onMouseEnter={()=>{setAutoPlay(false)}}
                                onMouseLeave={()=>{setAutoPlay(true)}}
                                >
                                {
                                    Countries.map((item, index) => {
                                        return(
                                            <div key={index} className={index === current ? "carousel_card carousel_card-active" : "carousel_card"}>
                                                <img src={item.images} alt="" className="card_images"/>
                                                <div className="card_overlay">
                                                    <p className="card_title">
                                                                    
                                                    </p>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                                <div onClick={sliderLeft} className="carousel_arrow_left">
                                    <FaChevronLeft className="carousel_arrow_icon"/>
                                </div>
                                <div onClick={sliderRight} className="carousel_arrow_right">
                                    <FaChevronRight className="carousel_arrow_icon"/>
                                </div>
                                <div className="caroseo_pagination">
                                    {
                                        Countries.map((_,index) => {
                                            return(
                                                <div onClick={()=>setCurrent(index)} className={index === current ? "pagination_dot pagination_dot-active" : "pagination_dot"}></div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="l-8">
                            <div className="container_carousel">
                                <div className="carousel_wrapper" ref={carousel}>
                                    {
                                        Countriess.map((item, array, index) => {
                                            return(
                                                <div className="l-3 m-4 grid_column">
                                                    <ul className="carousel_list">
                                                        <li className="carousel_list-item">
                                                            <a href="#" className="carousel_list-item-link">
                                                                <img src={item.images} alt="ảnh lỗi" className="carousel_list-item-link-img"/>
                                                            </a>
                                                            <div className="carousel_list-item-title">
                                                                {item.title}
                                                            </div>
                                                        </li>
                                                        <li className="carousel_list-item">
                                                            <a href="#" className="carousel_list-item-link">
                                                                <img src={item.imagess} alt="ảnh lỗi" className="carousel_list-item-link-img"/>
                                                            </a>
                                                            <div className="carousel_list-item-title">
                                                                {item.title}
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <div onClick={handleLeftClick} className="carousel_arrow_btn-left">
                                    <FaChevronLeft className="carousel_arrow_icon"/>
                                </div>
                                <div onClick={handleRightClick} className="carousel_arrow_btn-right">
                                    <FaChevronRight className="carousel_arrow_icon"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ShoppeeMallWrapper>
        </>
    )
}
export default ShoppeeMall