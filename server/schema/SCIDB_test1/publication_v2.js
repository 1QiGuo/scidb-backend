const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('publication_v2', {
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
    public_id: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    pmid: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    protocol: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    methodology: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    title: {
      type: DataTypes.STRING(512),
      allowNull: true
    },
    author: {
      type: DataTypes.STRING(512),
      allowNull: true
    },
    citation: {
      type: DataTypes.STRING(512),
      allowNull: true
    },
    abstract: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    doi: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'publication_v2',
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
    ]
  });
};
