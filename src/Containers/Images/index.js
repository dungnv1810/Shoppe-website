import React from "react";
import images from "../../Assets/8ce81c5db32cc62e2a78cf6dbe7e8b11.png"
import { ImagesWrapper } from "./style";
const Images = () => {
    return(
        <>
            <ImagesWrapper>
                <div className="grid wide">
                    <div className="row">
                        <div className="l-12">
                            <div className="container">
                                <img src={images} alt="ảnh lỗi" className="images"/>
                            </div>
                        </div>
                    </div>
                </div>
            </ImagesWrapper>
        </>
    )
}
export default Images