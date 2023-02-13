import styled from "styled-components";
export const HeaderWrapper = styled.div`
    position: fixed;
    z-index: 1000;
    width: 100%;
    height: var(--header-height);
    background-image: linear-gradient(0deg, #fe6433, #f53e2d);
    @media only screen and (max-width: 1023px){
        height: var(--navbar-mobile-tablet);
        display: flex;
        align-items: center;
    }
    .header_sort-bar{
        position: fixed;
        top: var(--navbar-mobile-tablet);
        left: 0;
        right: 0;
        background: #fff;
        list-style: none;
        height: var(--header-sort-bar-height);
        border-top: 1px solid #e5e5e5;
        border-bottom: 1px solid #e5e5e5;
        display: none;
        @media only screen and (max-width: 1023px){
            display: flex;
        }
        .header_sort-item{
            flex: 1;
            &:first-child .header_sort-link::after{
                display: none;
            }
            .header_sort-link{
                position: relative;
                display: block;
                text-decoration: none;
                color: var(--text-color);
                font-size: 1.4rem;
                height: 100%;
                line-height: var(--header-sort-bar-height);
                text-align: center;
                &::after{
                    position: absolute;
                    content: "";
                    top: 50%;
                    transform: translateY(-50%);
                    left: 0;
                    height: 60%;
                    width: 1px;
                    background: #e5e5e5;
                }
                .header_sort-icon{
                    font-size: 1.8rem;
                    position: relative;
                    top: 4px;
                }
            }
        }
        .header_sort-item-active .header_sort-link{
            color: var(--primary-color);
        }
    }
    .header_navbar{
        height: var(--navbar-height);
        display: flex;
        justify-content: space-between;
        @media only screen and (max-width: 1023px){
            display: none;
        }
    }
    .header_navbar-list{
        display: flex;
        align-items: center;
        list-style-type: none;
        padding-left: 0px;
    }
    .header_navbar-item{
        margin: 0px 8px;
        position: relative;
        &:first-child{
            margin-left: 0px;
        }
        &:last-child{
            margin-right: 0px;
        }
    }
    .header_navbar-language:hover .header_navbar-language-menu{
        display: block;
    }
    .header_navbar-language{
        position: relative;
        .header_navbar-item-link{
            .header_navbar-language-down{
                position: relative;
                top: 1px;
                font-size: 2rem;
            }
        }
        .header_navbar-language-menu{
            display: none;
            position: absolute;
            z-index: 1000;
            top: 135%;
            right: 0;
            width: 200px;
            border-radius: 2px;
            background-color: #fff;
            list-style-type: none;
            transform-origin: calc(100% - 30px) top;
            animation: headerNotifyGrowth 0.3s ease-in;
            .header_navbar-language-item{
                a{
                    display: block;
                    font-weight: 500;
                    padding: 10px 16px;
                    text-decoration: none;
                    font-size: 1.4rem;
                    color: var(--text-color);
                    &:hover{
                        color: var(--primary-color);
                        background-color: #fafafa
                    }
                    &:first-child{
                        border-top-left-radius: 2px;
                        border-top-right-radius: 2px;
                    }
                    &:last-child{
                        border-bottom-left-radius: 2px;
                        border-bottom-right-radius: 2px;
                    }
                }
            }
        }
        @keyframes headerNotifyGrowth {
            from{
                opacity: 0;
                transform: scale(0);
            }to{
                opacity: 1;
                transform: scale(1);
            }
        }
        .header_navbar-language-menu::after{
            position: absolute;
            content: "";
            top: -25%;
            right: 0px;
            width: 52%;
            height: 30px;
        }
        .header_navbar-language-menu::before{
            position: absolute;
            content: "";
            top: -30px;
            right: 12px;
            border-style: solid;
            border-width: 20px 20px;
            border-color: transparent transparent white transparent;
        }
    }
    .header_navbar-user:hover .header_navbar-user-menu{
        display: block;
    }
    .header_navbar-user{
        position: relative;
        display: flex;
        align-items: center;
        .header_navbar-user-img{
            width: 25px;
            height: 21px;
        }
        .header_navbar-user-name{
            margin-left: 5px;
            font-weight: 300;
            font-size: 1.5rem;
            color: #fff;
        }
        .header_navbar-user-menu{
            display: none;
            position: absolute;
            z-index: 1000;
            top: 135%;
            right: 0px;
            width: 160px;
            padding-left: 0;
            list-style-type: none;
            background-color: #fff;
            border-radius: 2px;
            animation: headerNotifyGrowth 0.3s ease-in;
            transform-origin: calc(100% - 30px) top;
            box-shadow: 0 1px 4px rgb(0 0 0 / 10%);
            .header_navbar-user-item{
                a{
                    display: block;
                    padding: 10px 16px;
                    font-size: 1.4rem;
                    color: var(--text-color);
                    text-decoration: none;
                    &:hover{
                        background-color: #fafafa;
                    }
                    &:first-child{
                        border-top-left-radius: 2px;
                        border-top-right-radius: 2px;
                    }
                    &:last-child{
                        border-bottom-left-radius: 2px;
                        border-bottom-right-radius: 2px;
                    }
                }
            }
        }
        @keyframes headerNotifyGrowth {
            from{
                opacity: 0;
                transform: scale(0);
            }to{
                opacity: 1;
                transform: scale(1);
            }
        }
        .header_navbar-user-menu::after{
            position: absolute;
            content: "";
            top: -11%;
            right: 0;
            width: 75%;
            height: 30px;
        }
        .header_navbar-user-menu::before{
            position: absolute;
            content: "";
            top: -30px;
            right: 15px;
            border-style: solid;
            border-width: 20px 20px;
            border-color: transparent transparent white transparent;
        }
    }
    .header_navbar-item,
    .header_navbar-item-link{
        font-size: 1.3rem;
        color: var(--white-color);
        text-decoration: none;
        font-weight: 300;
    }
    .navbar-item-bold{
        font-weight: 400;
    }
    .header_navbar-item-separate::after{
        content: "";
        right: -9px;
        top: 50%;
        transform: translateY(-50%);
        display: block;
        position: absolute;
        width: 1px;
        height: 15px;
        background-color: #fb9086;
    }
    .header_navbar-item,
    .header_navbar-item-link,
    .header_navbar-item-icon{
        display: inline-flex;
        align-items: center;
    }
    .ml-4{
        margin-left: 4px;
    }
    .header_navbar-icon{
        margin: 0px 5px;
        font-size: 1.8rem;
        text-decoration: none;
        color: var(--white-color);
    }
    .header_navbar-item-title-no-pointer{
        cursor: text;
        color: var(--white-color);
    }
    .header_navbar-item:hover,
    .header_navbar-item-link:hover,
    .header_navbar-icon:hover{
        color: rgba(255, 255, 255, 0.8);
        cursor: pointer;
    }

    // QRcode
    .header_navbar-item-has-qr:hover .header_qr{
        display: block;
    }
    .header_qr{
        display: none;
        position: absolute;
        z-index: 1000;
        left: 0;
        top: 130%;
        margin-top: 5px;
        background-color: var(--white-color);
        width: 186px;
        animation: fadeIn .3s ease-in;
        box-shadow: var(--box-shadow);
    }
    .header_qr::before{
        content: "";
        display: block;
        position: absolute;
        width: 100%;
        height: 20px;
        left: 0;
        top: -13px;
    }
    .header_qr-img{
        width: 100%
    }
    .header_qr-apps{
        display: flex;
        justify-content: space-between;
        margin-bottom: 5px;
    }
    .header_qr-apps-download-img{
        height: 16px;
    }
    .header_qr-apps-link{
        &:nth-child(1){
            margin-left: 20px;
        }
        &:nth-child(2){
            margin-right: 20px;
        }
    }
    @keyframes fadeIn {
        from{
            opacity: 0;
        }to{
            opacity: 1;
        }
    }

    // Thông báo
    .header_navbar-item:hover .header_notify{
        display: block;
    }
    .header_notify{
        display: none;
        position: absolute;
        z-index: 1000;
        top: 150%;
        right: 0;
        width: 404px;
        cursor: default;
        border-radius: 2px;
        background-color: var(--white-color);
        transform-origin: calc(100% - 38px) top;
        animation: headerNotifyGrowth 0.3s ease-in;
        -webkit-animation: headerNotifyGrowth 0.3s ease-in;
        -moz-animation: headerNotifyGrowth 0.3s ease-in;
        -o-animation: headerNotifyGrowth 0.3s ease-in;
        will-change: opacity, transform;
        box-shadow: 0 1px 4px rgb(0 0 0 / 10%);
    }
    .header_notify::after{
        content: "";
        top: -30px;
        right: 12px;
        position: absolute;
        border-width: 20px 20px;
        border-style: solid;
        border-color: transparent transparent white transparent;
    }
    .header_notify::before{
        content: "";
        position: absolute;
        top: -10%;
        right: 0%;
        width: 100%;
        height: 30px;
    }
    @keyframes headerNotifyGrowth {
        from{
            opacity: 0;
            transform: scale(0);
        }to{
            opacity: 1;
            transform: scale(1);
        }
    }
    .header_notify-header{
        height: 40px;
        background-color: var(--white-color);
        padding: 0px 12px;
        user-select: none;
        &:first-child{
            border-top-left-radius: 2px;
            border-top-right-radius: 2px;
        }
        h3{
            color: #999;
            font-weight: 400;
            font-size: 1.4rem;
            line-height: 40px;
        }
    }
    .header_notify-list{
        list-style-type: none;
    }
    .header_notify-item{

    }
    .header_notify-list-viewed{
        background-color: rgba(238, 77, 45, 0.08);
    }
    .header_notify-link{
        display: flex;
        padding: 12px;
        text-decoration: none;
        &:hover{
            background-color: #f7f7f7;
        }
    }
    .header_notify-img{
        width: 50px;
        object-fit: contain;
    }
    .header_notify-info{
        margin-left: 12px;
    }
    .header_notify-name{
        display: block;
        color: #000;
        font-size: 1.4rem;
        font-weight: 400;
        display:-webkit-box;
        -webkit-line-clamp:1;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-word;
    }
    .header_notify-disciption{
        display: block;
        color: #756f6e;
        font-size: 1.2rem;
        line-height: 1.4rem;
        margin-top: 4px;
        display:-webkit-box;
        -webkit-line-clamp:2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-word;
    }
    .header_notify-footer{
        display: flex;
    }
    .header_notify-footer-btn{
        padding: 10px 161px;
        font-size: 1.4rem;
        font-weight: 400;
        margin: 0px auto;
        color: var(--text-color);
        text-decoration: none;
    }
    .header_notify-footer,
    .header_notify-footer-btn,
    .header_notify-footer-next{
        display: inline-flex;
        align-items: center;
    }
    // Header With Search
    .header_with-search{
        width: 100%;
        display: flex;
        align-items: center;
        height: var(--header-with-search-height);
        @media only screen and (max-width: 739px){
            justify-content: space-between;
        }
        .header_mobile{
            display: none;
            @media only screen and (max-width: 739px){
                display: block;
            }
            @media only screen and (min-width: 740px) and (max-width: 1023px){
                display: none;
            }
            .header_mobile-search{
                padding: 0px 8px 0px 0px;
                .mobile-search-icon{
                    font-size: 2.8rem;
                    color: #fff;
                }
            }
            .header_mobile-menu{
                padding: 0px 8px;
                .mobile-menu-icon{
                    font-size: 2.8rem;
                    color: #fff;
                }
            }

        }
        .header_logo{
            width: 200px;
            @media only screen and (max-width: 739px){
                width: unset;
            }
            @media only screen and (min-width: 740px) and (max-width: 1023px){
                display: none;
            }
            .header_logo-img{
                width: 150px;
            }
        }
        .header_search-checkbox:checked ~ .header_search{
            display: flex;
        }
        .header_search{
            flex-grow: 1;
            height: 40px;
            border-radius: 2px;
            display: flex;
            align-items: center;
            background-color: #fff;
            @media only screen and (max-width: 739px){
                display: none;
                position: fixed;
                z-index: 1;
                top: var(--navbar-mobile-tablet);
                left: 0;
                right: 0;
                height: 46px;
                padding: 0px 8px;
                box-shadow: var(--box-shadow);
                animation: identifier 0.3s linear;
                @keyframes identifier {
                    from{
                        top: calc(var(--navbar-mobile-tablet) / 2);
                        opacity: 0;
                    }to{
                        opacity: 1;
                        top: var(--navbar-mobile-tablet);
                    }
                }
            }
            .header_search-input-wrap{
                position: relative;
                flex: 1;
                height: 100%;
                .header_search-input{
                    width: 100%;
                    height: 100%;
                    border: none;
                    outline: none;
                    padding: 0px 16px;
                    background: transparent;
                    font-size: 1.4rem;
                    color: var(--text-color);
                    &:focus ~ .header_search-history{
                        display: block;
                    }
                }
                .header_search-history{
                    display: none;
                    position: absolute;
                    z-index: 1000;
                    top: 110%;
                    left: 0;
                    width: calc(100% - 16px);
                    background-color: #fff;
                    border-radius: 2px;
                    box-shadow: 0 1px 4px rgb(0 0 0 / 10%);
                    @media only screen and (max-width: 1023px){
                        width: 100%;
                    }
                    .header_search-history-heading{
                        margin: 8px 16px;
                        font-size: 1.4rem;
                        color: #999;
                        font-weight: 400;
                    }
                    .header_search-history-list{
                        margin-top: 15px;
                        list-style-type: none;
                        .header_search-history-item{
                            height: 38px;
                            padding: 0px 16px;
                            line-height: 38px;
                            &:last-child{
                                border-bottom-left-radius: 2px;
                                border-bottom-right-radius: 2px;
                            }
                            &:hover{
                                background-color: #fafafa;
                            }
                            a{
                                display: block;
                                text-decoration: none;
                                font-size: 1.4rem;
                                color: var(--text-color);
                            }
                        }
                    }
                }
                .header_search-history::before{
                    position: absolute;
                    content: "";
                    top: -10%;
                    right: 0;
                    width: 100%;
                    height: 20px;
                }
            }
            .header_search-select{
                position: relative;
                cursor: pointer;
                .header_search-select-label::before{
                    position: absolute;
                    content: "";
                    top: 50%;
                    left: 0;
                    width: 1px;
                    height: 20px;
                    transform: translateY(-50%);
                    background-color: #e8e8e8;
                }
                .header_search-select-label{
                    font-size: 1.4rem;
                    padding: 0px 7px 0px 16px;
                    color: var(--text-color);
                    .header_search-select-icon{
                        position: relative;
                        left: -3px;
                        font-size: 1.8rem;
                        vertical-align: middle;
                    }
                }
                &:hover .header_search-option{
                    display: block;
                }
                .header_search-option{
                    display: none;
                    position: absolute;
                    z-index: 1000;
                    min-width: 130px;
                    padding: 5px;
                    top: 175%;
                    right: 0;
                    box-sizing: border-box;
                    border-radius: 3px;
                    list-style-type: none;
                    box-shadow: 0 0 3px #ccc;
                    background-color: #fff;
                    text-align: right;
                    .header_search-option-item{
                        padding: 5px 5px;
                        display: flex;
                        align-items: center;
                        justify-content: flex-end;
                        box-sizing: border-box;
                        &:last-child{
                            margin-top: 4px;
                        }
                        span{
                            font-size: 1.4rem;
                            color: var(--text-color);
                            display: flex;
                            align-items: center;
                            .header_search-option-icon{
                                font-size: 1.8rem;
                                color: var(--text-color);
                                
                            }
                        }
                    }
                }
                .header_search-option::before{
                    position: absolute;
                    content: "";
                    top: -13px;
                    right: 0;
                    width: 100%;
                    height: 20px;
                }
            }
            .header_search-btn{
                padding: 7px 24px;
                border: none;
                border-radius: 3px;
                margin-right: 3px;
                background-color: #F15231;
                cursor: pointer;
                @media only screen and (max-width: 1023px){
                    padding: 5px 20px;
                }
                &:hover{
                    background-color: #fb6445;
                }
                .header_search-btn-icon{
                    position: relative;
                    top: 1px;
                    font-size: 1.9rem;
                    color: #fff;
                }
            }
        }
        .header_cart{
            position: relative;
            height: 40px;
            width: 150px;
            text-align: center;
            @media only screen and (max-width: 739px){
                width: unset;
            }
            @media only screen and (min-width: 740px) and (max-width: 1023px){
                width: 80px;
                text-align: right;
            }
            .header_cart-wrap{
                display: inline-block;
                padding: 0px 8px;

                &:hover .header_cart-list{
                    display: block;
                    @media only screen and (max-width: 739px){
                        right: 0%;
                    }
                }
                .header-cart-icon{
                    position: relative;
                    color: #fff;
                    margin-top: 8px;
                    font-size: 2.5rem;
                    cursor: pointer;
                }
                .header_cart-notice{
                    position: absolute;
                    top: -5%;
                    right: 33%;
                    padding: 1px 6px;
                    border-radius: 10px;
                    line-height: 1.4rem;
                    font-size: 1.4rem;
                    background-color: #fff;
                    color: var(--primary-color);
                    border: 2px solid #ee4d2d;
                    @media only screen and (max-width: 1023px){
                        right: 0;
                    }
                }
                .header_cart-list{
                    display: none;
                    position: absolute;
                    z-index: 999;
                    top: 110%;
                    right: 50px;
                    width: 404px;
                    cursor: default;
                    border-radius: 2px;
                    background-color: #fdfdfd;
                    transform-origin: calc(100% - 25px) top;
                    animation: headerNotifyGrowth 0.3s ease-in;
                    box-shadow: 0 1px 4px rgb(0 0 0 / 10%);
                    @media only screen and (max-width: 739px){
                        display: block;
                        position: fixed;
                        top: var(--navbar-mobile-tablet);
                        right: -100%;
                        transition: all 0.3s linear;
                        width: 100%;
                    }
                    @media only screen and (min-width: 740px) and (max-width: 1023px){
                        top: 110%;
                        right: 0px;
                        width: 350px;
                    }

                    .header_cart-list-no-cart-img{
                        display: none;
                        width: 54%;
                    }
                    .header_cart-list-no-cart-msg{
                        display: none;
                        font-size: 1.4rem;
                        margin-top: 12px;
                        color: var(--text-color);
                    }
                    .header_cart-heading{
                        color: #999;
                        font-weight: 400;
                        font-size: 1.4rem;
                        text-align: left;
                        margin: 8px 0px 8px 12px;
                    }
                    .header_cart-list-item{
                        max-height: 40vh;
                        overflow-y: auto;
                        list-style-type: none;
                        @media only screen and (max-width: 739px){
                            max-height: 20vh;
                        }
                        @media only screen and (min-width: 740px) and (max-width: 1023px){
                            max-height: 20vh
                        }
                        .header_cart-item{
                            padding: 0px 12px;
                            display: flex;
                            align-items: center;
                            &:hover{
                                background-color: #f8f8f8;
                            }
                            .header_cart-img{
                                width: 42px;
                                margin: 12px 12px 12px 0px;
                            }
                            .header_cart-item-info{
                                width: 100%;
                                .header_cart-item-head{
                                    display: flex;
                                    align-items: center;
                                    justify-content: space-between;
                                    .header_cart-item-name{
                                        display:-webkit-box;
                                        -webkit-line-clamp:2;
                                        -webkit-box-orient: vertical;
                                        overflow: hidden;
                                        text-overflow: ellipsis;
                                        word-break: break-word;
                                        text-align: left;
                                        overflow: hidden;
                                        font-size: 1.4rem;
                                        font-weight: 500;
                                        padding-right: 10px;
                                    }
                                    .header_cart-item-price-wrap{
                                        .header_cart-item-price{
                                            font-size: 1.4rem;
                                            font-weight: 400;
                                            color: var(--primary-color);
                                        }
                                        .header_cart-item-muntiply{
                                            margin: 0 4px;
                                            font-size: .9rem;
                                            color: #757575;
                                        }
                                        .header_cart-item-qlt{
                                            font-size: 1.2rem;
                                            color: #757575;
                                        }
                                    }
                                }
                                .header_cart-item-body{
                                    margin-top: 5px;
                                    display: flex;
                                    align-items: center;
                                    justify-content: space-between;
                                    .header_cart-item-discription{
                                        color: #757575;
                                        font-size: 1.2rem;
                                        font-weight: 300;
                                    }
                                    .header_cart-item-delete{
                                        color: var(--text-color);
                                        font-size: 1.4rem;
                                        font-weight: 500;
                                        cursor: pointer;
                                        &:hover{
                                            color: var(--primary-color);
                                        }
                                    }
                                }
                            }
                        }
                    }
                    .header_cart-view-cart{
                        float: right;
                        margin: 12px 12px 12px 0px;
                    }
                    .btn{
                        cursor: pointer;
                        min-width: 124px;
                        height: 36px;
                        border: none;
                        text-decoration: none;
                        border-radius: 3px;
                        font-size: 1.4rem;
                        background-color: transparent;
                        color: var(--text-color); 
                        @media only screen and (max-width: 739px){
                            min-width: 110px;
                            height: 30px;
                            font-size: 1.3rem;
                        }
                        @media only screen and (min-width: 740px) and (max-width: 1023px){
                            min-width: 110px;
                            height: 30px;
                            font-size: 1.3rem;
                        }
                        &:hover{
                            background: #f05d41;
                        }
                    }
                    .btn-primary{
                        color: #ffffff;
                        background-color: var(--primary-color);
                    }
                }
                .header_cart-list-no-cart .header_cart-list-no-cart-img,
                .header_cart-list-no-cart .header_cart-list-no-cart-msg{
                    margin-left: auto;
                    margin-right: auto;
                    display: block;
                }
                .header_cart-list-no-cart{
                    padding: 28px 0;
                }

                .header_cart-list::before{
                    position: absolute;
                    content: "";
                    top: -7%;
                    right: 0px;
                    width: 25%;
                    height: 30px;
                    @media only screen and (max-width: 739px){
                        position: absolute;
                        content: "";
                        top: -25px;
                        right: 0px;
                        width: 12%;
                    }
                    @media only screen and (min-width: 740px) and (max-width: 1023px){
                        position: absolute;
                        content: "";
                        top: -15px;
                        right: 0px;
                        width: 20%;
                    }
                }
                .header_cart-list::after{
                    position: absolute;
                    content: "";
                    top: -29px;
                    right: 3px;
                    cursor: pointer;
                    border-style: solid;
                    border-width: 20px 20px;
                    border-color: transparent transparent white transparent;
                    @media only screen and (max-width: 739px){
                        display: none;
                    }
                    @media only screen and (min-width: 740px) and (max-width: 1023px){
                        position: absolute;
                        content: "";
                        top: -30px;
                        right: 0px;
                    }
                }
                @keyframes headerNotifyGrowth {
                    from{
                        opacity: 0;
                        transform: scale(0);
                    }to{
                        opacity: 1;
                        transform: scale(1);
                    }
                }
            }
        }
    }


    // Modal
    .modal{
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        animation: fadeIn .2s linear;
    }
    @keyframes fadeIn {
        from{
            opacity: 0;
        }to{
            opacity: 1;
        }
    }
    .modal_overlay{
        position: absolute;
        z-index: 988;
        width: 100%;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.4);
    }
    .modal_body{
        position: absolute;
        z-index: 999;
        animation: growth 0.1s linear;
    }
    @keyframes growth {
        from{
            transform: scale(0.7);
        }to{
            transform: scale(1);
        }
    }
    .auth_form{
        overflow: hidden;
        width: 500px;
        border-radius: 5px;
        background-color: #ffffff;
    }
    .auth-form-container{
        padding: 33px 32px 20px 32px;
        background-color: #ffffff;
    }
    .auth_form-header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 44px;
        .auth_form-heading{
            font-size: 2.2rem;
            font-weight: 500;
            color: var(--text-color);
        }
        .auth_form-switch-btn{
            font-size: 1.6rem;
            color: var(--primary-color);
            font-weight: 500;
            cursor: pointer;
        }
    }
    .auth_form-form{
        .auth_form-group{
            .auth_form-input{
                width: 100%;
                height: 40px;
                font-size: 1.4rem;
                margin-top: 16px;
                padding: 0 12px;
                border-radius: 3px;
                outline: none;
                border: 1px solid var(--border-color);
                &:focus{
                    border-color: #777;
                }

            }
        }
    }
    .auth_form-aside{
        margin-top: 16px;
        .auth_form-policy-text{
            padding: 0px 12px;
            font-size: 1.2rem;
            line-height: 1.4rem;
            text-align: center;
            .auth_form-text-link{
                color: var(--primary-color);
                text-decoration: none;
            }
        }
    }
    .auth_form-control{
        margin-top: 100px;
        display: flex;
        justify-content: flex-end;
        .btn{
            cursor: pointer;
            min-width: 142px;
            height: 36px;
            border: none;
            text-decoration: none;
            border-radius: 3px;
            font-size: 1.4rem;
            background-color: transparent;
            color: var(--text-color);
            &:hover{
                background-color: rgba(0, 0, 0, 0.04);
            }
            &:first-child{
                margin-right: 8px;
            }
        }
        .btn.btn-primary{
            color: #ffffff;
            background-color: var(--primary-color);
        }
    }
    .auth_form-socials{
        padding: 16px 32px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #f5f5f5;
        .btn{
            cursor: pointer;
            border: none;
            min-width: 150px;
            text-decoration: none;
            border-radius: 3px;
            font-size: 1.4rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .btn-with-icon{
            padding: 8px 8px;
        }
        .auth_form-socials-sms{
            color: #fff;
            background-color: #10860B
        }
        .auth_form-socials-facebook{
            color: #fff;
            background-color: #3a5a96;
        }
        .auth_form-socials-google{
            font-weight: 500;
            color: var(--text-color);
            background-color: #ffffff;
        }
        .auth_form-socials-icon{
            font-size: 1.8rem;
        }
        .auth_form-socials-title{
            margin: 0px 20px;
        }

        .btn-sms{
            cursor: pointer;
            border: none;
            text-decoration: none;
            border-radius: 3px;
            font-size: 1.4rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .btn-with-icon-sms{
            padding: 8px 8px;
        }
        .auth_form-socials-titles{
            margin: 0px 30px;
        }
    }
`;