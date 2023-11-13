const { createGlobalStyle } = require("styled-components");


const Globalstyle = createGlobalStyle`
    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
    }
    html, body, div, span, h1, h2, h3, h4, h5, h6, p, 
    a, dl, dt, dd, ol, ul, li, form, label, table{
        margin: 0;
        padding: 0;
        border: 0;
        font-size:10px;
        vertical-align: baseline;
    }
    body{
        line-height: 1;
        width:100vw;
        height: 100vh;
        font-family: 'Noto Sans KR', sans-serif;
        text-align: center;
        background-color: #8EC5FC;
background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);
;
        margin-bottom: 100px;
    }
    ol, ul{
        list-style: none;
    }
    button {
        border: none;
        outline:none;
        cursor: pointer;
    }
`;

export default Globalstyle;
