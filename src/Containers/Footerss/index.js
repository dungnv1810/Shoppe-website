import React from "react";
import logo1 from "../../Assets/logodkbct1.png"
import logo2 from "../../Assets/logodkbct2.png"
import { FooterssWrapper } from "./style";
const Footerss = () => {
    return(
        <>
            <FooterssWrapper>
                <div className="grid wide">
                    <div className="row app_content">
                        <div className="l-12">
                            <div className="container_footer-top">
                                <ul className="footer_list">
                                    <li className="footer_item">
                                        <a href="#" className="footer_link">
                                            chính sách bảo mật
                                        </a>
                                    </li>
                                    <li className="footer_item">
                                        <a href="#" className="footer_link">
                                            quy chế hoạt động
                                        </a>
                                    </li>
                                    <li className="footer_item">
                                        <a href="#" className="footer_link">
                                            chính sách vận chuyển
                                        </a>
                                    </li>
                                    <li className="footer_item">
                                        <a href="#" className="footer_link">
                                            chính sách trả hàng và hoàn tiện
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="container_footer-logo">
                                <ul className="l-12 m-12 c-12 container_footer-logo-list">
                                    <li className="l-2 m-4 c-4 container_footer-logo-item">
                                        <a href="#" className="container_footer-logo-link">
                                            <img src={logo1} alt="ảnh lỗi" className="container_footer-logo-img"/>
                                        </a>
                                    </li>
                                    <li className="l-2 m-4 c-4 container_footer-logo-item">
                                        <a href="#" className="container_footer-logo-link">
                                            <img src={logo1} alt="ảnh lỗi" className="container_footer-logo-img"/>
                                        </a>
                                    </li>
                                    <li className="l-2 m-4 c-4 container_footer-logo-item">
                                        <a href="#" className="container_footer-logo-link">
                                            <img src={logo2} alt="ảnh lỗi" className="container_footer-logo-img"/>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="BV2E6Y ggg4D">Công ty TNHH Shopee</div>
                            <div className="BV2E6Y">Địa chỉ: Tầng 4-5-6, Tòa nhà Capital Place, số 29 đường Liễu Giai, Phường Ngọc Khánh, Quận Ba Đình, Thành phố Hà Nội, Việt Nam. Tổng đài hỗ trợ: 19001221 - Email: cskh@hotro.shopee.vn</div>
                            <div className="BV2E6Y">Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch & Đầu tư TP Hà Nội cấp lần đầu ngày 10/02/2015</div>
                            <div className="BV2E6Y">Chịu Trách Nhiệm Quản Lý Nội Dung: Nguyễn Đức Trí -  Điện thoại liên hệ: 024 73081221 ext 4678</div>
                            <div className="BV2E6Y">© 2015 - Bản quyền thuộc về Công ty TNHH Shopee</div>
                        </div>
                    </div>
                </div>
            </FooterssWrapper>
        </>
    )
}
export default Footerss;