import styled from "styled-components";

const ChartBoxWrap = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 40px;
`;

const ChartBoxDiv = styled.div`
    border-radius: 12px;
    width: 450px;
    height: 530px;
    display: flex;
    justify-content: center;
    background-color: white;
    border: 1px solid rgba(100, 149, 237, 0.9);
    margin: 0 30px 0 30px;
    box-shadow: rgba(50, 50, 93, 0.5) 0px 20px 20px -10px,
    rgba(0, 0, 0, 0.5) 0px 10px 20px -10px; 
`

const ChartBoxText = styled.span`
    margin-top: 5px;
    font-size: 34px;
    background-color: transparent;
    color: cornflowerblue;
    font-family: 'Pacifico', cursive;
`;

export {
    ChartBoxWrap,
    ChartBoxDiv,
    ChartBoxText
};