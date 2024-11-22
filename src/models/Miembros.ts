import { sequelize } from "@db";
import { DataTypes, Model, type Optional } from "sequelize";

type UserAttributes = {
  idmiembro: number;
  nombre: string;
  apepat: string;
  apemat: string;
  puesto: string;
  gradoEstudio: string;
  resumen: string;
  imgPerfil: string;
  bio: string;
  colaborador: boolean;
  idUsuario: number;
  nombreCompleto: string;
};

// we're telling the Model that 'id' is optional
// when creating an instance of the model (such as using Model.create()).
interface UserCreationAttributes
  extends Optional<UserAttributes, "idmiembro"> {}

const Miembros = sequelize.define<
  Model<UserAttributes, UserCreationAttributes>
>("miembros", {
  idmiembro: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING(60),
    allowNull: false,
  },
  apepat: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  apemat: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  puesto: {
    type: DataTypes.ENUM(
      "profesora",
      "profesor",
      "profesora-investigadora",
      "profesor-investigador"
    ),
    allowNull: false,
  },
  gradoEstudio: {
    type: DataTypes.STRING(4),
    allowNull: false,
  },
  resumen: {
    type: DataTypes.TEXT("medium"),
    allowNull: false,
  },
  imgPerfil: {
    type: DataTypes.STRING(60),
    allowNull: false,
  },
  bio: {
    type: DataTypes.TEXT("medium"),
    allowNull: false,
  },
  colaborador: {
    type: DataTypes.BOOLEAN,
  },
  idUsuario: {
    type: DataTypes.INTEGER,
  },
  nombreCompleto: {
    type: DataTypes.VIRTUAL,
    get() {
      const { nombre, apemat, apepat } = this.dataValues;
      return `${nombre} ${apepat} ${apemat}`;
    },
  },
});

export default Miembros;
