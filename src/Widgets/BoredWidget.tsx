import { useEffect, useRef } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { BoredData } from "../interfaces/BoredData";
import { loadBoredData } from "../redux/Slices/boredSlice";
import { AppDispatch, RootState } from "../redux/store/store";

const BoredWidget = () => {
  var shouldLog = useRef(true);
  const dispatch = useDispatch<AppDispatch>();
  const data = useSelector<RootState, BoredData>((state) => state.bored.data);
  useEffect(() => {
    if (shouldLog.current) {
      shouldLog.current = false;
      dispatch(loadBoredData());
    }
  }, [dispatch]);

  return (
    <Card className='bg-info' style={{ width: "18rem", height: "18rem" }}>
      <Card.Body>
        <Card.Title className='text-center'>{data.type.toLocaleUpperCase()}</Card.Title>
        <Card.Text className='text-center'>Activity: {data.activity}</Card.Text>
        <Card.Text>Participants: {data.participants}</Card.Text>
        <Card.Text>Price: {data.price}</Card.Text>
        <Card.Text>Accessibility Rate: {data.accessibility}</Card.Text>
        {data.link !== "" && <Button href={data.link}>Useful Link</Button>}
      </Card.Body>
    </Card>
  );
};

export default BoredWidget;
