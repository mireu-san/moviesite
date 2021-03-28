import { render } from "@testing-library/react";
import React from "react";
import TVPresenter from "./TVPresenter";
import { moviesApi, tvApi } from "api";

export default class extends React.Component{
  state = {
    topRated: null,
    popular: null,
    airingToday: null,
    loading: true,
    error: null
  };



  async componentDidMount() {
    try {
      const {
        data: {results:topRated}
      } = await tvApi.topRated();
      const {
        data: {results:popular}
      } = await tvApi.popular();
      const {
        data: {results:airingToday}
      } = await tvApi.airingToday();
      this.setState({topRated, popular, airingToday});
      this.setState({
        error: "Can't find TV information."
      })
    } finally {
      this.setState({loading: false});
    }
  }

  render() {
    const {topRated, popular, airingToday, loading, error} = this.state;
    console.log(this.state);
    return ( <TVPresenter 
      topRated={topRated}
      popular={popular}
      airingToday={airingToday}
      loading={loading}
      error={error}
    />
    );
  }
}