import styled from "styled-components";
export const FooterssWrapper = styled.div`
    background: #f5f5f5;
    padding: 36px 0px 36px 0px;
    font-size: 1.3rem;
    color: rgba(0,0,0,.54);
    overflow: hidden;
    .app_content{
        margin: 0px 10px;
        .container_footer-top{
            width: 100%;
            display: flex;
            justify-content: center;
            margin-bottom: 40px;
            text-transform: uppercase;
            .footer_list{
                display: flex;
                padding: 0px;
                .footer_item{
                    padding: 0px 25px;
                    list-style: none;
                    border-right: 1px solid rgba(0,0,0,.09);
                    .footer_link{
                        text-decoration: none;
                        color: rgba(0,0,0,.54);
                        font-size: 1.3rem;
                    }
                }
            }
        }
        .container_footer-logo{
            width: 100%;
            .container_footer-logo-list{
                display: flex;
                justify-content: center;
                .container_footer-logo-item{
                    list-style: none;
                    text-align: center;
                    .container_footer-logo-link{
                        text-decoration: none;
                        .container_footer-logo-img{
                            @media only screen and (max-width: 739px){
                                height: 30px;
                            }
                        }
                    }
                }
            }
        }
        .ggg4D{
            margin-bottom: 25px;
        }
        .BV2E6Y{
            margin-top: 8px;
            text-align: center;
        }
    }
`;