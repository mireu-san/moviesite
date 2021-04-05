import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "Components/Loader";

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
`;



const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: 0;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  z-index: 1;
  height: 100%;
`;

const Cover = styled.div`
  width: 30%;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  height: 100%;
  border-radius: 5px;
  margin-left: 35px;
`;

const Data = styled.div`
  width: 70%;
  margin-left: 10px; 
`;

const Title = styled.h3`
  font-size: 32px;
  margin-bottom: 20px;
  margin-left: 20px;
`;

const ItemContainer = styled.span`
  margin: 20px 0;
  margin-left: 20px;
`;

const Item = styled.span``;

const Divider = styled.span`
  margin: 0 10px;
`;

const Overview = styled.p`
  font-size: 20px;
  opacity: 0.7;
  line-height: 1.5;  
  width: 50%;
  margin-left: 20px;
  margin-top: 20px;
`;


const TabVideoInfo = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  margin-bottom: 10px;
`;

const TabInfo = styled.span`
  font-size:14px;
  font-weight:700;
  flex:1;
  color:#fff;
  text-align:center;
  padding-bottom:8px;
  cursor:pointer;
  border-bottom:5px solid ${props => props.current ? "#8e44ad" : "transparent"};
  transition:border-bottom .5s ease-in-out;
`;


const trailerVideo = styled.div`
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  padding: 30px 0px 50px 0px;
  overflow: auto;
  &:after{
    content:'';
    position:absolute;
    width:10%;
    height:calc(100% - 80px);
    top: 30px;
    right: 0;
    background: linear-gradient(to right, transparent, #000);
  }
`;

const Video = styled.iframe`
  width: 30%;
  height: 30%;
  margin: 20px;
`;

const DetailPresenter = ({ result, loading, error, activeTab, arrTabName, clickHandler }) =>
  loading ? (
    <>
      <Helmet>
        <title>
          Now Loading... | Miflix
        </title>
      </Helmet>
    <Loader /> 
    </>
  ) : ( 
  <Container>
    <Helmet>
    <title>
      {result.original_title ? result.original_title : result.original_name}{" "} | Miflix
    </title>
    </Helmet>    
    <Backdrop 
      bgImage={`https://image.tmdb.org/t/p/original${result.poster_path}`}
    />
    <Content>
      <Cover
        bgImage={
          result.poster_path 
          ? `https://image.tmdb.org/t/p/original${result.poster_path}` 
          : require("../../assets/noPosterPaimon.jpg")
        }
      />
    <Data>
      <Title>
        {result.original_title 
          ? result.original_title 
          : result.original_name}
      </Title>
      <ItemContainer>
        <Item>
          {result.release_date
            ? result.release_date.substring(0, 4)
            : result.first_air_date.substring(0, 4)}
        </Item>
        <Divider>ㆍ</Divider>
        <Item>
          {result.runtime ? result.runtime : result.episode_run_time[0]} min
        </Item>
        
        <Divider>ㆍ</Divider>
        <Item>
          {result.genres &&
            result.genres.map((genre, index) => 
              index === result.genres.length - 1
                ? genre.name
                : `${genre.name} / `
            )}
        </Item>
      </ItemContainer>
      <Overview>{result.overview}</Overview>


            <trailerVideo>
              {
                result.videos.results && result.videos.results.length > 0 ?
                result.videos.results.map((result) => (
                  <trailerVideoItem key={result.id}>
                    <Video src={`https://www.youtube.com/embed/${result.key}`}/>
                  </trailerVideoItem>
                ) 
              ) : "There is no available Youtube Video."
            }
            </trailerVideo>
          )
        
    </Data>
  </Content>
</Container>
);

DetailPresenter.propTypes = {
  result: PropTypes.object,
  error: PropTypes.bool.isRequired,
  loading: PropTypes.string,
  arrTabName: PropTypes.array
};

export default DetailPresenter;