import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import Section from "../../Components/Section";
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";

const Container = styled.div`
  padding: 0px 20px;  
`;

const HomePresenter = ({nowPlaying, upcoming, popular, loading, error}) => 
  loading ? (
  <Loader />
  ) : (
    <Container>
      {nowPlaying && nowPlaying.length > 0 && (
        <Section title="Now Playing">
          {nowPlaying.map(movie => <span key={movie.id}>{movie.title}</span>)}
        </Section>
      )}
      {upcoming && upcoming.length > 0 && (
        <Section title="Upcoming Movie">
          {upcoming.map(movie => <span key={movie.id}>{movie.title}</span>)}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="Popular Movie">
          {popular.map(movie => <span key={movie.id}>{movie.title}</span>)}
        </Section>
      )}
      {error && <Message color="#e74c3c" text={error} />}
    </Container>
  );

HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  popular: PropTypes.array,
  upcoming: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default HomePresenter;