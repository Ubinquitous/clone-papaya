import { ReactNode } from "react";
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
    align-items: center;
    background-color: white;
    flex-direction: column;
    border: 1px solid rgba(100, 149, 237, 0.9);
    margin: 0 30px 0 30px;
    box-shadow: rgba(50, 50, 93, 0.5) 0px 20px 20px -10px,
    rgba(0, 0, 0, 0.5) 0px 10px 20px -10px; 
`

const ChartBoxText = styled.span`
    margin-top: 20px;
    font-size: 34px;
    background-color: transparent;
    color: cornflowerblue;
    font-family: 'Pacifico', cursive;
    margin-bottom: 20px;
`;

const Charts = styled.div`
    background-color: transparent;
    width: 100%;
    height:100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const Chart = styled.div`
    border-top: 2px solid rgba(100, 149, 237, 0.3);
    width:95%;
    height:70px;
    background-color: transparent;
    color: black;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

const ChartText = styled.span`
    width: 100%;
    background-color: transparent;
    font-size: 18px;
    color: cornflowerblue;
    margin-left: 10px;
    font-weight: 700;
    margin-bottom: 4px;
`;

const ChartSubText: any = styled.span`
    background-color: transparent;
    font-size: 10px;
    color: cornflowerblue;
    margin-left: 10px;
    font-weight: 400;
`;

const RankText = styled.span`
    float:right;
    background-color: transparent;
    margin-right: 20px;
    font-size: 20px;
`;

export {
    ChartBoxWrap,
    ChartBoxDiv,
    ChartBoxText,
    Charts,
    Chart,
    ChartText,
    ChartSubText,
    RankText,
};