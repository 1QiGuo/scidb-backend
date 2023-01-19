const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('spot_meta', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cell_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    umap_1: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    umap_2: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    tissue: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    row: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    col: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    imagerow: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    imagecol: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    layer: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    cluster: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    subcluster: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    data_id: {
      type: DataTypes.CHAR(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'spot_meta',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "data_id",
        using: "BTREE",
        fields: [
          { name: "data_id" },
        ]
      },
      {
        name: "subcluster",
        using: "BTREE",
        fields: [
          { name: "subcluster" },
        ]
      },
    ]
  });
};
