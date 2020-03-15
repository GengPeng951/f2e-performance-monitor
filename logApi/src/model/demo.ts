import { Model, DataTypes } from "sequelize";
import sequelize from "../utils/mysql";

class Demo extends Model {
  public id!: number;
  public name!: string;
}

Demo.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: new DataTypes.STRING(25),
      allowNull: false
    }
  },
  {
    tableName: "performance-date",
    timestamps: true,
    modelName: "performanceDate",
    sequelize: sequelize // this bit is important
  }
);

export default name;
