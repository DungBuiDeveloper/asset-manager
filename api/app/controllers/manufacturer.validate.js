const { validationResult } = require('../middleware/utils')
const { check } = require('express-validator')
var validator = require('validator')
/**
 * Validates create new item request
 */
exports.createItem = [
  check('name')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY')
    .trim(),
  check('url')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY')
    .custom((v) => (v === '' ? true : validator.isURL(v)))
    .withMessage('NOT_A_VALID_URL')
    .trim(),

  check('suportUrl')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY')
    .custom((v) => (v === '' ? true : validator.isURL(v)))
    .withMessage('NOT_A_VALID_URL')
    .trim(),

  check('suportPhone')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY')
    .custom((v) => (v === '' ? true : validator.isMobilePhone(v, 'any')))
    .withMessage('NOT_A_VALID_PHONE')
    .trim(),
  check('suportEmail')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY')
    .custom((v) => (v === '' ? true : validator.isEmail(v)))
    .withMessage('NOT_A_VALID_EMAIL')
    .trim(),

  check('thumb')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY')
    .custom((v) => (v === '' ? true : validator.isURL(v)))
    .withMessage('NOT_A_VALID_URL')
    .trim(),
  (req, res, next) => {
    validationResult(req, res, next)
  }
]

/**
 * Validates update item request
 */
exports.updateItem = [
  check('name')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY'),
  check('id')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY'),
  (req, res, next) => {
    validationResult(req, res, next)
  }
]

/**
 * Validates get item request
 */
exports.getItem = [
  check('id')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY'),
  (req, res, next) => {
    validationResult(req, res, next)
  }
]

/**
 * Validates delete item request
 */
exports.deleteItem = [
  check('id')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY'),
  (req, res, next) => {
    validationResult(req, res, next)
  }
]
