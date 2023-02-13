import styled from "styled-components";
export const FooterWrapper = styled.div`
    padding: 36px 0px 36px 0px;
    background-color: #fbfbfb;
    overflow: hidden;
    @media only screen and (max-width: 739px){
        padding: 26px 0px 36px 0px;
    }
        .app_content{
            margin: 0px 10px;
            .footer-heading{
                text-transform: uppercase;
                font-size: 1.4rem;
                color: var(--text-color);
                @media only screen and (max-width: 739px){
                    margin-top: 10px;
                }
            }
            .footer-list{
                list-style-type: none;
                padding-left: 0px;
                .footer-list-item{
                    .footer-list-link{
                        display: block;
                        padding: 5px 0px;
                        color: #737373;
                        font-size: 1.3rem;
                        text-decoration: none;
                        display: flex;
                        align-items: center;
                        &:hover{
                            color: var(--primary-color);
                        }
                        .footer-list-icon{
                            margin-right: 8px;
                            font-size: 1.8rem;
                        }
                    }
                    &:first-child{
                        margin-top: 10px;
                    }
                }
                
            }
            .footer-pay{
                margin: 10px 0px;
                display: flex;
                flex-wrap: wrap;
                list-style-type: none;
                .footer-pay-item{
                    margin: 0 0.5rem 0.5rem 0;
                    .footer-pay-link{
                        display: block;
                        padding: 5px 10px;
                        border-radius: 2px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background-color: #fff;
                        box-shadow: 0 1px 1px rgb(0 0 0 / 20%);
                        @media only screen and (min-width: 740px) and (max-width: 1023px){
                            padding: 5px 3px;
                        }
                        .footer-pay-img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                }
            }
            .footer-download{
                display: flex;
                .footer-download-qr{
                    width: 80px;
                    object-fit: contain;
                    margin-right: 0.75rem;
                    border-radius: 2px;
                    box-shadow: 0 1px 1px rgb(0 0 0 / 20%);
                }
                .footer-download-app{
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    .footer-download-app-link{
                        display: block;
                        padding: 2px 5px;
                        background-color: #fff;
                        border-radius: 2px;
                        box-shadow: 0 1px 1px rgb(0 0 0 / 20%);
                        .footer-download-img{
                            height: 15px;
                        }
                    }
                    
                }
            } 
        }
`;