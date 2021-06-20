import axios from "axios";
import handleApiError from "../utils/handleApiError";

export interface IPeople {
  id: string;
  name: string;
}

export interface IResult {
  name: string;
  boid: string;
  result: boolean;
}

const dummyResult = [
  { name: 'Pragyakar', boid: '1301390000058519', result: true },
  { name: 'Shradha', boid: '1301390000058504', result: false }
]

export const checkResult = async (companyShareId: string | string[], peopleList: IPeople[]) => {
  const url = "https://iporesult.cdsc.com.np/result/result/check";
  
  try {
    let ipoResult: IResult[] = [];
    const promises: any = [];
    peopleList.forEach((people) => {
      promises.push(axios.post(url, { companyShareId, boid: people.id }))
    });
    
    await axios.all(promises).then((res) => {
      res.map((response: any) => {
        const reqData = JSON.parse(response.config.data);
        const resData = response.data;
        const boid = reqData.boid;
        const match = peopleList.find((people) => people.id === boid);

        ipoResult.push({
          name: match ? match.name : '',
          boid: boid,
          result: resData.success,
        });
      });
    });
    return ipoResult;
    return dummyResult;
  } catch (error) {
    handleApiError(error);
    throw new Error(error);
  }
}