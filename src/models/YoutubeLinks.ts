import { sequelize } from "@db";
import {
  DataTypes,
  Model,
  type CreationOptional,
  type ForeignKey,
  type InferAttributes,
  type InferCreationAttributes,
} from "sequelize";

interface YoutubeLinksModel
  extends Model<
    InferAttributes<YoutubeLinksModel>,
    InferCreationAttributes<YoutubeLinksModel>
  > {
  id: CreationOptional<number>;
  url: string;
  visible: boolean;
  createdAt: CreationOptional<Date>;
  updatedAt: CreationOptional<Date>;
}
const YoutubeLinks = sequelize.define<YoutubeLinksModel>("youtubeLinks", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  url: { type: DataTypes.STRING(100), allowNull: false },
  visible: { type: DataTypes.BOOLEAN, allowNull: false },
  createdAt: {
    type: DataTypes.DATE,
  },
  updatedAt: {
    type: DataTypes.DATE,
  },
});

export default YoutubeLinks;
