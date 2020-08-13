const controller = require('../controllers/model')
const validate = require('../controllers/model.validate')
const AuthController = require('../controllers/auth')
const router = require('express').Router()
require('../../config/passport')
const passport = require('passport')
const requireAuth = passport.authenticate('jwt', {
  session: false
})
const trimRequest = require('trim-request')

/*
 * Cities routes
 */

/*
 * Get all items route
 */
router.get('/all', controller.getAllItems)

/*
 * Get items route
 */
router.get(
  '/',
  // requireAuth,
  // AuthController.roleAuthorization(['admin']),
  trimRequest.all,
  controller.getItems
)

router.post(
  '/',
  // requireAuth,
  // AuthController.roleAuthorization(['admin']),
  trimRequest.all,
  validate.createItem,
  controller.createItem
)

router.get(
  '/:id',
  // requireAuth,
  // AuthController.roleAuthorization(['admin']),
  trimRequest.all,
  validate.getItem,
  controller.getItem
)

router.patch(
  '/:id',
  // requireAuth,
  // AuthController.roleAuthorization(['admin']),
  trimRequest.all,
  validate.updateItem,
  controller.updateItem
)

router.delete(
  '/:id',
  // requireAuth,
  // AuthController.roleAuthorization(['admin']),
  trimRequest.all,
  validate.deleteItem,
  controller.deleteItem
)

module.exports = router
