import { Sequelize, DataTypes } from 'sequelize';
import bcrypt from 'bcrypt';

const { PASSWORD_DB, DATABASE, USER_DB, PORT_DB, HOST_DB } = process.env;
const sequelize = new Sequelize(DATABASE, USER_DB, PASSWORD_DB, {
  host: HOST_DB,
  dialect: "mysql",
  port: PORT_DB,
  pool: {
    max: 5,
    min: 0,
    acquire: 3e4,
    idle: 1e4
  },
  logging: false
});
sequelize.authenticate().then(() => console.log("Conectado a la base de datos")).catch((err) => console.log("Error", err));

const Articulo = sequelize.define("articulos", {
  idarticulo: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  titulo: {
    type: DataTypes.STRING(60),
    allowNull: false
  },
  fecha: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  contenido: {
    type: DataTypes.TEXT("long"),
    allowNull: false
  },
  idUsuario: { type: DataTypes.INTEGER, allowNull: true },
  ruta: {
    type: DataTypes.STRING(60),
    allowNull: true
  }
});

const Etiquetas = sequelize.define("etiquetas", {
  idetiqueta: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  idUsuario: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
});

const EtiquetasArticulos = sequelize.define("etiquetas_has_articulos", {
  articuloIdarticulo: {
    type: DataTypes.INTEGER,
    references: { model: Articulo, key: "idarticulo" }
  },
  etiquetaIdetiqueta: {
    type: DataTypes.INTEGER,
    references: { model: Etiquetas, key: "idetiqueta" }
  }
});

const Blog = sequelize.define("blogs", {
  idblog: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  titulo: {
    type: DataTypes.STRING(60),
    allowNull: false
  },
  fecha: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  contenido: {
    type: DataTypes.TEXT("long"),
    allowNull: false
  },
  estatus: {
    type: DataTypes.ENUM("aceptado", "rechazado", "pendiente"),
    allowNull: false,
    defaultValue: "pendiente"
  },
  imagen: { type: DataTypes.STRING(60), allowNull: false },
  usuarios_id: { type: DataTypes.INTEGER, allowNull: true },
  fechavigente: {
    type: DataTypes.DATE,
    allowNull: false
  }
});

const EtiquetasBlogs = sequelize.define("etiquetas_blogs", {
  idblog: {
    type: DataTypes.INTEGER,
    references: { model: Blog, key: "idblog" }
  },
  idetiqueta: {
    type: DataTypes.INTEGER,
    references: { model: Etiquetas, key: "idetiqueta" }
  }
});

const Menus = sequelize.define("menus", {
  idmenu: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  show: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true
  },
  dropcollapse: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  nombre: {
    type: DataTypes.STRING(60),
    allowNull: false
  },
  descripcion: {
    type: DataTypes.TEXT("tiny"),
    allowNull: false
  },
  ruta: {
    type: DataTypes.STRING(60),
    allowNull: false
  },
  idUsuario: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
});

const Permisos = sequelize.define("permisos", {
  idpermiso: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING(60),
    allowNull: false
  },
  tipo: {
    type: DataTypes.ENUM("r", "w", "d", "u"),
    allowNull: false
  },
  descripcion: {
    type: DataTypes.STRING(255),
    //cambiarlo
    allowNull: false
  }
});

const Roles = sequelize.define("roles", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING(45),
    allowNull: false
  }
});

const RolesPermisos = sequelize.define("roles_has_permisos", {
  idrol: { type: DataTypes.INTEGER, references: { model: Roles, key: "id" } },
  idpermiso: {
    type: DataTypes.INTEGER,
    references: { model: Permisos, key: "idpermiso" }
  }
});

const Submenus = sequelize.define("submenus", {
  idsubmenu: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  idmenu: { type: DataTypes.INTEGER, allowNull: false },
  show: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true
  },
  nombre: {
    type: DataTypes.STRING(60),
    allowNull: false
  },
  descripcion: {
    type: DataTypes.TEXT("tiny"),
    allowNull: false
  },
  ruta: {
    type: DataTypes.STRING(60),
    allowNull: false
  }
});

