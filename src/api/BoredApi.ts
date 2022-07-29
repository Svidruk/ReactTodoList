import { BoredHttpClient } from "../helper/httpClients";
import { BoredData } from "../interfaces/BoredData";

export const fetchBoredData = (): Promise<BoredData> =>
  BoredHttpClient.get(`${process.env.REACT_APP_BORED_API}`).then((resp) => {
    return resp.data;
  });
