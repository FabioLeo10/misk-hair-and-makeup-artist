const { body, validationResult } = require('express-validator')

const validateUserBody = [
    body('email')
        .notEmpty()
        .isEmail()
        .withMessage('Sorry, your email is not valid'),

    body('password')
        .notEmpty()
        .isLength({ min: 8 })
        .withMessage('The password must have at least 8 characters'),

    body('username')
        .notEmpty()
        .isString()
        .isLength({ min: 3 })
        .withMessage('Username is not valid'),

   
    body('dob')
        .isDate()
        .withMessage('Wrong character'),

    (req, res, next) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res
                .status(400)
                .send({ errors: errors.array() })
        }

        next()
    }
]

module.exports = { validateUserBody }