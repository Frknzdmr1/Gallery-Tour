function imageCards(props) {
     return(
        <div className="col-sm-3 city" key={props.data.id}>
        <h4>{props.data.title }</h4>
        <img className="image" src={props.data.image} alt={props.data.title} />
        <p className="hideText">{props.data.desc}</p>
        </div>
        )
      }
export default ImageCard;