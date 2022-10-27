function Main() {
    const data = [{cityName:"New York", population: 244}, {cityName:"Boston", population: 244}, {cityName:"Philly", population: 244},{cityName: "Dallas", population: 244}]
    return(
        <ul>
         { data.map(city=> <li className="listItems">{city.cityName} - {city.population}</li> )}
        </ul>
    )
};

export default Main;