import { IPeople } from "./services/checkResult";

interface IConfig {
  boids: IPeople[];
  user: string;
  pass: string;
  requireLogin: boolean;
}

const CONFIG: IConfig = {
  boids: process.env.NEXT_PUBLIC_BOIDS ? JSON.parse(process.env.NEXT_PUBLIC_BOIDS) : [],
  user: process.env.NEXT_PUBLIC_USERN || '',
  pass: process.env.NEXT_PUBLIC_PASSW || '',
  requireLogin: !!process.env.NEXT_PUBLIC_REQUIRE_LOGIN,
};


export default CONFIG;