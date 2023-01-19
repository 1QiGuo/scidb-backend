const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cell_meta', {
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
    subcluster: {
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
    pca_1: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    pca_2: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    pca_3: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    cell_type: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    data_id: {
      type: DataTypes.CHAR(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'cell_meta',
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
      {
        name: "cell_type",
        using: "BTREE",
        fields: [
          { name: "cell_type" },
        ]
      },
    ]
  });
};
