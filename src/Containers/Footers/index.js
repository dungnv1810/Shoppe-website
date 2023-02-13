import React from "react";
import { FootersWrapper } from "./style";
const Footers = () => {
    return(
        <>
            <FootersWrapper>
                <div className="grid wide grid-bt">
                    <div className="row app_content">
                        <div className="l-3">
                            <div className="license">© 2022 Shopee. Tất cả các quyền được bảo lưu.</div>
                        </div>
                        <div className="l-9">
                            <ul className="nation_list">
                                <li className="nation_list-item">
                                        Quốc gia và khu vực: 
                                </li>
                                <li className="nation_list-item">
                                    <a href="#" className="nation_list-link">
                                        Singapore
                                    </a>
                                </li>
                                <li className="nation_list-item">
                                    <a href="#" className="nation_list-link">
                                        Indonesia 
                                    </a>
                                </li>
                                <li className="nation_list-item">
                                    <a href="#" className="nation_list-link">
                                        Đài Loan
                                    </a>
                                </li>
                                <li className="nation_list-item">
                                    <a href="#" className="nation_list-link">
                                        Malaysia 
                                    </a>
                                </li>
                                <li className="nation_list-item">
                                    <a href="#" className="nation_list-link">
                                        Việt Nam 
                                    </a>
                                </li>
                                <li className="nation_list-item">
                                    <a href="#" className="nation_list-link">
                                        Philippines 
                                    </a>
                                </li>
                                <li className="nation_list-item">
                                    <a href="#" className="nation_list-link">
                                        Brazil 
                                    </a>
                                </li>
                                <li className="nation_list-item">
                                    <a href="#" className="nation_list-link">
                                        México
                                    </a>
                                </li>
                                <li className="nation_list-item">
                                    <a href="#" className="nation_list-link">
                                        Colombia 
                                    </a>
                                </li>
                                <li className="nation_list-item">
                                    <a href="#" className="nation_list-link">
                                        Chile
                                    </a>
                                </li>
                                <li className="nation_list-item">
                                    <a href="#" className="nation_list-link">
                                        Poland 
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </FootersWrapper>
        </>
    )
}
export default Footers