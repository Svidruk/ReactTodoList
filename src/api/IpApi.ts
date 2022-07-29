import { IpHttpClient } from "../helper/httpClients";
import { IpData } from "../interfaces/IpData";

export const fetchIpData = (): Promise<IpData> =>
   IpHttpClient.get(`${process.env.REACT_APP_IP_API}`).then((resp) => {
    return resp.data;
});
