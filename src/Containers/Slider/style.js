import styled from "styled-components";
export const SliderWrapper = styled.div`
    width: 100%;
    border-radius: 2px;
    padding: 135px 0px 36px 0px;
    background: #fff;
    box-shadow: 0 1px 1px 0 rgb(0 0 0 / 10%);
    @media only screen and (max-width: 739px){
        display: none;
    }
    .carousel_wrapper{
        width: 100%;
        height: 270px;
        position: relative;
        box-shadow: 0 1px 1px 0 rgb(0 0 0 / 10%);
        @media only screen and (min-width: 740px) and (max-width: 1023px){
            width: 100%;
            height: 185px;
        }
        .carousel_card{
            position: absolute;
            overflow: hidden;
            width: 100%;
            height: 100%;
            display: flex;
            flex: 1;
            opacity: 0;
            /* pointer-events: none; */
            /* transform: scale(0.8); */
            /* transition: all 0.3s ease-in-out; */
            .card_images{
                width: 100%;
                height: 100%;
                @media only screen and (min-width: 740px) and (max-width: 1023px){
                    width: 100%;
                    height: 100%;
                }
            }
        }
        .carousel_card-active{
            opacity: 1;
            transform: scale(1);
            pointer-events: visible;
        }
        .carousel_arrow_left,
        .carousel_arrow_right{
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 30px;
            height: 30px;
            background: rgba(0, 0, 0, 0.5);
            font-size: 40px;
            color: #fff;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            padding-bottom: 12px;
            cursor: pointer;
        }
        .carousel_arrow_left{
            left: 15px;
        }
        .carousel_arrow_right{
            right: 15px;
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
                margin-left: 10px;
                border-radius: 50%;
                display: inline-block;
                background: rgba(255, 255, 255, 0.6);
                @media only screen and (min-width: 740px) and (max-width: 1023px){
                    width: 8px;
                    height: 8px;
                    margin: 0px 2px;
                }
                &:hover{
                    transform: scale(1.2);
                    transition: all 0.5s ease-in-out;
                }
            }
            .pagination_dot-active{
                background: #EE4D2D;
            }
        }
    }
    .carousel_wrapper-images{
        width: 100%;
        height: 270px;
        overflow: hidden;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-between;
        @media only screen and (min-width: 740px) and (max-width: 1023px){
            height: 185px;
        }
        .carousel_link{
            width: 100%;
            height: 50%;
            margin-bottom: 4px;
            overflow: hidden;
            .carousel_img{
                width: 100%;
                height: 100%;
            }
            &:last-child{
                 margin-bottom: 0px;
            }
        }
    }
    .mt-12{
        margin-top: 12px;
    }
    .carousel_link-list{
        text-decoration: none;
        text-align: center;
        width: 100%;
        height: 100%;
        display: block;
        padding: 18px 10px 5px 10px;
        @media only screen and (min-width: 740px) and (max-width: 1023px){
            padding: 8px 3px 3px 3px;
        }
        box-shadow: 0 1px 4px 0 rgb(0 0 0 / 10%);
        .carousel_link-item{
            margin-bottom: 3px;
            .carousel_link-images{
                width: 45px;
                height: 45px;
                @media only screen and (min-width: 740px) and (max-width: 1023px){
                    width: 25px;
                    height: 25px;
                }
            }
        }
        .carousel_title{
            color: #222;
            font-size: 1.3rem;
            @media only screen and (min-width: 740px) and (max-width: 1023px){
                font-size: 1rem;
                line-height: 1.2rem;
                display:-webkit-box;
                -webkit-line-clamp:2;
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-overflow: ellipsis;
                word-break: break-word;
            }
        }
        &:hover{
            transform: translateY(-1px);
        }
    }
`;