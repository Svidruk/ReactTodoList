import { useEffect, useRef } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { CatData } from "../interfaces/CatData";
import { loadCatData } from "../redux/Slices/catSlice";
import { AppDispatch, RootState } from "../redux/store/store";

const CatWidget = () => {
  var shouldLog = useRef(true);
  const dispatch = useDispatch<AppDispatch>();
  const data = useSelector<RootState, CatData>((state) => state.cat.data);
  useEffect(() => {
    if (shouldLog.current) {
      shouldLog.current = false;
      dispatch(loadCatData());
    }
  }, [dispatch]);
 
  const getNewfact = () => dispatch(loadCatData())

  return (
    <Card className="bg-info text-center" style={{ width: "18rem", height: "18rem" }}>
      <Card.Body>
        <Card.Title>Cat Fact</Card.Title>
        <Card.Text>{data.fact}</Card.Text>
        <Button className="bottom" onClick={getNewfact}> get New Fact</Button>
      </Card.Body>
    </Card>
  );
};

export default CatWidget;
