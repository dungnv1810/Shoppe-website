import styled from "styled-components";
export const ShoppeeMallWrapper = styled.div`
    background: #f5f5f5;
    padding: 10px 0px 10px 0px;
    @media only screen and (max-width: 739px){
        display: none;
    }
    .ShoppeeMall_heading{
        width: 100%;
        height: 60px;
        background: #fff;
        padding: 0px 5px;
        margin-bottom: 10px;
        border-bottom: 1px solid rgba(0,0,0,.05);
        display: flex;
        align-items: center;
        justify-content: space-between;
        .ShoppeeMall_heading-item{
            display: flex;
            align-items: center;
            .ShoppeeMall_heading-link-left{
                position: relative;
                font-size: 2rem;
                font-weight: 400;
                color: #d0011b;
                background: transparent;
                text-decoration: none;
                @media only screen and (min-width: 740px) and (max-width: 1023px){
                    font-size: 1.6rem;
                }
                &::before{
                    position: absolute;
                    content: "";
                    top: 50%;
                    transform: translateY(-50%);
                    right: -15px;
                    width: 1px;
                    height: 20px;
                    background: #d8d8d8;
                    @media only screen and (min-width: 740px) and (max-width: 1023px){
                        right: 0px;
                        height: 25px;
                    }
                }
            }
            .ShoppeeMall_list{
                display: flex;
                list-style-type: none;
                margin-left: 30px;
                .ShoppeeMall_list-item{
                    margin: 0px 15px;
                    .ShoppeeMall_list-link{
                        text-decoration: none;
                        display: flex;
                        align-items: center;
                        font-size: 1.6rem;
                        color: #333;
                        @media only screen and (min-width: 740px) and (max-width: 1023px){
                            font-size: 1.2rem;
                        }
                        .ShoppeeMall_list-img{
                            width: 23px;
                            height: 23px;
                            margin-right: 5px;
                            @media only screen and (min-width: 740px) and (max-width: 1023px){
                                width: 20px;
                                height: 20px;
                                margin-right: 3px;
                            }
                        }
                    }
                    &:first-child{
                        margin-left: 0px;
                    }
                    &:last-child{
                        margin-right: 0px;
                    }
                }
            }
        }
        .ShoppeeMall_btn-right{
            color: #d0011b;
            background: transparent;
            border: none;
            font-size: 1.7rem;
            display: flex;
            cursor: pointer;
            @media only screen and (min-width: 740px) and (max-width: 1023px){
                font-size: 1.3rem;
                display: flex;
                align-items: center;
            }
            .ShoppeeMall_btn-icon{
                vertical-align: middle;
                width: 18px;
                height: 18px;
                border-radius: 50%;
                background: #d0011b;
                margin-left: 5px;
                display: flex;
                align-items: center;
                justify-content: center;
                @media only screen and (min-width: 740px) and (max-width: 1023px){
                    width: 15px;
                    height: 15px;
                }
                .ShoppeeMall_btn-icon-right{
                    color: #fff;
                    font-size: 1.8rem;
                    @media only screen and (min-width: 740px) and (max-width: 1023px){
                        font-size: 1.5rem;
                    }
                }
            }
        }
    }
    .carousel_wrapper{
        background: #fff;
        position: relative;
        width: 100%;
        height: 465px;
        @media only screen and (min-width: 740px) and (max-width: 1023px){
            height: 250px;
        }
        &:hover .carousel_arrow_left{
            display: block;
            box-shadow: rgb(0 0 0 / 9%) 0px 1px 12px 0px;
            background-color: rgba(0, 0, 0, 0.32);
        }
        &:hover .carousel_arrow_right{
            display: block;
            box-shadow: rgb(0 0 0 / 9%) 0px 1px 12px 0px;
            background-color: rgba(0, 0, 0, 0.32);
        }
        .carousel_arrow_left,
        .carousel_arrow_right{
            display: none;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 40px;
            height: 40px;
            border-radius: 50%;
            border: 2px solid #fff;
            transform: scale(1);
            transition: all 0.3s linear;
            text-align: center;
            @media only screen and (min-width: 740px) and (max-width: 1023px){
                top: 50%;
                transform: translateY(-50%);
                width: 30px;
                height: 30px;
                transform: scale(1);
            }
            cursor: pointer;
            .carousel_arrow_icon{
                position: relative;
                top: 50%;
                transform: translateY(-50%);
                color: #fff;
                font-size: 2rem;
                @media only screen and (min-width: 740px) and (max-width: 1023px){
                    font-size: 1.6rem;
                }
            }
            &:hover{
                transform: scale(1.2);
                transition: all 0.5s linear;
            }
        }
        .carousel_arrow_left{
            left: 15px;
            @media only screen and (min-width: 740px) and (max-width: 1023px){
                left: 10px;
            }
        }
        .carousel_arrow_right{
            right: 15px;
            @media only screen and (min-width: 740px) and (max-width: 1023px){
                right: 10px;
            }
        }

        .carousel_card{
            position: absolute;
            width: 100%;
            height: 100%;
            display: flex;
            flex: 1;
            overflow: hidden;
            opacity: 0;
            /* pointer-events: visible; */
            /* transform: scale(0.8); */
            /* transition: all 0.5s linear; */
            .card_images{
                width: 100%;
            }
        }
        .carousel_card-active{
            opacity: 1;
            pointer-events: visible;
            transform: scale(1);
        }
        .caroseo_pagination{
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            bottom: 15px;
            @media only screen and (min-width: 740px) and (max-width: 1023px){
                bottom: 10px;
            }
            .pagination_dot{
                width: 10px;
                height: 10px;
                border-radius: 50%;
                border: 1px solid rgba(0,0,0,.2);
                background: rgba(255,255,255,.6);
                transition: all 0.3s linear;
                transform: scale(1);
                display: inline-block;
                margin: 0px 5px;
                @media only screen and (min-width: 740px) and (max-width: 1023px){
                    margin: 0px 2px;
                    width: 8px;
                    height: 8px;
                }
                &:hover{
                    transform: scale(1.2);
                }
            }
            .pagination_dot-active{
                background: #EE4D2D;
            }
        }
    }
    .container_carousel{
        width: 100%;
        height: 100%;
        position: relative;
        .carousel_arrow_btn-left,
        .carousel_arrow_btn-right{
            position: absolute;
            top: 50%;
            transform: translateY(50%);
            width: 35px;
            height: 50px;
            border: 2px solid #fff;
            background: rgba(0,0,0,.2);
            transform: scale(1);
            transition: all 0.3s linear;
            display: flex;
            align-items: center;
            justify-content: center;
            @media only screen and (min-width: 740px) and (max-width: 1023px){
                width: 30px;
                height: 40px;
                top: 50%;
                transform: translateY(50%);
                transform: scale(1);
            }
            &:hover{
                transform: scale(1.2);
            }
            .carousel_arrow_icon{
                font-size:2rem;
                color: #fff;
            }
        }
        .carousel_arrow_btn-left{
            left: 8px;
        }
        .carousel_arrow_btn-right{
            right: 8px;
        }
        .carousel_wrapper{
            width: 100%;
            display: flex;
            overflow: hidden;
            scroll-behavior: smooth;
            .grid_column{
                flex: none;
                .carousel_list{
                    padding: 0px;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    .carousel_list-item{
                        list-style-type: none;
                        width: 100%;
                        text-align: center;
                        .carousel_list-item-link{
                            text-decoration: none;
                            width: 100%;
                            margin-bottom: 0px;
                            display: block;
                            .carousel_list-item-link-img{
                                width: 87%;
                                @media only screen and (min-width: 740px) and (max-width: 1023px){
                                    width: 66%;
                                }
                            }
                        }
                        .carousel_list-item-title{
                            bottom: 10px;
                            color: #d0011b;
                            font-weight: 400;
                            font-size: 1.8rem;
                            display:-webkit-box;
                            -webkit-line-clamp:2;
                            -webkit-box-orient: vertical;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            word-break: break-word;
                            @media only screen and (min-width: 740px) and (max-width: 1023px){
                                font-size: 1.5rem;
                                display:-webkit-box;
                                -webkit-line-clamp:1;
                                -webkit-box-orient: vertical;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                word-break: break-word;
                            }
                        }
                    }
                }
            }
        }
    }
`;