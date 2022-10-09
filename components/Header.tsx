import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useCallback, useState } from 'react';
import { HeaderDiv, HeaderInput, HeaderInputWrap, HeaderSearch, HeaderText, HeaderWrap } from '../styles/Header';

const Header = () => {
    const [artist, setArtist] = useState('');
    const router = useRouter();

    const onSubmit = useCallback((e: React.FormEvent) => {
        e.preventDefault();
    }, []);

    const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setArtist(e.target.value);
    }, []);

    const onSearchClick = () => {
        router.push(`/detail/${artist}`)
        setArtist('');
    }

    return (
        <HeaderWrap>
            <HeaderDiv>
                <HeaderText><Link href='/'><a style={{ backgroundColor: 'transparent' }}>Papaya music</a></Link></HeaderText>
                <HeaderInputWrap onSubmit={onSubmit}>
                    <HeaderInput onChange={onChange} type='text' placeholder='Search your artist.' value={artist} />
                    <HeaderSearch onClick={onSearchClick}>
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