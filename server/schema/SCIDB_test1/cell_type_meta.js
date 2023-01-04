const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cell_type_meta', {
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
    cell_type: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    subcluster: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'cell_type_meta',
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
