import db from '@server/config/db.js'
// the schema directory can only access from ../
const schema = '../../schema/scidb_test1/iris3_regulon.js'

const screadDb = db.screadV1

// use sequelize to import table structure
const iris3 = screadDb.import(schema)
const getRegulonById = async function(id) {
  // note is is async function and async statement
  const result = await iris3.findAll({
    // use await control async process, return data from Promise object
    where: {
      data_id: id
    },
    limit: 10000
  })
  return result // return data
}

export default {
  // will used in controller
  getRegulonById
}
