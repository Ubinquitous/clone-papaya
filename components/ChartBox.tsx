import React from 'react';
import { ChartBoxDiv, ChartBoxText, ChartBoxWrap } from '../styles/ChatBox';

const ChartBox = () => {
    return (
        <ChartBoxWrap>
            <ChartBoxDiv>
                <ChartBoxText>TOP Artist Chart</ChartBoxText>
            </ChartBoxDiv>
            <ChartBoxDiv>
                <ChartBoxText>TOP Track Chart</ChartBoxText>
            </ChartBoxDiv>
        </ChartBoxWrap>
    );
};

export default ChartBox;