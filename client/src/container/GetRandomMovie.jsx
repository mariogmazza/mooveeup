import React, { Component } from "react";
import axios from "axios";
import { Button, Dropdown } from "semantic-ui-react";
import MovieCard from "../components/MovieCard";

const decadeOptions = [
  {
    text:"2000+",
    value:"2000"
  },
  {
    text: "90's",
    value: "90"
  },
  {
    text:"80's",
    value:"80"
  },
  {
    text:"70's",
    value:"70"
  }
];  



const easyOnMeMode=(decade)=>{
  console.log("this is easyMode "+decade);
  let pages=1;
  let movieIndex=0;
  // if(decade === "2000"){
     pages = Math.floor((Math.random() * 3) + 1);
     movieIndex = Math.floor((Math.random() * 20) + 0);
     console.log("pages: "+pages+" movieIndex: "+movieIndex)
     return {pages, movieIndex}
  // }

}



class GetRandomMovie extends Component {

  state = {
    data: "",
    decade:{
      start:"1970-01-01",
      end:"1999-12-31",
    },
    pickedPage:40,

  };

  

  handleOnClick = () => {
    const {decade} = this.state
  const {pages, movieIndex} =  easyOnMeMode(decade.start.substring(0,4))
    console.log(movieIndex)
    this.setState({pickedPage:movieIndex})
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=b2ce9d552430f16ed8460e3dce54ba4e&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page="+pages+"&primary_release_date.gte=" +
          decade.start +
          "&primary_release_date.lte=" +
          decade.end +
          "&vote_average.gte=6&with_genres=878"
      )
      .then(res => {
        console.log(res.data.results);
        this.setState({ data: res.data.results });
      });
  };


  selectedDecade(val){
    const nowDate = new Date();
    let month = nowDate.getMonth();
    let day = nowDate.getDay();
    const year = nowDate.getFullYear();

    if(month<9){
      month = "0"+month;
    }

    if(day<9){
      day = "0"+day;
    }

    const presentDate = year+"-"+month+"-"+day
    console.log(presentDate);

    if(val==="90"){
      this.setState({decade:{start:"1990-01-01", end:"1999-12-31"}})
    }else if(val==="80"){
      this.setState({decade:{start:"1980-01-01", end:"1989-12-31"}})      
    }else if(val==="70"){
      this.setState({decade:{start:"1970-01-01", end:"1979-12-31"}})
    }else if(val==="2000"){
      this.setState({decade:{start:"2000-01-01", end:`${presentDate}`}})
    }

  }

  // start:"1990-01-01", end:"1999-12-31",movieInx:16}
  // {start:"1980-01-01", end:"1989-12-31",finalPage:18}
  // {start:"1970-01-01", end:"1979-12-31",finalPage:8}
  // {start:"2000-01-01", end:`${presentDate}`, finalPage:75}

  render() {
    const { data, pickedPage } = this.state;
    let thecard;

    if (data) {
      thecard = (
        <MovieCard
          imgPath={"http://image.tmdb.org/t/p/w500/" + data[pickedPage].poster_path}
          title={data[pickedPage].title}
          relDate={data[pickedPage].release_date}
          overview={data[pickedPage].overview}
        />
      );
    } else {
      thecard = "nothing";
    }

    return (
      <div>
        <Dropdown
          placeholder="Select a Decade"
          fluid
          selection
          options={decadeOptions}
          onChange={(e, { value }) => this.selectedDecade(value)}
        />
       
        {thecard}

         <Button
          primary
          onClick={this.handleOnClick}
          content={"Get Random Movie"}
        />
      </div>
    );
  }
}

export default GetRandomMovie;
