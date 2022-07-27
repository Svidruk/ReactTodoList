import { dogHttpClient } from "../helper/httpClients";
import { DogApiUrl } from "../configs/environment";
import { DogData } from "../interfaces/DogData";

export const fetchDogData = (): Promise<DogData> =>
  dogHttpClient.get(`${DogApiUrl}`).then((resp) => {
    return resp.data;
  });
