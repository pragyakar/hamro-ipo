import axios from "axios";
import handleApiError from "../utils/handleApiError";

export interface IAPIResponse {
  success: boolean;
  body: IActiveIPO[];
  message: string;
}

export interface IActiveIPO {
  id: number;
  name: string;
  scrip: string;
  isFileUploaded: boolean;
}

const dummyReponse = {
  success: true,
  message: "Dummy Company shares retrieved.",
  body: [
    { id: 1, name: "MAHILA LAGHUBITTA BITTIYA SANSTHA LTD.", scrip: "MLBSL", isFileUploaded: true },
    { id: 2, name: "Sunrise Bluechip Fund", scrip: "SBCF", isFileUploaded: true },
    { id: 3, name: "Jyoti Life Insurance Ltd", scrip: "JLIC", isFileUploaded: true },
    { id: 4, name: "NIBL Samriddhi Fund -2", scrip: "NIBLSFUND", isFileUploaded: true },
  ],
};

export const getActiveIPOs = async (): Promise<IActiveIPO[]> => {
  const url = "https://iporesult.cdsc.com.np/result/companyShares/fileUploaded";

  try {
    return dummyReponse.body;
    const { data } = await axios.get(url);
    return data.body;
  } catch (error) {
    handleApiError(error);
    throw new Error(error);
  }
};
