import { useEffect, useRef } from "react";
import { Card, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { IpData } from "../interfaces/IpData";
import { loadIpData } from "../redux/IpSlice";
import { AppDispatch, RootState } from "../redux/store";

const IpWidget = () => {
  var shouldLog = useRef(true);
  const dispatch = useDispatch<AppDispatch>();
  const data = useSelector<RootState, IpData>((state) => state.ip.data);
  useEffect(() => {
    if (shouldLog.current) {
      shouldLog.current = false;
      dispatch(loadIpData());
    }
  }, [dispatch]);

  return (
    <Card style={{ width: "18rem", height: "15rem" }}>
      <Card.Body>
        <Card.Title className="text-center">Ip data</Card.Title>
        <Card.Subtitle className="text-center">State: {data.country} </Card.Subtitle>
        <ListGroup variant='flush'>
          <ListGroup.Item>Region :  {data.region}</ListGroup.Item>
          <ListGroup.Item>Region name:  {data.regionName}</ListGroup.Item>
          <ListGroup.Item>City:  {data.city}</ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default IpWidget;
