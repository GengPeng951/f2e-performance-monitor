import { readFileSync } from "fs";
import { join } from "path";

const sqlConfigStr = readFileSync(
  join(__dirname, "../local/sql.json"),
  "utf-8"
);

export interface DBConfig {
  type: string;
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
}

const config: DBConfig = JSON.parse(sqlConfigStr);
export default config;

// export const mysqlConfig = JSON.parse(sqlConfig.data) as IDBConfig;
