import styled from "styled-components";
export const ImagesWrapper = styled.div`
    background: #f5f5f5;
    padding: 10px 0px 10px 0px;
    @media only screen and (max-width: 739px){
        display: none;
    }
    .container{
        width: 100%;
        padding: 10px ;
        background: #fff;
        .images{
            width: 100%;
            object-fit: cover;
            border-radius: 5px;
        }
    }
`;