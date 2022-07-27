import { BoredHttpClient } from "../helper/httpClients";
import { BoredApi } from "../configs/environment";
import { BoredData } from "../interfaces/BoredData";

export const fetchBoredData = (): Promise<BoredData> =>
  BoredHttpClient.get(`${BoredApi}`).then((resp) => {
    return resp.data;
  });
