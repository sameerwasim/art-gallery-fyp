const authRoutes = require('../modules/authentication/routes')
const categoryRoutes = require('../modules/category/routes')
const artworkRoutes = require('../modules/artwork/routes')
const reviewRoutes = require('../modules/review/routes')
const contactRoutes = require('../modules/contact/routes')

module.exports = function router(app) {
  app
    .use('/auth', authRoutes)
    .use('/category', categoryRoutes)
    .use('/artwork', artworkRoutes)
    .use('/review', reviewRoutes)
    .use('/contact', contactRoutes)
}
