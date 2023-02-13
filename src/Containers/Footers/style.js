import styled from "styled-components";
export const FootersWrapper = styled.div`
    background: #fbfbfb;
    position: relative;
    overflow: hidden;
    padding: 36px 0px 36px 0px;
    @media only screen and (max-width: 739px){
        padding: 0px 0px 36px 0px;
    }
    .app_content{
        margin: 0px 10px;
        .license{
            font-size: 1.3rem;
            color: rgba(0,0,0,.54);
        }
        .nation_list{
            width: 100%;
            padding: 0px;
            font-size: 1.3rem;
            color: rgba(0,0,0,.54);
            display: flex;
            justify-content: flex-end;
            flex-wrap: wrap;
            .nation_list-item{
                list-style: none;
                padding: 0px 5px;
                border-right: 1px solid rgba(0,0,0,.2);
                .nation_list-link{
                    text-decoration: none;
                    color: rgba(0,0,0,.54);
                }
                &:nth-child(1){
                    border: none;
                }
                &:nth-child(2){
                    padding-left: 0px;
                }
            }
        }
    }
`;