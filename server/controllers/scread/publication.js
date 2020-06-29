import publication from '@server/models/scread/publication.js'

const getPublicationById = async function(ctx) {
  const id = ctx.params.id // get id from context url
  const result = await publication.getPublication(id) // return query results using await function instead of a promise
  ctx.body = result // store result in context body part
}

// export methods and use in router
export default {
  getPublicationById
}
