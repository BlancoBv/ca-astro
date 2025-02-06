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
import Miembros from "./Miembros";
import Proyectos from "./Proyectos";
import ProyectosMiembros from "./ProyectosMiembros";
import Contactos from "./Contactos";
import Banners from "./Banners";
import Logs from "./Logs";
import Publicaciones from "./Publicaciones";
import PublicacionesMiembros from "./PublicacionesMiembros";
import YoutubeLinks from "./YoutubeLinks";

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

Publicaciones.belongsToMany(Miembros, {
  through: PublicacionesMiembros,
  foreignKey: "idpublicacion",
  as: "miembros_publicacion",
});
Miembros.belongsToMany(Publicaciones, {
  through: PublicacionesMiembros,
  foreignKey: "idmiembro",
  as: "publicaciones_miembro",
});

Miembros.belongsToMany(Proyectos, {
  through: ProyectosMiembros,
  foreignKey: "idmiembro",
  as: "proyectos_miembro",
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
  Publicaciones,
  PublicacionesMiembros,
  YoutubeLinks,
};
