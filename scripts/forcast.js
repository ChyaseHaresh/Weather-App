const key= 'PGiLG1Bs3vOAkoZx37vdJ0sIKLsrC3Ji';

const getWeather= async(id)=>{
    const bases= "http://dataservice.accuweather.com/currentconditions/v1/";
    const query= `${id}?apikey=${key}`;
    const response= await fetch(bases+query);
    const data= await response.json();
    return data[0];

};



const getCity= async(city)=>{
    const base= "http://dataservice.accuweather.com/locations/v1/cities/search"
    const query= `?apikey=${key}&q=${city}`;
    const response= await fetch(base+query);
    const data= await response.json();
    return data[0];
};
