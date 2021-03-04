import Rate from './Rate';
const MovieCard = (props) => {
    return (
      <div className="movieitem">
          <div className="rate"><Rate fullStarsnbr={props.movie_item.rate} minRateChange={() => {}}/></div>
          <img className="moviePic" src={props.movie_item.picture} alt=""/>
          <div className="description">
              <span className="title">{props.movie_item.title}</span>
              <p className="movieDescription">{props.movie_item.label}</p>
              <div className="remove-aria">
                  <button className="btnremove" bsSize="small" bsStyle="danger" onClick={() => props.remove(props.movie_item.title)}>Remove</button>
              </div>
          </div>
      </div>
    )

}

export default MovieCard;