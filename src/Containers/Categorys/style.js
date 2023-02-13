import styled from "styled-components";
export const CategorysWrapper = styled.div`
    padding: 20px 0px 10px 0px;
    background-color: #f5f5f5;
    @media only screen and (max-width: 739px){
        display: none;
    }
    .catogory_heading{
        background-color: #fff;
        height: 60px;
        border-bottom: 1px solid rgba(0,0,0,.05);
        padding-left: 25px;
        display: flex;
        align-items: center;
        @media only screen and (min-width: 740px) and (max-width: 1023px){
            height: 45px;
        }
        .catogory_heading-title{
            font-size: 1.8rem;
            color: rgba(0,0,0,.54);
            font-weight: 400;
            @media only screen and (min-width: 740px) and (max-width: 1023px){
                font-size: 1.6rem;
                color: rgba(0,0,0,.54);
            }
        }
    }
    .container_carousel{
        width: 100%;
        background: #fff;
        padding-bottom: 10px;
        position: relative;
        .carousel_arrow_btn-left,
        .carousel_arrow_btn-right{
            position: absolute;
            top: 138px;
            width: 30px;
            height: 30px;
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
        .carousel_arrow_btn-left{
            left: -14px;
        }
        .carousel_arrow_btn-right{
            right:-14px;
        }
        .carousel_wrapper{
            width: 100%;
            display: flex;
            overflow: hidden;
            flex: none;
            scroll-behavior: smooth;
            .grid_column{
                padding-left: 0px;
                padding-right: 0px;
                width: 100%;
                min-width: 10%;
                @media only screen and (min-width: 740px) and (max-width: 1023px){
                    padding-left: 0px;
                    padding-right: 0px;
                    width: 100%;
                    min-width: 20%;
                }
                .carousel_list{
                    width: 100%;
                    height: 100%;
                    padding: 0px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    .carousel_list-item{
                        width: 100%;
                        text-align: center;
                        list-style-type: none;
                        .carousel_list-item-link{
                            display: block;
                            padding: 15px 0px 10px 0px;
                            width: 100%;
                            text-decoration: none;
                            color: rgba(0,0,0,.87);
                            border-right: 1px solid rgba(0,0,0,.05);
                            border-bottom: 1px solid rgba(0,0,0,.05);
                            transition: transform .1s cubic-bezier(.4,0,.6,1),box-shadow .1s cubic-bezier(.4,0,.6,1);
                            &:hover{
                                transform: translateZ(0);
                                z-index: 1;
                                border-color: rgba(0,0,0,.12);
                                box-shadow: 0 0 0.8125rem 0 rgb(0 0 0 / 5%);
                            }
                            .carousel_list-item-link-img{
                                width: 85px;
                                height: 85px;
                            }
                            .carousel_list-item-title{
                                width: 90%;
                                margin: 0px auto;
                                height: 38px;
                                color: rgba(0,0,0,.8);
                                font-size: 1.5rem;
                                line-height: 1.7rem;
                                display:-webkit-box;
                                -webkit-line-clamp:2;
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