const Users = sequelize.define(
  "usuarios",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    usuario: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    nombres: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    apepat: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    apemat: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    idRol: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    nombreCompleto: {
      type: DataTypes.VIRTUAL,
      get() {
        const { nombres, apemat, apepat } = this;
        return `${nombres} ${apepat} ${apemat}`;
      }
    }
  },
  {
    hooks: {
      beforeCreate: async (user) => {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
      },
      beforeUpdate: async (user) => {
        if (user.changed("password")) {
          const salt = await bcrypt.genSalt(10);
          user.password = await bcrypt.hash(user.password, salt);
        }
      }
    }
  }
);

const Miembros = sequelize.define("miembros", {
  idmiembro: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING(60),
    allowNull: false
  },
  apepat: {
    type: DataTypes.STRING(45),
    allowNull: false
  },
  apemat: {
    type: DataTypes.STRING(45),
    allowNull: false
  },
  puesto: {
    type: DataTypes.ENUM(
      "profesora",
      "profesor",
      "profesora-investigadora",
      "profesor-investigador"
    ),
    allowNull: false
  },
  gradoEstudio: {
    type: DataTypes.STRING(4),
    allowNull: false
  },
  resumen: {
    type: DataTypes.TEXT("medium"),
    allowNull: false
  },
  imgPerfil: {
    type: DataTypes.STRING(60),
    allowNull: false
  },
  bio: {
    type: DataTypes.TEXT("medium"),
    allowNull: false
  },
  colaborador: {
    type: DataTypes.BOOLEAN
  },
  idUsuario: {
    type: DataTypes.INTEGER
  },
  tipoMiembro: {
    type: DataTypes.ENUM("lider", "miembro"),
    allowNull: false
  },
  nombreCompleto: {
    type: DataTypes.VIRTUAL,
    get() {
      const { nombre, apemat, apepat } = this.dataValues;
      return `${nombre} ${apepat} ${apemat}`;
    }
  }
});

const Proyectos = sequelize.define(
  "proyectos",
  {
    idproyecto: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    clave: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    titulo: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fechaInicio: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    fechaTermino: {
      type: DataTypes.DATEONLY
    },
    estatus: {
      type: DataTypes.ENUM("finalizado", "no finalizado", "en proceso"),
      allowNull: false
    },
    tipo: {
      type: DataTypes.ENUM("interno", "externo"),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.TEXT("medium")
    },
    url: {
      type: DataTypes.STRING(60)
    },
    otrosColaboradores: {
      type: DataTypes.STRING(100)
    },
    director: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    monto: {
      type: DataTypes.DECIMAL(12, 2)
    },
    fechaInicioEntrega: {
      type: DataTypes.DATE
    },
    fechaTerminoEntrega: {
      type: DataTypes.DATE
    },
    convocatoria: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    visible: {
      type: DataTypes.BOOLEAN(),
      allowNull: false
    }
  }
  /*   {
      hooks: {
        afterFind(instancesOrInstance, options) {
          console.log(instancesOrInstance);
  
          instancesOrInstance.forEach((el) => {
            el.dataValues.fechaInicio = formatDate(el.dataValues.fechaInicio, "LL");
          });
        },
      },
    } */
);

const ProyectosMiembros = sequelize.define(
  "proyectos_has_miembros",
  {
    idproyecto: {
      type: DataTypes.INTEGER,
      references: {
        model: Proyectos,
        key: "idproyecto"
      }
    },
    idmiembro: {
      type: DataTypes.INTEGER,
      references: {
        model: Miembros,
        key: "idmiembro"
      }
    }
  },
  { timestamps: false }
);

