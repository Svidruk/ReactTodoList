import { useEffect, useRef } from "react";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { WeatherData } from "../interfaces/WeatherData";
import { loadWeatherData } from "../redux/Slices/weatherSlice";
import { AppDispatch, RootState } from "../redux/store/store";

const WeatherWidget = () => {
  var shouldLog = useRef(true);
  const dispatch = useDispatch<AppDispatch>();
  const data = useSelector<RootState, WeatherData>(
    (state) => state.weather.data
  );

  useEffect(() => {
    if (shouldLog.current) {
      shouldLog.current = false;
      dispatch(loadWeatherData());
    }
  }, [dispatch]);

  //const dateTime = new Date(data.dt * 1000);

  return (
    <Card style={{ width: "38.2rem", height: "11rem" }}>
      <Card.Body>
        <Card.Title className='text-center text-dark'>
          Weather in {data.name}
        </Card.Title>
        <div className='row'>
          <div className='col'>
            <Card.Img
              style={{ width: "3rem", height: "3rem" }}
              variant='top'
              src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
              className='rounded-5 bg-info ms-1'
            />
            <Card.Text className='text-dark'>
              {data.weather[0].description}
            </Card.Text>
            {/*<Card.Text className='text-dark'>{dateTime.getHours()}</Card.Text>*/}
          </div>
          <div className='col text-dark'>
            <Card.Text>Wind m/s: {data.wind.speed}</Card.Text>
            <Card.Text>Gust m/s: {data.wind.gust}</Card.Text>
            <Card.Text>
              <svg
                width='16'
                height='16'
                fill='currentColor'
                style={{ transform: `rotate(${data.wind.deg.toString()}deg)` }}
                className='bi bi-arrow-up rounded-5'
                viewBox='0 0 16 16'>
                <path
                  fillRule='evenodd'
                  d='M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z'
                />
              </svg>
              direction
            </Card.Text>
          </div>
          <div className='col text-dark'>
            <Card.Text>
              Temparature: {(data.main.temp - 273.15).toFixed(1)} °C
            </Card.Text>
            <Card.Text>Humidity: {data.main.humidity} %</Card.Text>
            <Card.Text>Pressure: {data.main.pressure} mm</Card.Text>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default WeatherWidget;
