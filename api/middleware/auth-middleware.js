const User = require('../auth/auth-model');

const checkEmailExists = (req, res, next) => {
    const { email } = req.body
    User.findByEmail(email)
      .then(possibleUser => {
        if (possibleUser !== undefined) {
            req.body.foundUser = possibleUser
            next();
        } else {
          next({ status: 401, message: 'This email address is not associated with a registered account'});
        }
      })
      .catch(next);
  }

const checkEmailFree = (req, res, next) => {
    const { email } = req.body
    User.findByEmail(email)
      .then(possibleUser => {
        if (possibleUser === undefined) {
            next();
        } else {
            next({ status: 422, message: 'This email address already has a registered account'});
        }
      })
      .catch(next);
}

const validateRegisterCred = (req, res, next) => {
    if (!req.body.email ||
        req.body.email === undefined ||
        req.body.email === null ||
        !req.body.password || 
        req.body.password === undefined ||
        req.body.password === null ||
        !req.body.first_name || 
        req.body.first_name === undefined ||
        req.body.first_name === null ||
        !req.body.last_name || 
        req.body.last_name === undefined ||
        req.body.last_name === null) {
        next({ status: 422, message: 'email, password, and name are required to register'});
    } else { 
        next();
    }
}

const validateLoginCred = (req, res, next) => {
    if (!req.body.email ||
        req.body.email === undefined ||
        req.body.email === null ||
        !req.body.password || 
        req.body.password === undefined ||
        req.body.password === null) {
        next({ status: 422, message: 'email and password are required to login'});
    } else { 
        next();
    }
}

module.exports = { checkEmailExists, checkEmailFree, validateRegisterCred, validateLoginCred }