import { DataTypes } from "sequelize";
import { sequelize } from "@db";
import Etiquetas from "./Etiquetas";
import Blog from "./Blogs";

const EtiquetasBlogs = sequelize.define("etiquetas_blogs", {
  idblog: {
    type: DataTypes.INTEGER,
    references: { model: Blog, key: "idblog" },
  },
  idetiqueta: {
    type: DataTypes.INTEGER,
    references: { model: Etiquetas, key: "idetiqueta" },
  },
});

export default EtiquetasBlogs;
