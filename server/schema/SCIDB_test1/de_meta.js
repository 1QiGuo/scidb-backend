const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('de_meta', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    data_id: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    b_data_id: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    hint: {
      type: DataTypes.STRING(512),
      allowNull: true
    },
    value: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'de_meta',
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
        name: "data_id_b_data_id",
        using: "BTREE",
        fields: [
          { name: "data_id" },
          { name: "b_data_id" },
        ]
      },
    ]
  });
};
