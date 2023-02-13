import styled from "styled-components";
export const FlashsaleWrapper = styled.div`
    background: #f5f5f5;
    padding: 10px 0px 10px 0px;
    @media only screen and (max-width: 739px){
        display: none;
    }
    .flashsale_heading{
        margin-left: 5px;
        margin-right: 5px;
        background: #fff;
        width: 100%;
        padding: 20px 5px 20px 5px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        @media only screen and (min-width: 740px) and (max-width: 1023px){
            padding: 15px 5px 15px 5px;
        }
        .flashsale_images-item{
            .flashsale_images{
                height: 25px;
                @media only screen and (min-width: 740px) and (max-width: 1023px){
                    height: 23px;
                }
            }
        }
        .flashsale_btn{
            background: transparent;
            border: none;
            outline: none;
            cursor: pointer;
            font-size: 1.6rem;
            color: var(--primary-color);
            display: flex;
            align-items: center;
            @media only screen and (min-width: 740px) and (max-width: 1023px){
                font-size: 1.4rem;
            }
            .flashsale_icon{
                font-size: 1.7rem;
                margin-left: 3px;

            }
        }
    }
    .container{
        width: 100%;
        position: relative;
        padding: 0px 5px;
        .carousel_arrow_left,
        .carousel_arrow_right{
            position: absolute;
            top: 40%;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(0, 0, 0, 0.5);
            border: 2px solid #fff;
            transform: scale(1);
            transition: all 0.3s linear;
            .carousel_arrow_icon{
                font-size: 2rem;
                color: #fff;
            }
            &:hover{
                transform: scale(1.2);
            }
        }
        .carousel_arrow_left{
            left: -15px;
        }
        .carousel_arrow_right{
            right: -15px;
        }
        .carousel{
            display: flex;
            width: 100%;
            overflow: hidden;
            scroll-behavior: smooth;
            .carousel_item-link{
                padding-bottom: 10px;
                position: relative;
                flex: none;
                display: block;
                text-decoration: none;
                background: #fff;
                .carousel_item-top{
                    position: relative;
                    .carousel_item-img{
                        width: 100%;
                    }
                    .carousel_item-img-sale{
                        position: absolute;
                        width: 100%;
                        left: 0;
                        bottom: 0;
                    }
                }
                .carousel_item-body{
                    font-size: 2rem;
                    font-weight: 500;
                    text-align: center;
                    padding: 20px 0px 15px 0px;
                    color: var(--primary-color);
                    @media only screen and (min-width: 740px) and (max-width: 1023px){
                        font-size: 1.9rem;
                        padding: 15px 0px 10px 0px;
                    }
                    span{
                        font-size: 1.1rem;
                        margin-right: 0.25rem;
                        text-decoration: underline;
                        vertical-align: top;
                    }
                }
                .carousel_item-bottom{
                    padding: 0px 10px;
                    .carousel_item-rZzxlM{
                        width: 100%;
                        height: 16px;
                        position: relative;
                        .flashsale_product-eNmE7oRJ6Vpu{
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            position: absolute;
                            left: 0;
                            top: 0;
                            height: inherit;
                            width: inherit;
                            color: #fff;
                            font-size: 1.3rem;
                            font-weight: 500;
                            text-transform: uppercase;
                            z-index: 3;
                            text-shadow: 0 0 8px rgb(0 0 0 / 12%);
                        }
                        .flashsale_product-d3m1Az{
                            position: absolute;
                            height: 16px;
                            width: 10%;
                            border-radius: 8px 0px 0px 8px;
                            position: absolute;
                            left: 0;
                            top: 0;
                            background: url(https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/ac7f81d9ee062223753413ec98497a86.png) 0 100% no-repeat;
                            background-size: cover;
                            z-index: 2;
                        }
                        .flashsale_product-sqDxib{
                            border-radius: 8px;
                            width: inherit;
                            background: #ffbda6;
                            z-index: 1;
                            position: absolute;
                            left: 0;
                            top: 0;
                            height: inherit;
                        }
                    }
                }
                .home-product-item-sale-off{
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 40px;
                    height: 36px;
                    background-color: rgba(255, 216, 64, 0.9);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    .home-product-item-sale-off-persent{
                        line-height: 1.5rem;
                        font-size: 1.2rem;
                        color: #ee4d2d;
                        font-weight: 700;
                    }
                    .home-product-item-sale-off-label{
                        line-height: 1.5rem;
                        font-size: 1.3rem;
                        color: var(--white-color);
                        font-weight: 700;
                    }
                    &::before{
                        content: "";
                        position: absolute;
                        top: 100%;
                        right: 0px;
                        border-width: 0px 20px 10px;
                        border-style: solid;
                        border-color: red rgba(255, 216, 64, 0.9) transparent rgba(255, 216, 64, 0.9);
                    }
                }
                .home-product-item-favourite{
                    position: absolute;
                    top: 10px;
                    left: 4px;
                    font-size: 1.2rem;
                    font-weight: 400;
                    display: flex;
                    align-items: center;
                    padding-right: 4px;
                    line-height: 1.7rem;
                    border-top-right-radius: 3px;
                    border-bottom-right-radius: 3px;
                    color: var(--primary-color);
                    background-color: currentColor;
                    .home-product-item-favourite-icon{
                        font-size: 1.6rem;
                        margin-bottom: -1px;
                        color: var(--white-color);
                    }
                    span{
                        color: var(--white-color);
                    }
                    &::before{
                        position: absolute;
                        content: "";
                        top: 17px;
                        left: 0px;
                        filter: brightness(60%);
                        border-top: 3px solid currentColor;
                        border-left: 3px solid transparent;
                    }
                }
            }
        }
    }
    /* .flashsale_product-link{
        display: block;
        text-decoration: none;
        background: #fff;
        width: 100%;
        height: 100%;
        padding-bottom: 1;
        padding-bottom: 15px;
        position: relative;
        .flashsale_product-images{
            width: 100%;
            position: relative;
            .flashsale-product-item-olui{
                width: 100%;
            }
            .flashsale-product-item-sale{
                position: absolute;
                left: 0;
                bottom: 0;
                width: 100%;
            }
        }
        .flashsale_product-body{
            font-size: 2rem;
            font-weight: 500;
            text-align: center;
            padding: 20px 0px 10px 0px;
            color: var(--primary-color);
            span{
                font-size: 1.1rem;
                margin-right: 0.25rem;
                text-decoration: underline;
                vertical-align: top;
            }
        }
        .flashsale_product-bottom{
            padding: 0px 10px;
            .flashsale_product-rZzxlM{
                width: 100%;
                height: 16px;
                position: relative;
                .flashsale_product-eNmE7oRJ6Vpu{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: absolute;
                    left: 0;
                    top: 0;
                    height: inherit;
                    width: inherit;
                    color: #fff;
                    font-size: 1.3rem;
                    font-weight: 500;
                    text-transform: uppercase;
                    z-index: 3;
                    text-shadow: 0 0 8px rgb(0 0 0 / 12%);
                }
                .flashsale_product-d3m1Az{
                    position: absolute;
                    height: 16px;
                    width: 10%;
                    border-radius: 8px 0px 0px 8px;
                    position: absolute;
                    left: 0;
                    top: 0;
                    background: url(https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/ac7f81d9ee062223753413ec98497a86.png) 0 100% no-repeat;
                    background-size: cover;
                    z-index: 2;
                }
                .flashsale_product-sqDxib{
                    border-radius: 8px;
                    width: inherit;
                    background: #ffbda6;
                    z-index: 1;
                    position: absolute;
                    left: 0;
                    top: 0;
                    height: inherit;
                }
            }
        }
        .home-product-item-sale-off{
            position: absolute;
            top: 0;
            right: 0;
            width: 40px;
            height: 36px;
            background-color: rgba(255, 216, 64, 0.9);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            border-top-right-radius: 2px;
            .home-product-item-sale-off-persent{
                line-height: 1.5rem;
                font-size: 1.2rem;
                color: #ee4d2d;
                font-weight: 700;
            }
            .home-product-item-sale-off-label{
                line-height: 1.5rem;
                font-size: 1.3rem;
                color: var(--white-color);
                font-weight: 700;
            }
            &::before{
                content: "";
                position: absolute;
                top: 100%;
                right: 0px;
                border-width: 0px 20px 10px;
                border-style: solid;
                border-color: red rgba(255, 216, 64, 0.9) transparent rgba(255, 216, 64, 0.9);
            }
        }
    } */

`;