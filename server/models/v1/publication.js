import db from '@server/config/db.js'
// the schema directory can only access from ../
const schema = '../../schema/scidb_test1/publication.js'

const screadDb = db.screadV1

// use sequelize to import table structure
const publication = screadDb.import(schema)

const getPublication = async function(id) {
  const result = await publication.findAll({
    where: {
      data_id: id
    }
  })
  return result
}

export default {
  // will used in controller
  getPublication
}
