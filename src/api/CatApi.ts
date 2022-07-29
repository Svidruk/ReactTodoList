import { CatHttpClient } from "../helper/httpClients";
import { CatData } from "../interfaces/CatData";

export const fetchCatData = (): Promise<CatData> =>
  CatHttpClient.get(`${process.env.REACT_APP_CAT_API}`).then((resp) => {
    return resp.data;
  });
