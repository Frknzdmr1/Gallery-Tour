import {data}  from "../assets/data"
function Main() {
    const dataSample = [{cityName:"New York", population: 244}, {cityName:"Boston", population: 244}, {cityName:"Philly", population: 244},{cityName: "Dallas", population: 244}]
    return(
<div className='container'>
 <div className="row">
   {
      data.map(item => {
        return (
          <div className="col-sm-3 city" key={item.id}>
            <img src={item.image} alt={item.title} />
            <p>{item.desc}</p>
          </div>
        ) 
      })
   }

 </div>
</div>
    )
};

export default Main;