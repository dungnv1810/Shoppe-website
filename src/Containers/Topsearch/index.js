import React, {useState, useEffect, useRef} from "react";
import {BiChevronRight} from "react-icons/bi"
import {FaChevronLeft, FaChevronRight} from "react-icons/fa"
import { TopsearchWrapper } from "./style";
import { Countries } from "./Countries";

const Topsearch = () => {
    const carousel = useRef(null);

    const sliderRightClick = () => {
        console.log(carousel.current.offsetWidth)
        carousel.current.scrollLeft += carousel.current.offsetWidth
    }
    const sliderLeftClick = () => {
        console.log(carousel.current.offsetWidth)
        carousel.current.scrollLeft -= carousel.current.offsetWidth
    }
    return(
        <>
            <TopsearchWrapper>
                <div className="grid wide grid_bk">
                    <div className="row">
                        <div className="l-12">
                            <div className="topsearch_heading">
                                <div className="topsearch_heading-left">TÌM KIẾM HÀNG ĐẦU</div>
                                <button className="topsearch_btn-heading">
                                    Xem tất cả <BiChevronRight className="topsearch_btn-heading-icon"/>
                                </button>
                            </div>
                        </div>
                        <div className="l-12">
                            <div className="container">
                                <div className="carousel_wrapper" ref={carousel}>
                                    {
                                        Countries.map((item, array, index) => {
                                            return(
                                                <a href="#" className="l-2 m-3 carousel_item-link">
                                                    <div className="carousel_item-top">
                                                        <img className="carousel_item-img" src={item.images} alt="ảnh lỗi"/>
                                                        <div className="carousel_item-price">{item.price}</div>
                                                    </div>
                                                    <div className="carousel_item-body">
                                                        <span className="carousel_item-body-title">{item.title}</span>
                                                    </div>
                                                    <div className="carousel_item-tops"></div>
                                                </a>
                                            )
                                        })
                                    }
                                </div>
                                <div onClick={sliderLeftClick} className="carousel_arrow_left">
                                    <FaChevronLeft className="carousel_arrow_icon"/>
                                </div>
                                <div onClick={sliderRightClick} className="carousel_arrow_right">
                                    <FaChevronRight className="carousel_arrow_icon"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </TopsearchWrapper>
        </>
    )
}
export default Topsearch;