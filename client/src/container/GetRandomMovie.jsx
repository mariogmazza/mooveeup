import React, { Component } from "react";
import axios from "axios";
import { Button } from "semantic-ui-react";
import MovieCard from "../components/MovieCard";

export default class GetRandomMovie extends Component {
  state = {
    data: ''
  };

  componentDidMount() {
    // axios.get("https://api.themoviedb.org/3/discover/movie?api_key=b2ce9d552430f16ed8460e3dce54ba4e&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=1990-01-01&primary_release_date.lte=1999-12-31&vote_average.gte=6&with_genres=878").then(res=>{
    //     console.log(res)
    //     this.setState({data:res.results})
    // })  // axios.get("https://api.themoviedb.org/3/discover/movie?api_key=b2ce9d552430f16ed8460e3dce54ba4e&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=1990-01-01&primary_release_date.lte=1999-12-31&vote_average.gte=6&with_genres=878").then(res=>{
    //     console.log(res)
    //     this.setState({data:res.results})
    // })
  }

  handleOnClick = () => {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=b2ce9d552430f16ed8460e3dce54ba4e&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=1990-01-01&primary_release_date.lte=1999-12-31&vote_average.gte=6&with_genres=878"
      )
      .then(res => {
        console.log(res.data.results);
        this.setState({ data: res.data.results });
      });
  };
  render() {
    const { data } = this.state;
    let thecard;

    if (data) {
       thecard =  <MovieCard
          imgPath={"http://image.tmdb.org/t/p/w500/" + data[0].poster_path}
          title={data[0].title}
          relDate={data[0].release_date}
          overview={data[0].overview}
        />
    } else {
       thecard = "nothing";
    }

    return (
      <div>
        <Button onClick={this.handleOnClick} content={"Get Random Movie"} />
        {thecard}
      </div>
    );
  }
}
