import React, {useEffect, useState, useRef} from "react";
import { Countries} from "./Countries";
import {FiChevronRight} from "react-icons/fi"
import { FlashsaleWrapper } from "./style";
import flashsale from "../../Assets/flashsale.png"
import sale from "../../Assets/ace01ab33c0c679585d324ce8b3db537.png"
import {FaChevronLeft, FaChevronRight} from "react-icons/fa"
import {BsCheck} from "react-icons/bs"
const Flashsale = () => {
    const carousel = useRef(null)
    useEffect(()=>{
        fetch("")
        .then(res => res.json())
        .then(res => console.log('res', res))
        .catch(err => console.log(err))
    },[])
    const handleLeftClick = () => {
        console.log(carousel.current.offsetWidth)
        carousel.current.scrollLeft -= carousel.current.offsetWidth
    }
    const handleRightClick = () => {
        console.log(carousel.current.offsetWidth)
        carousel.current.scrollLeft += carousel.current.offsetWidth
    }
    
    return(
        <>
            <FlashsaleWrapper>
                <div className="grid wide">
                    <div className="row">
                        <div className="flashsale_heading">
                            <div className="flashsale_images-item">
                                <img src={flashsale} alt="ảnh lỗi" className="flashsale_images"/>
                            </div>
                            <button className="flashsale_btn">Xem Tất Cả <FiChevronRight className="flashsale_icon"/></button>
                        </div>
                        <div className="container">
                            <div className="carousel" ref={carousel}>
                                {
                                    Countries.map((item, array, index) => {
                                        return(
                                            <a href="#" key={item.id} className="l-2 m-3 carousel_item-link">
                                                <div className="carousel_item-top">
                                                    <img className="carousel_item-img" src={item.images} alt="ảnh lỗi"/>
                                                    <img className="carousel_item-img-sale" src={sale} alt="ảnh lỗi"/>
                                                </div>
                                                <div className="carousel_item-body">
                                                    <p className="carousel_item-price">
                                                        <span>đ</span>{item.price}
                                                    </p>
                                                </div>
                                                <div className="carousel_item-bottom">
                                                    <div className="carousel_item-rZzxlM">
                                                        <div className="flashsale_product-eNmE7oRJ6Vpu">ĐANG BÁN CHẠY</div>
                                                        <div className="flashsale_product-d3m1Az"></div>
                                                        <div className="flashsale_product-sqDxib"></div>
                                                    </div>
                                                </div>
                                                <div className="home-product-item-favourite">
                                                    <BsCheck className="home-product-item-favourite-icon"/>
                                                    <span>Yêu thích</span>
                                                </div>
                                                <div className="home-product-item-sale-off">
                                                    <span className="home-product-item-sale-off-persent">43%</span>
                                                    <label className="home-product-item-sale-off-label">GIẢM</label>
                                                </div>
                                            </a>
                                        )
                                    })
                                }
                            </div>
                            <div onClick={handleLeftClick} className="carousel_arrow_left">
                                <FaChevronLeft className="carousel_arrow_icon"/>
                            </div>
                            <div onClick={handleRightClick} className="carousel_arrow_right">
                                <FaChevronRight className="carousel_arrow_icon"/>
                            </div>
                        </div>
                    </div>
                </div>
            </FlashsaleWrapper>
        </>
    )
}
export default Flashsale;