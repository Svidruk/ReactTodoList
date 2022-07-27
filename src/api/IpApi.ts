import { IpHttpClient } from "../helper/httpClients";
import { IpApi } from "../configs/environment";
import { IpData } from "../interfaces/IpData";

export const fetchIpData = (): Promise<IpData> =>
   IpHttpClient.get(`${IpApi}`).then((resp) => {
    return resp.data;
});
