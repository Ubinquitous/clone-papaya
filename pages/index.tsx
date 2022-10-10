import React, { PropsWithChildren, useEffect, useState } from 'react';
import SEO from '../components/SEO';
import axios from 'axios';
import { Chart, ChartBoxDiv, ChartBoxText, ChartBoxWrap, Charts, ChartSubText, ChartText, RankText } from '../styles/Chart';
import { Artist } from '../types/artist';
import { Track } from '../types/track';
import Link from 'next/link';

const App = () => {

  const [artist, setArtist] = useState([]);
  const [track, setTrack] = useState([]);
  const ARTIST_LINK = 'http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=502aca31cb330e8135b04d480caf6a56&format=json';
  const TRACK_LINK = 'http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=502aca31cb330e8135b04d480caf6a56&format=json';

  const getData = () => {
    axios.get(ARTIST_LINK).then((res) => {
      setArtist(res.data.artists.artist);
    });
    axios.get(TRACK_LINK).then((res) => {
      setTrack(res.data.tracks.track);
    });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className='app-wrap'>
      <SEO>HOME</SEO>
      <ChartBoxWrap>
        <ChartBoxDiv>
          <ChartBoxText>
            Top Artist Chart
          </ChartBoxText>
          <Charts>
            {artist.slice(0, 6).map((artist: Artist, index: number) => (
              <div key={index}
                style={{
                  backgroundColor: 'transparent',
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                <Chart>
                  <ChartText><Link href={`/detail/${artist.name}`}><a style={{ backgroundColor: 'transparent' }}>{artist.name}</a></Link><RankText>{index + 1}</RankText></ChartText>
                  <ChartSubText>Listeners : {artist.listeners}</ChartSubText>
                  <ChartSubText>PlayCount : {artist.playcount}</ChartSubText>
                </Chart>
              </div>
            ))}
          </Charts>
        </ChartBoxDiv>
        <ChartBoxDiv>
          <ChartBoxText>
            Top Track Chart
          </ChartBoxText>
          <Charts>
            {track.slice(0, 6).map((track: Track, index: number) => (
              <div key={index}
                style={{
                  backgroundColor: 'transparent',
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                <Chart>
                  <ChartText><Link href={`/detail/${track.artist.name}`}><a style={{ backgroundColor: 'transparent' }}>{track.name} - {track.artist.name}</a></Link><RankText>{index + 1}</RankText></ChartText>
                  <ChartSubText>Listeners : {track.listeners}</ChartSubText>
                  <ChartSubText>PlayCount : {track.playcount}</ChartSubText>
                </Chart>
              </div>
            ))}
          </Charts>
        </ChartBoxDiv>
      </ChartBoxWrap>
    </div>
  );
};

export default App;