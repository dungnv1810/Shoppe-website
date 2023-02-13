import styled from "styled-components";
export const CategoryWrapper = styled.div`
    padding: 36px 0px 72px 0px;
    background: #fff;
    @media only screen and (max-width: 739px){
        display: none;
    }
    .footer-heading{
        font-size: 1.2rem;
        font-weight: 700;
        margin-bottom: 1.5rem;
        color: #757575;
    }
    .footer-heading-title{
        color: #757575;
    }
    .footer-heading-list{
        margin: 0.5rem 0 1rem 0;
        list-style-type: none;
        display: flex;
        flex-wrap: wrap;
        .footer-heading-link{
            text-decoration: none;
            font-size: 1.3rem;
            color: #757575;
            line-height: 1.7rem;
            &:hover{
                color: var(--primary-color);
            }
        }

    }
`;