const axios = require("axios")
const get = endpoint => axios.get(`http://localhost:5000/api${endpoint}`)
const getMoves = names => {
  const data = get(`/getMoves`)
  console.log(data, "inside")
  return data
}
exports.createPages = async ({ actions: { createPage } }) => {
  const { data } = await getMoves()
  console.log(data, "outside")
  // Create a page that lists all the moves.
  createPage({
    path: `/moves`,
    component: require.resolve("./src/templates/moves.js"),
    context: { data },
  })
}
