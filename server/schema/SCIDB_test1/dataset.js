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
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    file_name: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    species: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    condition: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    region: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    gender: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    stage: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    age: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    mice_model: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    public_id: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    n_cell: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    n_original_cell: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    n_cluster: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    iris3_jobid: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    silhouette_score: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ari_score: {
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
    ]
  });
};
