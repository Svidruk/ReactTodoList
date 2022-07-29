import { dogHttpClient } from "../helper/httpClients";
import { DogData } from "../interfaces/DogData";

export const fetchDogData = (): Promise<DogData> =>
  dogHttpClient.get(`${process.env.REACT_APP_DOG_API}`).then((resp) => {
    return resp.data;
  });
