const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('iris3_regulon', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    index: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    tf_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    rss: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    rss_pval: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    gene_symbol: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    gene_id: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    data_id: {
      type: DataTypes.CHAR(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'iris3_regulon',
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
