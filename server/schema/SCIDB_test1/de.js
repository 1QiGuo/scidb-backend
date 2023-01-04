const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('de', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    p_val: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    avg_logFC: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    pct_1: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    pct_2: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    p_val_adj: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cluster: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    gene: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    a_data_id: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    b_data_id: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    ct: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'de',
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
          { name: "a_data_id" },
          { name: "id" },
          { name: "b_data_id" },
        ]
      },
      {
        name: "b_data_id",
        using: "BTREE",
        fields: [
          { name: "b_data_id" },
          { name: "a_data_id" },
        ]
      },
      {
        name: "ct",
        using: "BTREE",
        fields: [
          { name: "ct" },
        ]
      },
      {
        name: "type",
        using: "BTREE",
        fields: [
          { name: "type" },
        ]
      },
      {
        name: "gene",
        using: "BTREE",
        fields: [
          { name: "gene" },
        ]
      },
    ]
  });
};
