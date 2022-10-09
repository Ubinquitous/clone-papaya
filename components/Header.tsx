import React from 'react';
import { HeaderDiv, HeaderInput, HeaderInputWrap, HeaderSearch, HeaderText, HeaderWrap } from '../styles/Header';

const Header = () => {


    return (
        <HeaderWrap>
            <HeaderDiv>
                <HeaderText>Papaya music</HeaderText>
                <HeaderInputWrap>
                    <HeaderInput type='text' placeholder='Search your artist.' />
                    <HeaderSearch>
                        <picture style={{ backgroundColor: 'transparent' }}>
                            <img src='https://cdn-icons-png.flaticon.com/512/149/149852.png' alt=''
                                style={{
                                    width: '18px',
                                    height: '18px',
                                    backgroundColor: 'transparent'
                                }} />
                        </picture>
                    </HeaderSearch>
                </HeaderInputWrap>
            </HeaderDiv>
        </HeaderWrap>
    );
};

export default Header;