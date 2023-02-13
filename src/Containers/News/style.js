import styled from "styled-components";
export const NewsWrapper = styled.div`
    position: relative;
    border-top: 4px solid var(--primary-color);
    padding: 36px 0px 36px 0px;
    background-color: #fff;
    @media only screen and (max-width: 739px){
        display: none;
    }
    h1{
        font-size: 1.5rem;
        font-weight: 700;
        color: var(--text-color);
    }
    h2{
        font-size: 1.2rem;
        font-weight: 700;
        margin-top: 1.5rem;
        color: var(--text-color);
    }
    p{
        font-size: 1.2rem;
        color: var(--text-color);
        line-height: 1.4;
        margin: 1rem 0 0;
        span{
            b{
                u{
                    a{
                        color: #1155CC
                    }
                }
            }
        }
    }
    ul{
        font-size: 1.2rem;
        list-style-type: none;
        margin-left: 40px;
        li{
            margin-top: 1rem;
            list-style-type: disc;
            color: #808080;
            span{
                color: var(--text-color);
                a{
                    color: #1155CC
                }
            }
        }
    }
`;