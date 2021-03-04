import React, {Component} from 'react'
import MovieCard from './MovieCard'
import {Modal} from 'react-bootstrap'
import {Button} from 'react-bootstrap'

class MovieList extends Component {
    constructor(props){
        super(props)
        this.state={
            isModalVisible:false,
        
        }
    }
    handleClose = () => {
        this.setState({ isModalVisible: false });
        return console.log("testclose")
      }
    
      handleShow= () => {
        this.setState({ isModalVisible: true });
        return console.log("test")
      }

      handelInputs= (e) => {
          this.setState({
              [e.target.name] : e.target.value
          })
          console.log(this.state)
      }
    render() {
        return (
            <div className="movies">
                {
                    this.props.movies.map((item, i)=>
                    <div key={i} className="moviesitems">
                        <MovieCard movie_item={item} remove={this.props.removeMovie} />
                    </div>
                    )
                }
                <button className=" newMovie" onClick={this.handleShow} >&#10012;</button>
                    <Modal show={this.state.isModalVisible} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Add a New Movie</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="addnewmovie">
                            <label>Link:</label> <input name="link" onChange={this.handelInputs}></input>
                            <label>Title:</label> <input name="title" onChange={this.handelInputs}></input>
                            <label>Descrption:</label> <input name="description" onChange={this.handelInputs}></input>
                            <label>Rate:</label> <input name="rate" onChange={this.handelInputs}></input>
                        </Modal.Body>
                        <Modal.Footer>
                        <Button onClick={() => this.props.addMovie(this.state)} >Save</Button>
                            <Button onClick={this.handleClose}>Close</Button>
                        </Modal.Footer>
                    </Modal>

            </div>
        )
    }
}
    

export default MovieList;