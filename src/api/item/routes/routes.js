module.exports = {
  routes: [
    { // Path defined with an URL parameter
      method: 'GET',
      path: '/custom-query', 
      handler: 'item.customQuery',
    }
  ]
}