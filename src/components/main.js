import {data}  from "../assets/data"
import ImageCard from "./imageCard"

function Main() {
    
    // function imageCards(data) {
    //   return(
    //     <div className="col-sm-3 city" key={data.id}>
    //     <h4>{data.title }</h4>
    //     <img className="image" src={data.image} alt={data.title} />
    //     <p className="hideText">{data.desc}</p>
    //   </div>
    //   )
    // }

    return(
    <div className='container'>
      <div className="row">
        {/* { data.map(item => imageCards (item) )} */}
        { data.map(item => <ImageCard data ={item} /> )}
      </div>
  </div>
  )
};

export default Main;


