import { DataTypes } from "sequelize";

import { sequelize } from "@db";
import Articulo from "./Articulos";
import Etiquetas from "./Etiquetas";

const EtiquetasArticulos = sequelize.define("etiquetas_has_articulos", {
  articuloIdarticulo: {
    type: DataTypes.INTEGER,
    references: { model: Articulo, key: "idarticulo" },
  },
  etiquetaIdetiqueta: {
    type: DataTypes.INTEGER,
    references: { model: Etiquetas, key: "idetiqueta" },
  },
});

export default EtiquetasArticulos;
