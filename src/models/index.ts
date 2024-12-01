import Articulo from "./Articulos";
import Etiquetas from "./Etiquetas";
import EtiquetasArticulos from "./EtiquetasArticulos";
import EtiquetasBlogs from "./EtiquetasBlogs";
import Menus from "./Menus";
import Permisos from "./Permisos";
import Roles from "./Roles";
import RolesPermisos from "./RolesPermisos";
import Submenus from "./Submenus";
import Users from "./User";
import Blog from "./Blogs";
import Proyectos from "./Proyectos";
import ProyectosMiembros from "./ProyectosMiembros";
import Miembros from "./Miembros";
import Contactos from "./Contactos";
import Banners from "./Banners";
import Logs from "./Logs";

Roles.belongsToMany(Permisos, {
  through: RolesPermisos,
  foreignKey: "idrol",
});
Permisos.belongsToMany(Roles, {
  through: RolesPermisos,
  foreignKey: "idpermiso",
});

Articulo.belongsToMany(Etiquetas, {
  through: EtiquetasArticulos,
  foreignKey: "articuloIdarticulo",
});
Etiquetas.belongsToMany(Articulo, {
  through: EtiquetasArticulos,
  foreignKey: "etiquetaIdetiqueta",
});

Menus.hasMany(Submenus, { foreignKey: "idmenu" });
Submenus.belongsTo(Menus, { foreignKey: "idmenu" });

Users.hasOne(Menus, { foreignKey: "idUsuario" });
Menus.belongsTo(Users, { foreignKey: "idUsuario" });

Users.hasMany(Logs, { foreignKey: "idUsuario" });
Logs.belongsTo(Users, { foreignKey: "idUsuario" });

Blog.belongsToMany(Etiquetas, {
  through: EtiquetasBlogs,
  foreignKey: "idblog",
});
Etiquetas.belongsToMany(Blog, {
  through: EtiquetasBlogs,
  foreignKey: "idetiqueta",
});

Proyectos.belongsTo(Miembros, {
  foreignKey: "director",
  as: "director_proyecto",
});

Miembros.belongsToMany(Proyectos, {
  through: ProyectosMiembros,
  foreignKey: "idmiembro",
  as: "proyectos_miembros",
});
Proyectos.belongsToMany(Miembros, {
  through: ProyectosMiembros,
  foreignKey: "idproyecto",
  as: "miembros_proyecto",
});

Miembros.hasMany(Contactos, { foreignKey: "idmiembro" });
Contactos.belongsTo(Miembros, { foreignKey: "idmiembro" });

export {
  Articulo,
  Etiquetas,
  EtiquetasArticulos,
  EtiquetasBlogs,
  Menus,
  Permisos,
  Roles,
  RolesPermisos,
  Submenus,
  Users,
  Blog,
  Proyectos,
  ProyectosMiembros,
  Miembros,
  Contactos,
  Banners,
  Logs,
};
