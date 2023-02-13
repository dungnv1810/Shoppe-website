import styled from "styled-components";
import images from "../../Assets/top.png"
export const TopsearchWrapper = styled.div`
    background: #f5f5f5;
    padding: 10px 0px 10px 0px;
    @media only screen and (max-width: 739px){
        display: none;
    }
    .topsearch_heading{
        background: #fff;
        width: 100%;
        height: 60px;
        padding: 0px 5px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid rgba(0,0,0,.05);
        .topsearch_heading-left{
            font-size: 2rem;
            font-weight: 400;
            color: #ee4d2d;
            @media only screen and (min-width: 740px) and (max-width: 1023px){
                font-size: 1.6rem;
            }
        }
        .topsearch_btn-heading{
            background: transparent;
            border: none;
            color: #ee4d2d;
            font-size: 1.7rem;
            display: flex;
            align-items: center;
            @media only screen and (min-width: 740px) and (max-width: 1023px){
                font-size: 1.4rem;
            }
            .topsearch_btn-heading-icon{
                font-size: 2rem;
                @media only screen and (min-width: 740px) and (max-width: 1023px){
                    font-size: 1.5rem;
                }
            }
        }
    }
    .container{
        width: 100%;
        position: relative;
        .carousel_arrow_left,
        .carousel_arrow_right{
            position: absolute;
            top: 38%;
            width: 30px;
            height: 30px;
            background: #fff;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            box-shadow: 0 1px 12px 0 rgb(0 0 0 / 12%);
            transform: scale(1);
            transition: all 0.3s linear;
            &:hover{
                transform: scale(1.2);
            }
            .carousel_arrow_icon{
                font-size: 1.8rem;
                color: #333;
            }
        }
        .carousel_arrow_left{
            left: -14px;
        }
        .carousel_arrow_right{
            right: -14px;
        }
        .carousel_wrapper{
            width: 100%;
            display: flex;
            overflow: hidden;
            scroll-behavior: smooth;
            .carousel_item-link{
                position: relative;
                padding: 0px 5px;
                flex: none;
                text-decoration: none;
                background-color: #fff;
                .carousel_item-top{
                    position: relative;
                    width: 100%;
                    .carousel_item-img{
                        width: 100%;
                        object-fit: cover;
                    }
                    .carousel_item-price{
                        position: absolute;
                        width: 100%;
                        z-index: 2;
                        left: 0;
                        bottom: 0;
                        height: 26px;
                        font-size: 1.5rem;
                        background-color: rgba(0,0,0,.26);
                        color: #fff;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        @media only screen and (min-width: 740px) and (max-width: 1023px){
                            font-size: 1.4rem;
                        }
                    }
                }
                .carousel_item-body{
                    width: 100%;
                    padding: 20px 0px 20px 0px;
                    text-align: center;
                    font-size: 2rem;
                    color: #555;
                    font-weight: 500;
                    line-height: 1.9rem;
                    @media only screen and (min-width: 740px) and (max-width: 1023px){
                        font-size: 1.6rem;
                        line-height: 1.7rem;
                    }
                }
                .carousel_item-tops{
                    position: absolute;
                    top: 20px;
                    left: 5px;
                    width: 35px;
                    height: 40px;
                    background-image: url(${images});
                    background-position: center center;
                    background-size: cover;
                    background-repeat: no-repeat;
                    @media only screen and (min-width: 740px) and (max-width: 1023px){
                        width: 25px;
                        height: 30px;
                    }
                }
            }
        }
    }
`;