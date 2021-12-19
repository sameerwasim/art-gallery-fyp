const authRoutes = require('../modules/authentication/routes')

module.exports = function router(app) {
  app
    .use('/auth', authRoutes)
}
