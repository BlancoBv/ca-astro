import { sequelize } from "@db";
import {
  DataTypes,
  Model,
  type CreationOptional,
  type ForeignKey,
  type InferAttributes,
  type InferCreationAttributes,
} from "sequelize";

/* class Logs extends Model<
  InferAttributes<LogsModel>,
  InferCreationAttributes<LogsModel>
> {
  declare idlog: number;
  declare ruta: string;
  declare method: string;
  declare status: string;
  declare idUsuario: ForeignKey<number>;
} */

interface LogsModel
  extends Model<
    InferAttributes<LogsModel>,
    InferCreationAttributes<LogsModel>
  > {
  idlog: CreationOptional<number>;
  ruta: string;
  method: string;
  status: string;
  idUsuario: ForeignKey<number | null>;
  createdAt: CreationOptional<Date>;
  updatedAt: CreationOptional<Date>;
}
const Logs = sequelize.define<LogsModel>("logs", {
  idlog: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  ruta: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  method: {
    type: DataTypes.STRING(7),
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING(3),
    allowNull: false,
  },
  idUsuario: {
    type: DataTypes.INTEGER,
  },
  createdAt: {
    type: DataTypes.DATE,
  },
  updatedAt: {
    type: DataTypes.DATE,
  },
});

export default Logs;
