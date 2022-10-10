const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dataset', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    data_id: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    file_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    species: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    condition: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    region: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    gender: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    stage_dpi: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    age: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    public_id: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    n_cell: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    n_original_cell: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'dataset',
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
        name: "species",
        using: "BTREE",
        fields: [
          { name: "species" },
        ]
      },
      {
        name: "public_id",
        using: "BTREE",
        fields: [
          { name: "public_id" },
        ]
      },
      {
        name: "stage_dpi",
        using: "BTREE",
        fields: [
          { name: "stage_dpi" },
        ]
      },
      {
        name: "data_id",
        using: "BTREE",
        fields: [
          { name: "data_id" },
        ]
      },
    ]
  });
};
