import { sequelize } from "@db";
import { DataTypes, Model } from "sequelize";
import bcrypt from "bcrypt";

interface user extends Model {
  password: string;
  usuario: string;
  nombres: string;
  apepat: string;
  apemat: string;
  id: string;
}

const Users = sequelize.define(
  "usuarios",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    usuario: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    nombres: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    apepat: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    apemat: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },
    idRol: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    nombreCompleto: {
      type: DataTypes.VIRTUAL,
      get() {
        const { nombres, apemat, apepat } = this;
        return `${nombres} ${apepat} ${apemat}`;
      },
    },
  },
  {
    hooks: {
      beforeCreate: async (user: user) => {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
      },
      beforeUpdate: async (user: user) => {
        if (user.changed("password")) {
          const salt = await bcrypt.genSalt(10);
          user.password = await bcrypt.hash(user.password, salt);
        }
      },
    },
  }
);

export default Users;
