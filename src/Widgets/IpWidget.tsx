import { useEffect, useRef } from "react";
import { Card, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { IpData } from "../interfaces/IpData";
import { loadIpData } from "../redux/Slices/IpSlice";
import { AppDispatch, RootState } from "../redux/store/store";

const IpWidget = () => {
  var shouldLog = useRef(true);
  const dispatch = useDispatch<AppDispatch>();
  const data = useSelector<RootState, IpData>((state) => state.ip.data);
  const AuthState = useSelector((state: RootState) => {
    return state.auth;
  });
  useEffect(() => {
    if (shouldLog.current) {
      shouldLog.current = false;
      dispatch(loadIpData());
    }
  }, [dispatch]);

  return (
    <Card className='bg-info' style={{ width: "18rem", height: "18rem" }}>
      <Card.Body>
        <Card.Title className='text-center'>Ip data</Card.Title>
        <Card.Subtitle className='text-center'>
          State: {data.country}{" "}
        </Card.Subtitle>
        <ListGroup variant='flush'>
          <ListGroup.Item className='bg-info text-white'>
            Region : {data.region}
          </ListGroup.Item>
          <ListGroup.Item className='bg-info text-white'>
            Region name: {data.regionName}
          </ListGroup.Item>
          <ListGroup.Item className='bg-info text-white'>
            City: {data.city}
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default IpWidget;
