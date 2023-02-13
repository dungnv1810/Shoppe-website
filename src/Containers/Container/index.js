import React from "react";
import {BiListUl, BiChevronDown} from "react-icons/bi"
import {FiChevronLeft, FiChevronRight} from "react-icons/fi"
import {AiFillHeart, AiOutlineHeart, AiFillStar} from "react-icons/ai"
import {BsCheck} from "react-icons/bs"
import { ContainerWrapper } from "./style";
import { Countries } from "./Countries";
const Container = () => {
    return(
        <>
            <ContainerWrapper>
                <div className="grid wide">
                    <div className="row">
                        <div className="l-2">
                            <nav className="category">
                                <h3 className="category_heading">
                                    <BiListUl className="category_heading-icon"/>Danh mục
                                </h3>
                                <ul className="category_list">
                                    <li className="category_item category_item-active">
                                        <a href="#" className="category_item-link">Tất Cả Sản Phẩm</a>
                                    </li>
                                    <li className="category_item">
                                        <a href="#" className="category_item-link">Dịch Vụ</a>
                                    </li>
                                    <li className="category_item">
                                        <a href="#" className="category_item-link">Thực Phẩm Chức Năng</a>
                                    </li>
                                    <li className="category_item">
                                        <a href="#" className="category_item-link">Set Su:M37 MiNi</a>
                                    </li>
                                    <li className="category_item">
                                        <a href="#" className="category_item-link">Set Whoo MiNi</a>
                                    </li>
                                    <li className="category_item">
                                        <a href="#" className="category_item-link">Set Ohui MiNi</a>
                                    </li>
                                    <li className="category_item">
                                        <a href="#" className="category_item-link">Su:M37 make up</a>
                                    </li>
                                    <li className="category_item">
                                        <a href="#" className="category_item-link">Su:M37 chống nắng sun away</a>
                                    </li>
                                    <li className="category_item">
                                        <a href="#" className="category_item-link">Su:M37 cấp ấm water full</a>
                                    </li>
                                    <li className="category_item">
                                        <a href="#" className="category_item-link">Su:M37 dướng trắng</a>
                                    </li>
                                    <li className="category_item">
                                        <a href="#" className="category_item-link">Su:M37 chống lão hóa</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="l-10 m-12 c-12">
                            <div className="home-filter">
                                <span className="home-filter_label">Sắp Xếp Theo</span>
                                <button className="btn home-filter-btn">Phổ Biến</button>
                                <button className="btn home-filter-btn btn-primary">Mới Nhất</button>
                                <button className="btn home-filter-btn">Bán Chạy</button>
                                <div className="select-input">
                                    <span className="select-input-label">Giá</span>
                                    <BiChevronDown className="select-input-icon"/>
                                    <ul className="select-input-list">
                                        <li className="select-input-item">
                                            <a href="#" className="select-input-link">Gía: Thấp đến cao</a>
                                        </li>
                                        <li className="select-input-item">
                                            <a href="#" className="select-input-link">Gía: Cao đến thấp</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="home-filter-page">
                                    <span className="home-filter-page-number">
                                        <span className="home-filter-page-current">1</span>/14
                                    </span>
                                    <div className="home-filter-page-control">
                                        <a href="#" className="home-filter-page-btn home-filter-page-btn-disabled">
                                            <FiChevronLeft className="home-filter-page-icon"/>
                                        </a>
                                        <a href="#" className="home-filter-page-btn">
                                            <FiChevronRight className="home-filter-page-icon"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <nav className="mobile-category">
                                <div className="row app_content">
                                    <ul className="mobile-category-list">
                                        <li className="mobile-category-item">
                                            <a href="#" className="mobile-category-link">
                                                Dụng cụ & thiết bị tiện ích
                                            </a>
                                        </li>
                                        <li className="mobile-category-item">
                                            <a href="#" className="mobile-category-link">
                                                Thiết bị điện da dụng
                                            </a>
                                        </li>
                                        <li className="mobile-category-item">
                                            <a href="#" className="mobile-category-link">
                                                Đồ dùng phòng bếp
                                            </a>
                                        </li>
                                        <li className="mobile-category-item">
                                            <a href="#" className="mobile-category-link">
                                                Dụng cụ nhà bếp
                                            </a>
                                        </li>
                                        <li className="mobile-category-item">
                                            <a href="#" className="mobile-category-link">
                                                Phụ kiện bàn ăn
                                            </a>
                                        </li>
                                        <li className="mobile-category-item">
                                            <a href="#" className="mobile-category-link">
                                                Thời trang nam
                                            </a>
                                        </li>
                                        <li className="mobile-category-item">
                                            <a href="#" className="mobile-category-link">
                                                Giặt giũ chăm sóc nhà
                                            </a>
                                        </li>
                                        <li className="mobile-category-item">
                                            <a href="#" className="mobile-category-link">
                                                Phụ kiện thời trang
                                            </a>
                                        </li>
                                        <li className="mobile-category-item">
                                            <a href="#" className="mobile-category-link">
                                                Dụng cụ và thiết bị tiện ích
                                            </a>
                                        </li>
                                        <li className="mobile-category-item">
                                            <a href="#" className="mobile-category-link">
                                                Mẹ & Bé
                                            </a>
                                        </li>
                                        <li className="mobile-category-item">
                                            <a href="#" className="mobile-category-link">
                                                Sức khỏe sắc đẹp
                                            </a>
                                        </li>
                                        <li className="mobile-category-item">
                                            <a href="#" className="mobile-category-link">
                                                Thời trang nữ
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                            <div className="home-product">
                                <div className="row app_conten">
                                    {
                                        Countries.map((item, array, index) => {
                                            return(
                                                <div className="l-2-4 m-4 c-6">
                                                    <div key={item.id} className="home-product-item">
                                                        <div className="home-product-item-img">
                                                            <img src={item.images} alt="ảnh lỗi" className="home-product-item-olui"/>
                                                        </div>
                                                        <div className="home-product-body">
                                                            <h4 className="home-product-item-name">
                                                                {item.name}
                                                            </h4>
                                                            <div className="home-product-item-price">
                                                                <span className="home-product-item-price-old">{item.oldPrice}</span>
                                                                <span className="home-product-item-price-current">{item.price}</span>
                                                            </div>
                                                            <div className="home-product-item-action">
                                                                <span className="home-product-item-like home-product-item-like-kiked">
                                                                    <AiOutlineHeart className="home-product-item-like-icon-empty"/>
                                                                    <AiFillHeart className="home-product-item-like-icon-fill"/>
                                                                </span>
                                                                <div className="home-product-item-rating">
                                                                    <AiFillStar className="home-product-item-rating-icon"/>
                                                                    <AiFillStar className="home-product-item-rating-icon"/>
                                                                    <AiFillStar className="home-product-item-rating-icon"/>
                                                                    <AiFillStar className="home-product-item-rating-icon"/>
                                                                    <AiFillStar className="home-product-item-rating-icon"/>
                                                                </div>
                                                                <span className="home-product-item-sold">{item.sold}</span>
                                                            </div>
                                                            <div className="home-product-item-origin">
                                                                <span className="home-product-item-brand">Whoo</span>
                                                                <span className="home-product-origin-name">{item.position}</span>
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
                                                    </div> 
                                                </div> 
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <ul className="pagination">
                                <li className="pagination-item">
                                    <a href="" className="pagination-item-link">
                                        <FiChevronLeft className="pagination-item-icon"/>
                                    </a>
                                </li>
                                <li className="pagination-item pagination-item-active">
                                    <a href="" className="pagination-item-link">
                                        1
                                    </a>
                                </li>
                                <li className="pagination-item">
                                    <a href="" className="pagination-item-link">
                                        2
                                    </a>
                                </li>
                                <li className="pagination-item">
                                    <a href="" className="pagination-item-link">
                                        3
                                    </a>
                                </li>
                                <li className="pagination-item">
                                    <a href="" className="pagination-item-link">
                                        4
                                    </a>
                                </li>
                                <li className="pagination-item">
                                    <a href="" className="pagination-item-link">
                                        5
                                    </a>
                                </li>
                                <li className="pagination-item">
                                    <a href="" className="pagination-item-link">
                                        ...
                                    </a>
                                </li>
                                <li className="pagination-item">
                                    <a href="" className="pagination-item-link">
                                        <FiChevronRight className="pagination-item-icon"/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </ContainerWrapper>
        </>
    )
}
export default Container;