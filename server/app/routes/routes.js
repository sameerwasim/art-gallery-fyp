const authRoutes = require('../modules/authentication/routes')
const categoryRoutes = require('../modules/category/routes')

module.exports = function router(app) {
  app
    .use('/auth', authRoutes)
    .use('/category', categoryRoutes)
}
