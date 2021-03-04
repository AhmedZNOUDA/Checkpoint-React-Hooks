const Rate = (props) =>{
    let stars=[]
    for (let i=0; i<5;i++){
        if (i<props.fullStarsnbr)
        stars.push( <span key={i} onClick={() =>props.minRateChange(i+1)}> &#9733;</span>)
        
        else 
        stars.push(<span key={i} onClick={() =>props.minRateChange(i+1)}> &#9734;</span>)
        }
    return (
        <div className="starsRate">
            {stars}
        </div>
    )
}
    export default Rate;