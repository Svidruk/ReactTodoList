import { CatHttpClient } from "../helper/httpClients";
import { CatApi } from "../configs/environment";
import { CatData } from "../interfaces/CatData";

export const fetchCatData = (): Promise<CatData> =>
  CatHttpClient.get(`${CatApi}`).then((resp) => {
    return resp.data;
  });
