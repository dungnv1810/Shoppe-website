import React from "react";
import {BsFacebook} from "react-icons/bs"
import {AiFillInstagram} from "react-icons/ai"
import {IoLogoLinkedin} from "react-icons/io"
import images01 from "../../Assets/QRcode.png"
import images02 from "../../Assets/app-store.png"
import images03 from "../../Assets/google-play.png"
import images04 from "../../Assets/appgallery.png"
import images05 from "../..//Assets/visa.png"
import images06 from "../../Assets/loading.png"
import images07 from "../../Assets/jcb.png"
import images08 from "../../Assets/american.png"
import images09 from "../../Assets/cod.png"
import images10 from "../../Assets/tragop.png"
import images11 from "../../Assets/pay.png"
import images12 from "../../Assets/spaylater.png"
import images13 from "../../Assets/shopee.png"
import images14 from "../../Assets/grap.png"
import images15 from "../../Assets/ghn.jpg"
import images16 from "../../Assets/viettel.png"
import images17 from "../../Assets/v.png"
import images18 from "../../Assets/j&t.png"
import images19 from "../../Assets/grabexpress.png"
import images20 from "../../Assets/nịnavan.png"
import images21 from "../../Assets/best.png"
import images22 from "../../Assets/be.png"
import { FooterWrapper } from "./style";
import "../../App.css"
const Footer = () => {
    return(
        <>
            <FooterWrapper>
                <div className="grid wide bd-bt-1">
                    <div className="row app_content">
                        <div className="l-2-4 m-4 c-6">
                                <h3 className="footer-heading">CHĂM SÓC KHÁCH HÀNG</h3>
                                <ul className="footer-list">
                                    <li className="footer-list-item">
                                        <a href="#" className="footer-list-link">Trung tâm trợ giúp</a>
                                    </li>
                                    <li className="footer-list-item">
                                        <a href="#" className="footer-list-link">Shopee Blog</a>
                                    </li>
                                    <li className="footer-list-item">
                                        <a href="#" className="footer-list-link">Shopee Mall</a>
                                    </li>
                                    <li className="footer-list-item">
                                        <a href="#" className="footer-list-link">Hướng Dẫn Mua Hàng</a>
                                    </li>
                                    <li className="footer-list-item">
                                        <a href="#" className="footer-list-link">Hướng Dẫn Bán Hàng</a>
                                    </li>
                                    <li className="footer-list-item">
                                        <a href="#" className="footer-list-link">Thanh Toán</a>
                                    </li>
                                    <li className="footer-list-item">
                                        <a href="#" className="footer-list-link">Shopee Xu</a>
                                    </li>
                                    <li className="footer-list-item">
                                        <a href="#" className="footer-list-link">Vận Chuyển</a>
                                    </li>
                                    <li className="footer-list-item">
                                        <a href="#" className="footer-list-link">Trả Hàng & Hoàn Tiền</a>
                                    </li>
                                    <li className="footer-list-item">
                                        <a href="#" className="footer-list-link">Chăm Sóc Khách Hàng</a>
                                    </li>
                                    <li className="footer-list-item">
                                        <a href="#" className="footer-list-link">Chính Sách Bảo Hành</a>
                                    </li>
                                </ul>
                        </div>
                        <div className="l-2-4 m-4 c-6">
                            <div className="">
                                <h3 className="footer-heading">VỀ SHOPEE</h3>
                                <ul className="footer-list">
                                    <li className="footer-list-item">
                                        <a href="#" className="footer-list-link">Giới Thiệu Về Shopee Việt Nam</a>
                                    </li>
                                    <li className="footer-list-item">
                                        <a href="#" className="footer-list-link">Tuyển dụng</a>
                                    </li>
                                    <li className="footer-list-item">
                                        <a href="#" className="footer-list-link">Điều Khoản Shopee</a>
                                    </li>
                                    <li className="footer-list-item">
                                        <a href="#" className="footer-list-link">Chính Sách Bảo Mật</a>
                                    </li>
                                    <li className="footer-list-item">
                                        <a href="#" className="footer-list-link">Chính Hãng</a>
                                    </li>
                                    <li className="footer-list-item">
                                        <a href="#" className="footer-list-link">Kênh Người Bán</a>
                                    </li>
                                    <li className="footer-list-item">
                                        <a href="#" className="footer-list-link">Flash Sales</a>
                                    </li>
                                    <li className="footer-list-item">
                                        <a href="#" className="footer-list-link">Chương Trình Tiếp Thị Liên Kết Shopee</a>
                                    </li>
                                    <li className="footer-list-item">
                                        <a href="#" className="footer-list-link">Liên Hệ Với Truyền Thông</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="l-2-4 m-4 c-6">
                            <div className="">
                                <h3 className="footer-heading">THANH TOÁN</h3>
                                <ul className="footer-pay">
                                    <li className="footer-pay-item">
                                        <a href="#" className="footer-pay-link">
                                            <img src={images05} alt="ảnh lỗi" className="footer-pay-img"/>
                                        </a>
                                    </li>
                                    <li className="footer-pay-item">
                                        <a href="#" className="footer-pay-link">
                                            <img src={images06} alt="ảnh lỗi" className="footer-pay-img"/>
                                        </a>
                                    </li>
                                    <li className="footer-pay-item">
                                        <a href="#" className="footer-pay-link">
                                            <img src={images07} alt="ảnh lỗi" className="footer-pay-img"/>
                                        </a>
                                    </li>
                                    <li className="footer-pay-item">
                                        <a href="#" className="footer-pay-link">
                                            <img src={images08} alt="ảnh lỗi" className="footer-pay-img"/>
                                        </a>
                                    </li>
                                    <li className="footer-pay-item">
                                        <a href="#" className="footer-pay-link">
                                            <img src={images09} alt="ảnh lỗi" className="footer-pay-img"/>
                                        </a>
                                    </li>
                                    <li className="footer-pay-item">
                                        <a href="#" className="footer-pay-link">
                                            <img src={images10} alt="ảnh lỗi" className="footer-pay-img"/>
                                        </a>
                                    </li>
                                    <li className="footer-pay-item">
                                        <a href="#" className="footer-pay-link">
                                            <img src={images11} alt="ảnh lỗi" className="footer-pay-img"/>
                                        </a>
                                    </li>
                                    <li className="footer-pay-item">
                                        <a href="#" className="footer-pay-link">
                                            <img src={images12} alt="ảnh lỗi" className="footer-pay-img"/>
                                        </a>
                                    </li>
                                </ul>
                                <h3 className="footer-heading">ĐƠN VỊ VẬN CHUYỂN</h3>
                                <ul className="footer-pay">
                                    <li className="footer-pay-item">
                                        <a href="#" className="footer-pay-link">
                                            <img src={images13} alt="ảnh lỗi" className="footer-pay-img"/>
                                        </a>
                                    </li>
                                    <li className="footer-pay-item">
                                        <a href="#" className="footer-pay-link">
                                            <img src={images14} alt="ảnh lỗi" className="footer-pay-img"/>
                                        </a>
                                    </li>
                                    <li className="footer-pay-item">
                                        <a href="#" className="footer-pay-link">
                                            <img src={images15} alt="ảnh lỗi" className="footer-pay-img"/>
                                        </a>
                                    </li>
                                    <li className="footer-pay-item">
                                        <a href="#" className="footer-pay-link">
                                            <img src={images16} alt="ảnh lỗi" className="footer-pay-img"/>
                                        </a>
                                    </li>
                                    <li className="footer-pay-item">
                                        <a href="#" className="footer-pay-link">
                                            <img src={images17} alt="ảnh lỗi" className="footer-pay-img"/>
                                        </a>
                                    </li>
                                    <li className="footer-pay-item">
                                        <a href="#" className="footer-pay-link">
                                            <img src={images18} alt="ảnh lỗi" className="footer-pay-img"/>
                                        </a>
                                    </li>
                                    <li className="footer-pay-item">
                                        <a href="#" className="footer-pay-link">
                                            <img src={images19} alt="ảnh lỗi" className="footer-pay-img"/>
                                        </a>
                                    </li>
                                    <li className="footer-pay-item">
                                        <a href="#" className="footer-pay-link">
                                            <img src={images20} alt="ảnh lỗi" className="footer-pay-img"/>
                                        </a>
                                    </li>
                                    <li className="footer-pay-item">
                                        <a href="#" className="footer-pay-link">
                                            <img src={images21} alt="ảnh lỗi" className="footer-pay-img"/>
                                        </a>
                                    </li>
                                    <li className="footer-pay-item">
                                        <a href="#" className="footer-pay-link">
                                            <img src={images22} alt="ảnh lỗi" className="footer-pay-img"/>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="l-2-4 m-4 c-6">
                            <div className="">
                                <h3 className="footer-heading">theo dõi chúng tôi trên</h3>
                                <ul className="footer-list">
                                    <li className="footer-list-item">
                                        <a href="#" className="footer-list-link">
                                            <BsFacebook className="footer-list-icon"/>Facebook
                                        </a>
                                    </li>
                                    <li className="footer-list-item">
                                        <a href="#" className="footer-list-link">
                                            <AiFillInstagram className="footer-list-icon"/>Instagram
                                        </a>
                                    </li>
                                    <li className="footer-list-item">
                                        <a href="#" className="footer-list-link">
                                            <IoLogoLinkedin className="footer-list-icon"/>Linkedin
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="l-2-4 m-4 c-6">
                            <div className="">
                                <h3 className="footer-heading">vào cửa hàng trên ứng dụng tickid</h3>
                                <div className="footer-download">
                                    <img src={images01} alt="ảnh lỗi" className="footer-download-qr"/>
                                    <div className="footer-download-app">
                                        <a className="footer-download-app-link" href="#">
                                            <img src={images03} alt="ảnh lỗi" className="footer-download-img"/>
                                        </a>
                                        <a className="footer-download-app-link" href="#">
                                            <img src={images02} alt="ảnh lỗi" className="footer-download-img"/>
                                        </a>
                                        <a className="footer-download-app-link" href="#">
                                            <img src={images04} alt="ảnh lỗi" className="footer-download-img"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </FooterWrapper>
        </>
    )
}
export default Footer;