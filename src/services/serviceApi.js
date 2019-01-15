const Location ="Valencia,es";
const AppId="fa664417b1651ea73093ed81601bce69";
const EndPoint= `http://api.openweathermap.org/data/2.5/weather?q=${Location}&appid=${AppId}`;


class serviceApi{
    static async getData(){
        let result = await fetch(EndPoint)
        .then(data=>data.json())
            .then(weather_data=>weather_data);
         return result;
    }
}

export default serviceApi;