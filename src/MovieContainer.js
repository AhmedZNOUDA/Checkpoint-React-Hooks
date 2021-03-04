import React, {Component} from 'react'
import Header from './Header'
import MovieList from './MovieList';
import SearchWithName from './SearchWithName'
import SearchWithRate from './SearchWithRate';


const movieList = [ {
    picture:"https://img4.cdn.cinoche.com/images/591587145c8e772c64fa4847eba6cbf5.jpg",
    title:"Parasite",
    label: " 2h 12min | Thriller, Comedy | 30 May 2019 (South Korea) ",
    rate: 5
  },
  {
    picture:"https://www.themoviedb.org/t/p/original/uw6rLtSGDtXkFU3zPcjR3jx779F.jpg",
    title:"Alive",
    label: " 1h 39min | Drama , Thriller | 24 January 2020 (South Korea) ",
    rate: 3
  },
  {
    picture:"https://fr.web.img5.acsta.net/pictures/16/08/03/12/17/530666.jpg",
    title:"Train To Busan",
    label: "2h 1min | Action , Thriller, Horror | July 2016 (South Korea)  ",
    rate: 4
  },
  
  {
    picture:"https://media.senscritique.com/media/000019221067/source_big/Peninsula.jpg",
    title:"Peninsula",
    label: "1h 56min | Action , Thriller, Horror | 15 July 2020 (South Korea)  ",
    rate: 2
  },
]
const filterMovie = (movie, minRate, searchField) => {
    return (movie.rate >= minRate) && (movie.title.toLowerCase().trim().includes(searchField.toLowerCase()))
}

class MovieContainer extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            minRate:1,
            searchField:"",
            movieList:movieList
        };
    }
    changeTitle = (title) => {
        this.setState(
            { 
                searchField: title
            }
        )
    }
    changeMinRate= (newMinRate) => {
        this.setState(
            {
                minRate:newMinRate
            }
        )
    }
    addMovie = (newMovie = {}) => {
        this.setState(
            {
                movieList:this.state.movieList.concat(newMovie)
            }
        )
        console.log("MOVIE" , newMovie)
    }

    removeMovie = (movieToRemoveTitle) => {
        console.log(movieToRemoveTitle)
        this.setState(
          {
              movieList: this.state.movieList.filter(movie => movie.title!== movieToRemoveTitle)
            }
        )
    }
    render(){
        return (
            <div className>
                <Header/>
                <div className="container">

                    <div className="searchAria">
                        <SearchWithName  inputValue={this.state.searchField} inputChange={this.changeTitle}/>
                        <SearchWithRate rateValue={this.state.minRate} minRateChange={(newMinRate) =>this.changeMinRate(newMinRate)}/>
                    </div>
                    <div className="col moviesGallery">
                        <MovieList  movies=
                            {
                                this.state.movieList.filter(movie => filterMovie(movie, this.state.minRate, this.state.searchField))
                            }
                            addMovie={this.addMovie}
                            removeMovie={this.removeMovie} 
                        />
                    </div>                   
                </div>
            </div>
        )
    }
} 

export default MovieContainer;