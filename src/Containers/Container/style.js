import styled from "styled-components";
export const ContainerWrapper = styled.div`
    width: 100%;
    overflow: hidden;
    background: #f5f5f5;
    padding: 10px 0px 36px 0px;
    @media only screen and (min-width: 740px) and (max-width: 1023px){
        padding: 10px 0px 25px 0px;
    }
    .category{
            @media only screen and (max-width: 739px){
                display: none;
            }
            @media only screen and (min-width: 740px) and (max-width: 1023px){
                display: none;
            }
            border-radius: 2px;
            background-color: #fff;
            .category_heading{
                font-weight: 600;
                font-size: 1.5rem;
                padding: 10px 13px;
                color: var(--text-color);
                border-bottom: 1px solid rgba(0, 0, 0, 0.05);
                .category_heading-icon{
                    position: relative;
                    top: 3px;
                    font-size: 1.7rem;
                    margin-right: 3px;
                }
            }
            .category_list{
                list-style-type: none;
                text-transform: uppercase;
                .category_item{
                    position: relative;
                    .category_item-link{
                        position: relative;
                        font-weight: 600;
                        display: block;
                        padding: 10px 25px;
                        font-size: 1.4rem;
                        color: var(--text-color);
                        text-decoration: none;
                        right: 0;
                        transition: right 0.2s linear;
                        &:hover{
                            right: -4px;
                            color: var(--primary-color);
                        }
                    }
                    &:last-child::before{
                        display: none;
                    }
                }
                .category_item::before{
                    position: absolute;
                    content: "";
                    top: 100%;
                    left: 16px;
                    right: 16px;
                    border-bottom: 1px solid #e1e1e1;
                    
                }

                .category_item-active{
                    .category_item-link{
                        color: var(--primary-color);
                    }
                }
                .category_item-active{
                    .category_item-link::before{
                        position: absolute;
                        content: "";
                        top: 50%;
                        left: 16px;
                        transform: translateY(-50%);
                        border-style: solid;
                        border-width: 4px 4px;
                        border-color: transparent transparent transparent red;
                    }
                }
            }
        }
        /* Home Filter Sắp Xếp Theo Giá */
        .home-filter{
            padding: 12px 22px;
            border-radius: 2px;
            display: flex;
            align-items: center;
            background: rgba(0, 0, 0, 0.04);
            @media only screen and (max-width: 1039px){
                display: none;
            }
            .home-filter_label{
                color: #555;
                font-size: 1.4rem;
                margin-right: 16px;
            }
            .home-filter-btn{
                margin-right: 12px;
            }
            .btn{
                min-width: 90px;
                height: 34px;
                text-decoration: none;
                border: none;
                border-radius: 2px;
                font-size: 1.5rem;
                padding: 0px 12px;
                outline: none;
                cursor: pointer;
                color: var(--text-color);
                display: flex;
                align-items: center;
                justify-content: center;
                line-height: 1.6rem;
                background-color: #fff;
            }
            .btn-primary{
                color: #ffffff;
                background-color: var(--primary-color);
            }
            .select-input:hover .select-input-list{
                display: block;
            }
            .select-input{
                position: relative;
                min-width: 160px;
                height: 34px;
                padding: 0px 12px;
                border-radius: 2px;
                background-color: #fff;
                display: flex;
                align-items: center;
                justify-content: space-between;
                .select-input-label{
                    font-size: 1.5rem;
                }
                .select-input-icon{
                    font-size: 1.5rem;
                    color: rgb(131, 131, 131);
                    position: relative;
                    top: 0px;
                    right: -4px;
                }
                .select-input-list{
                    display: none;
                    position: absolute;
                    z-index: 1000;
                    width: 100%;
                    top: 105%;
                    right: 0;
                    padding: 5px 0px;
                    list-style-type: none;
                    background-color: #fff;
                    .select-input-item{
                        .select-input-link{
                            color: var(--text-color);
                            display: block;
                            padding: 8px 12px;
                            font-size: 1.2rem;
                            text-decoration: none;
                            &:hover{
                                background-color: #fafafa;
                                color: var(--primary-color);
                            }
                        }
                    }
                }
                .select-input-list::before{
                    position: absolute;
                    content: "";
                    top: -5px;
                    right: 0px;
                    width: 100%;
                    height: 10px;
                }
            }
            .home-filter-page{
                margin-left: auto;
                display: flex;
                align-items: center;
                .home-filter-page-number{
                    font-size: 1.4rem;
                    color: var(--text-color);
                    margin-right: 22px;
                    .home-filter-page-current{
                        color: var(--primary-color);
                    }
                }
                .home-filter-page-control{
                    display: flex;
                    width: 73px;
                    height: 36px;
                    .home-filter-page-btn{
                        flex: 1;
                        font-size: 1.6rem;
                        background-color: #fff;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        &:first-child{
                            margin-right: 1px;
                        }
                        .home-filter-page-icon{
                            color: #555;
                            font-size: 1.4rem;
                        }
                    }
                    .home-filter-page-btn-disabled .home-filter-page-icon{
                        color:#ccc
                    } 
                    .home-filter-page-btn-disabled{
                        background-color: #f9f9f9;
                        cursor: default;
                    }
                }
            }
        }
        /* Mobile-category */
        .mobile-category{
            margin-top: 110px;
            display: none;
            @media only screen and (max-width: 739px){
                display: block;
            }
            .app_content{
                margin: 0px 10px;
                .mobile-category-list{
                    max-width: 100%;
                    overflow-x: auto;
                    display: flex;
                    list-style: none;
                    padding: 0;
                    &::-webkit-scrollbar{
                        display: none;
                    }
                    .mobile-category-item{
                        flex-shrink: 0;
                        border-radius: 4px;
                        margin: 0px 2px;
                        width: 108px;
                        height: 45px;
                        padding: 0px 5px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        &:nth-of-type(3n + 1){
                            background: #87afd8;
                        }
                        &:nth-of-type(3n + 2){
                            background: #76c9bd;
                        }
                        &:nth-of-type(3n + 3){
                            background: #88cf81;
                        }
                        .mobile-category-link{
                            text-transform: capitalize;
                            text-decoration: none;
                            font-size: 1.5rem;
                            color: #fff;
                            display: block;
                            font-weight: 300;
                            line-height: 1.8rem;
                            text-align: center;
                            display:-webkit-box;
                            -webkit-line-clamp:2;
                            -webkit-box-orient: vertical;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            word-break: break-word;
                            user-select: none;
                            -webkit-user-select: none;
                            -webkit-tap-highlight-color: transparent;
                        }
                    }
                }
            }
        }
        /* Home Products Sản phẩm */
        .home-product{
            width: 100%;
            @media only screen and (max-width: 739px){
                margin-top: 14px;
            }
            @media only screen and (min-width: 740px) and (max-width: 1023px){
                margin-bottom: 20px;
            }
            .app_conten{
                margin: 0px 5px;
                .home-product-item{
                    margin-top: 10px;
                    background-color: #fff;
                    border-radius: 2px;
                    text-decoration: none;
                    display: block;
                    position: relative;
                    transition: transform linear .1s;
                    will-change: transform;
                    box-shadow: 0 0.0625rem 0.125rem 0 rgba(0, 0, 0, 0.1);
                    @media only screen and (max-width: 1039px){
                        margin-top: 0px;
                        margin-bottom: 10px;
                    }
                    &:hover{
                        transform: translateY(-1px);
                        box-shadow: 0 0.0625rem 20px 0 rgba(0, 0, 0, 0.05);
                    }
                    .home-product-item-img{
                        width: 100%;
                        position: relative;
                        padding-top: 100%;
                        margin: 0;
                        border-top-left-radius: 2px;
                        border-top-right-radius: 2px;
                        .home-product-item-olui{
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 100%;
                        }
                    }
                    .home-product-body{
                        padding: 10px;
                        .home-product-item-name{
                            font-size: 1.2rem;
                            font-weight: 400;
                            color: var(--text-color);
                            line-height: 1.6rem;
                            display:-webkit-box;
                            -webkit-line-clamp:2;
                            -webkit-box-orient: vertical;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            word-break: break-word;
                        }
                        .home-product-item-price{
                            margin-top: 5px;
                            display: flex;
                            flex-wrap: wrap;
                            align-items: center;
                            justify-content: space-between;
                            .home-product-item-price-old{
                                font-size: 1.4rem;
                                color: #666;
                                text-decoration: line-through;
                            }
                            .home-product-item-price-current{
                                font-size: 1.6rem;
                                color: var(--primary-color);
                            }
                        }
                        .home-product-item-action{
                            margin-top: 5px;
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                            .home-product-item-like{
                                font-size: 1.4rem;
                                .home-product-item-like-icon-empty{
        
                                }
                                .home-product-item-like-icon-fill{
                                    color: #f63d30;
                                    display: none;
                                }
                            }
                            .home-product-item-like-kiked .home-product-item-like-icon-fill{
                                display: inline-block;
                            }
                            .home-product-item-like-kiked .home-product-item-like-icon-empty{
                                display: none;
                            }
                            .home-product-item-rating{
                                margin-bottom: -3px;
                                margin-left: auto;
                                font-size: 1.3rem;
                                transform: scale(0.8);
                                transform-origin: right;
                                .home-product-item-rating-icon{
                                    color: var(--star-gold-color);
                                    &:first-child{
                                        color: #d5d5d5;
                                    }
                                }
                            }
                            .home-product-item-sold{
                                margin-left: 5px;
                                font-size: 1.2rem;
                                color: var(--text-color);
                                word-break: break-all;
                            }
                        }
                        .home-product-item-origin{
                            margin-top: 5px;
                            font-weight: 300;
                            font-size: 1.2rem;
                            color: #565656;
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                            .home-product-item-brand{
                                
                            }
                            .home-product-origin-name{
                                
                            }
                        }
                    }

                    .home-product-item-favourite{
                        position: absolute;
                        top: 10px;
                        left: -4px;
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
                    }
                    .home-product-item-favourite::after{
                        position: absolute;
                        content: "";
                        top: 17px;
                        left: 0px;
                        filter: brightness(60%);
                        border-top: 3px solid currentColor;
                        border-left: 3px solid transparent;
                    }
                    .home-product-item-sale-off{
                        position: absolute;
                        top: 0px;
                        right: 0px;
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
                    }
                    .home-product-item-sale-off::after{
                        content: "";
                        position: absolute;
                        top: 100%;
                        right: 0px;
                        border-width: 0px 20px 10px;
                        border-style: solid;
                        border-color: red rgba(255, 216, 64, 0.9) transparent rgba(255, 216, 64, 0.9);
                    }
                }
            }
        }
        
        /* Pagination Trang */
        .pagination{
            list-style-type: none;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 20px;
            @media only screen and (max-width: 739px){
                display: none;
            }
            .pagination-item{
                margin: 0px 16px;
                padding: 0;
                @media only screen and (min-width: 740px) and (max-width: 1023px){
                    margin: 0px 5px;
                }
                .pagination-item-link{
                    --height: 30px;
                    font-weight: 400;
                    color: #939393;
                    text-decoration: none;
                    font-size: 2rem;
                    min-width: 40px;
                    height: var(--height);
                    line-height: var(--height);
                    display: block;
                    text-align: center;
                    border-radius: 2px;
                    @media only screen and (min-width: 740px) and (max-width: 1023px){
                        font-size: 1.6rem;
                        --height: 25px;
                        min-width: 35px;
                        height: var(--height);
                        line-height: var(--height);
                    }
                    .pagination-item-icon{
                        position: relative;
                        top: 5px;
                    }
                }
            }
            .pagination-item-active{
                .pagination-item-link{
                    background-color: var(--primary-color);
                    color: var(--white-color);
                    &:hover{
                        background-color: #ed5c3f;
                    }
                }
            }
        }
    
`;