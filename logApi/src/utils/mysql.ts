import { Sequelize } from "sequelize";
import mysqlConfig from "../mysqlConfig";
import { isProductionDeploy } from "../env";

const sequelize = new Sequelize({
  host: mysqlConfig.host,
  dialect: "mysql",
  logging: sql => {
    if (!isProductionDeploy()) {
    }
  }
});

export default sequelize;
