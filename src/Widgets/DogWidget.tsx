import { useEffect, useRef } from "react";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { DogData } from "../interfaces/DogData";
import { loadDogData } from "../redux/Slices/dogSlice";
import { AppDispatch, RootState } from "../redux/store/store";

const DogWidget = () => {
  var shouldLog = useRef(true);
  const dispatch = useDispatch<AppDispatch>();
  const data = useSelector<RootState, DogData>((state) => state.dog.data);
  useEffect(() => {
    if (shouldLog.current) {
      shouldLog.current = false;
      dispatch(loadDogData());
    }
  }, [dispatch]);

  return (
    <Card style={{ width: "18rem", height: "18rem" }}>
      <Card.Img
        style={{ width: "18rem", height: "17.5rem" }}
        variant='top'
        src={data.message}
      />
    </Card>
  );
};

export default DogWidget;