const Contactos = sequelize.define("contactos", {
  idcontacto: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  tipo: {
    type: DataTypes.ENUM("facebook", "x", "correo", "linkedin", "otro"),
    allowNull: false
  },
  url: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  idmiembro: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

const Banners = sequelize.define("banners", {
  idbanner: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  descripcion: {
    type: DataTypes.STRING(100)
  },
  imagen: { type: DataTypes.STRING(100), allowNull: false },
  mostrar: { type: DataTypes.BOOLEAN, allowNull: false },
  url: { type: DataTypes.STRING(100) },
  idUsuario: {
    type: DataTypes.INTEGER
  }
});

const Logs = sequelize.define("logs", {
  idlog: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  ruta: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  method: {
    type: DataTypes.STRING(7),
    allowNull: false
  },
  status: {
    type: DataTypes.STRING(3),
    allowNull: false
  },
  idUsuario: {
    type: DataTypes.INTEGER
  }
});

const Publicaciones = sequelize.define("publicaciones", {
  idpublicacion: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  ISSN: {
    type: DataTypes.STRING(60),
    allowNull: false
  },
  titulo: {
    type: DataTypes.STRING(250),
    allowNull: false
  },
  tipo: {
    type: DataTypes.ENUM("arbitrado", "memoria en extenso "),
    allowNull: false
  },
  descripcion: {
    type: DataTypes.TEXT("medium")
  },
  url: {
    type: DataTypes.STRING(100)
  },
  otrosAutores: {
    type: DataTypes.STRING(100)
  },
  year: {
    type: DataTypes.STRING(4)
  },
  visible: {
    type: DataTypes.BOOLEAN(),
    allowNull: false
  }
});

const PublicacionesMiembros = sequelize.define(
  "publicaciones_has_miembros",
  {
    idpublicacion: {
      type: DataTypes.INTEGER,
      references: {
        model: Publicaciones,
        key: "idpublicacion"
      }
    },
    idmiembro: {
      type: DataTypes.INTEGER,
      references: {
        model: Miembros,
        key: "idmiembro"
      }
    }
  },
  { timestamps: false }
);

Roles.belongsToMany(Permisos, {
  through: RolesPermisos,
  foreignKey: "idrol"
});
Permisos.belongsToMany(Roles, {
  through: RolesPermisos,
  foreignKey: "idpermiso"
});
Articulo.belongsToMany(Etiquetas, {
  through: EtiquetasArticulos,
  foreignKey: "articuloIdarticulo"
});
Etiquetas.belongsToMany(Articulo, {
  through: EtiquetasArticulos,
  foreignKey: "etiquetaIdetiqueta"
});
Menus.hasMany(Submenus, { foreignKey: "idmenu" });
Submenus.belongsTo(Menus, { foreignKey: "idmenu" });
Users.hasOne(Menus, { foreignKey: "idUsuario" });
Menus.belongsTo(Users, { foreignKey: "idUsuario" });
Users.hasMany(Logs, { foreignKey: "idUsuario" });
Logs.belongsTo(Users, { foreignKey: "idUsuario" });
Blog.belongsToMany(Etiquetas, {
  through: EtiquetasBlogs,
  foreignKey: "idblog"
});
Etiquetas.belongsToMany(Blog, {
  through: EtiquetasBlogs,
  foreignKey: "idetiqueta"
});
Proyectos.belongsTo(Miembros, {
  foreignKey: "director",
  as: "director_proyecto"
});
Publicaciones.belongsToMany(Miembros, {
  through: PublicacionesMiembros,
  foreignKey: "idpublicacion",
  as: "miembros_publicacion"
});
Miembros.belongsToMany(Publicaciones, {
  through: PublicacionesMiembros,
  foreignKey: "idmiembro",
  as: "publicaciones_miembro"
});
Miembros.belongsToMany(Proyectos, {
  through: ProyectosMiembros,
  foreignKey: "idmiembro",
  as: "proyectos_miembro"
});
Proyectos.belongsToMany(Miembros, {
  through: ProyectosMiembros,
  foreignKey: "idproyecto",
  as: "miembros_proyecto"
});
Miembros.hasMany(Contactos, { foreignKey: "idmiembro" });
Contactos.belongsTo(Miembros, { foreignKey: "idmiembro" });

export { Articulo as A, Banners as B, Contactos as C, Etiquetas as E, Logs as L, Menus as M, Proyectos as P, Roles as R, Submenus as S, Users as U, EtiquetasArticulos as a, Blog as b, EtiquetasBlogs as c, Miembros as d, Publicaciones as e, Permisos as f, ProyectosMiembros as g, sequelize as s };
