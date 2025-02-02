var DataTypes = require("sequelize").DataTypes;
var _cell_meta = require("./cell_meta");
var _cell_type_meta = require("./cell_type_meta");
var _dataset = require("./dataset");
var _de = require("./de");
var _de_meta = require("./de_meta");
var _expression = require("./expression");
var _iris3_regulon = require("./iris3_regulon");
var _publication = require("./publication");
var _spot_meta = require("./spot_meta");

function initModels(sequelize) {
  var cell_meta = _cell_meta(sequelize, DataTypes);
  var cell_type_meta = _cell_type_meta(sequelize, DataTypes);
  var dataset = _dataset(sequelize, DataTypes);
  var de = _de(sequelize, DataTypes);
  var de_meta = _de_meta(sequelize, DataTypes);
  var expression = _expression(sequelize, DataTypes);
  var iris3_regulon = _iris3_regulon(sequelize, DataTypes);
  var publication = _publication(sequelize, DataTypes);
  var spot_meta = _spot_meta(sequelize, DataTypes);


  return {
    cell_meta,
    cell_type_meta,
    dataset,
    de,
    de_meta,
    expression,
    iris3_regulon,
    publication,
    spot_meta,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
