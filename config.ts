import { IPeople } from "./services/checkResult";

interface IConfig {
  boids: IPeople[];
}

export const CONFIG: IConfig = {
  boids: JSON.parse(process.env.BOIDS || ''),
};
