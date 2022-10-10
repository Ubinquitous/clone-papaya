import React from 'react';
import styled from 'styled-components';

const HeaderDiv = styled.div`
    width: 99%;
    height: 80px;
    background-color: white;
    margin: 10px 5px 0 5px;
    box-shadow: rgba(50, 50, 93, 0.5) 0px 20px 20px -20px,
    rgba(0, 0, 0, 0.5) 0px 10px 20px -30px; 
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    overflow: auto;
    text-align: center;
`;

const HeaderWrap = styled.div`
    display: flex;
    text-align: center;
`;

const HeaderText = styled.span`
    font-family: 'Pacifico', cursive;
    color: cornflowerblue;
    font-size: 40px;
    background-color: transparent;
    margin-left: 15vw;
`;

const HeaderInputWrap = styled.form`
    background-color: transparent;
    float:right;
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const HeaderInput = styled.input`
    ::placeholder {
        font-family: 'Pacifico', cursive;
        color:rgba(100, 149, 237, 0.4);
    }
    width:170px;
    height:30px;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    border:2px solid cornflowerblue;
    outline: none;
    background-color: transparent;
    color:cornflowerblue;
    padding-left: 8px;
    font-weight:700;
`;

const HeaderSearch = styled.button`
    cursor: pointer;
    background-color: transparent;
    color:cornflowerblue;
    margin-right: 30px;
    border-top: 2px solid cornflowerblue;
    border-right: 2px solid cornflowerblue;
    border-left:none;
    border-bottom: 2px solid cornflowerblue;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    width:30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
`;


export {
    HeaderDiv,
    HeaderWrap,
    HeaderText,
    HeaderInputWrap,
    HeaderInput,
    HeaderSearch,
};