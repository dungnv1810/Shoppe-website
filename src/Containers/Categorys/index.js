import React, {useState, useEffect, useRef} from "react";
import { CategorysWrapper } from "./style";
import { Countries } from "./Countries";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa"
const Categorys = () => {
    const carousel = useRef(null)
    const sliderLeftClick = () => {
        console.log(carousel.current.offsetWidth)
        carousel.current.scrollLeft -= carousel.current.offsetWidth
    }
    const sliderRightClick = () => {
        console.log(carousel.current.offsetWidth)
        carousel.current.scrollLeft += carousel.current.offsetWidth
    }
    return(
        <>
            <CategorysWrapper>
                <div className="grid wide">
                    <div className="row">
                        <div className="l-12">
                            <div className="catogory_heading">
                                <span className="catogory_heading-title">DANH MỤC</span>
                            </div>
                        </div>
                        <div className="l-12">
                            <div className="container_carousel">
                                <div className="carousel_wrapper" ref={carousel}>
                                    {
                                        Countries.map((item, array, index) => {
                                            return(
                                                <div className="grid_column">
                                                    <ul className="carousel_list">
                                                        <li className="carousel_list-item">
                                                            <a href="#" className="carousel_list-item-link">
                                                                <img src={item.images} alt="ảnh lỗi" className="carousel_list-item-link-img"/>
                                                                <div className="carousel_list-item-title">
                                                                    {item.title}
                                                                </div>
                                                            </a>
                                                        </li>
                                                        <li className="carousel_list-item">
                                                            <a href="#" className="carousel_list-item-link">
                                                                <img src={item.imagess} alt="ảnh lỗi" className="carousel_list-item-link-img"/>
                                                                <div className="carousel_list-item-title">
                                                                    {item.titles}
                                                                </div>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <div onClick={sliderLeftClick} className="carousel_arrow_btn-left">
                                    <FaChevronLeft className="carousel_arrow_icon"/>
                                </div>
                                <div onClick={sliderRightClick} className="carousel_arrow_btn-right">
                                    <FaChevronRight className="carousel_arrow_icon"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </CategorysWrapper>
        </>
    )
}
export default Categorys;