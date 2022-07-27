import { useEffect, useRef } from "react";
import { Card, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { WeatherData } from "./interfaces/WeatherData";
import { loadIpData } from "./redux/Slices/IpSlice";
import { AppDispatch, RootState } from "./redux/store/store";

const WeatherWidget = () => {
  var shouldLog = useRef(true);
  const dispatch = useDispatch<AppDispatch>();
  const data = useSelector<RootState, WeatherData>((state) => state.weather.data);
  useEffect(() => {
    if (shouldLog.current) {
      shouldLog.current = false;
      dispatch(loadIpData());
    }
  }, [dispatch]);

  return (
    <Card style={{ width: "18rem", height: "18rem" }}>
      <Card.Body>
        <Card.Title className='text-center'>Weather</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default WeatherWidget;
