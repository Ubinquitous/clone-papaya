import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import useDidMountEffect from '../../hooks/useDidMountEffect';
import { ErrorMessage, ErrorSubMessage, ErrorWrap } from '../../styles/DetailError';
import { DetailMainDiv, DetailSubDiv, DetailText, DetailWrap, Div, ImageDiv, ImageTag } from '../../styles/DetailMain';

const Artist = () => {
    const router = useRouter();
    const KEY = '';
    const [artistData, setArtistData] = useState();
    const [trackData, setTrackData] = useState([
        {
            name: ''
        },
        {
            name: ''
        },
        {
            name: ''
        }
    ]);
    const [dataObj, setDataObj]: any = useState({
        name: ''
    });
    const [isBoolean, setIsBoolean] = useState(true);
    const [image, setImage] = useState();

    const getSearchData = () => {
        const ARTIST_SEARCH_LINK = `http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${router.query.value}&api_key=502aca31cb330e8135b04d480caf6a56&format=json`;

        axios.get(ARTIST_SEARCH_LINK)
            .then((res) => {
                if (res.data.results.artistmatches.artist.length === 0) {
                    setIsBoolean(false)
                } else {
                    setArtistData(res.data.results.artistmatches.artist)
                    setDataObj(res.data.results.artistmatches.artist[0])
                    setIsBoolean(true)
                }

            });
        axios.get(`https://dapi.kakao.com/v2/search/image?query=${router.query.value}`, {
            headers: {
                'Authorization': `KakaoAK ${process.env.NEXT_PUBLIC_KAKAO_API_KEY}`
            }
        }).then((res) => {
            if (res.data.documents[0] === undefined) {
                setIsBoolean(false)
            } else {
                setImage(res.data.documents[0].image_url)
            }
        })
    };

    useDidMountEffect(() => {
        getSearchData();
    }, [router])

    useEffect(() => {
        const TRACK_SEARCH_LINK = `http://ws.audioscrobbler.com/2.0/?method=track.search&track=${router.query.value}&api_key=502aca31cb330e8135b04d480caf6a56&format=json`
        axios.get(TRACK_SEARCH_LINK)
            .then((res) => {
                setTrackData(res.data.results.trackmatches.track)
            });
        getSearchData()
    }, [router])

    return (
        <div>
            {!isBoolean ?
                <ErrorWrap>
                    <ErrorMessage>404 Not Found</ErrorMessage>
                    <ErrorSubMessage>검색 결과가 없습니다. 철자가 올바른지 확인해주세요.</ErrorSubMessage>
                </ErrorWrap>
                :
                <DetailWrap>
                    <DetailMainDiv>
                        <ImageDiv>
                            <ImageTag src={image} />
                        </ImageDiv>
                        <Div>
                            <DetailText style={{ fontSize: '24px', fontWeight: '700' }}>
                                {dataObj.name.length >= 12 ? `${dataObj.name.slice(0, 12)}...` : dataObj.name}
                            </DetailText>
                            <DetailText style={{ marginLeft: '1.2px' }}>
                                Listeners : {dataObj.listeners}
                            </DetailText>
                            <DetailText style={{ marginLeft: '1.2px', fontWeight: '700', fontSize: '16px', marginTop: '5px' }}>
                                Popular Song
                            </DetailText>
                            <DetailText>{trackData[0].name.length >= 37 ? `${trackData[0].name.slice(0, 37)}...` : trackData[0].name}</DetailText>
                            <DetailText>{trackData[1].name.length >= 37 ? `${trackData[1].name.slice(0, 37)}...` : trackData[1].name}</DetailText>
                            <DetailText>{trackData[2].name.length >= 37 ? `${trackData[2].name.slice(0, 37)}...` : trackData[2].name}</DetailText>
                        </Div>
                    </DetailMainDiv>
                    <DetailSubDiv>
                        <DetailText style={{ marginTop: '5px', fontSize: '24px', fontFamily: `'Pacifico', cursive` }}>More Song</DetailText>
                        <div style={{ width: '90%', height: '2px', backgroundColor: 'cornflowerblue', marginTop: '10px' }} />
                        <Div style={{ width: '92%' }}>
                            {trackData.slice(0, 13).map((data, index) => (
                                <DetailText key={index} style={{ fontSize: '16px' }}>{data.name.length >= 35 ? `${data.name.slice(0, 35)}...` : data.name}</DetailText>
                            ))}
                        </Div>
                    </DetailSubDiv>
                </DetailWrap>
            }
        </div >
    );
};

export default Artist;