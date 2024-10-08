const { Router } = require('express')
const AuthRouter = new Router();
const UserAuthentication = require('../Controllers/Auth/UserAuthentication')
const RegisterUser = require('../Controllers/Registration/RegisterUser')
const ForgotPassword = require('../Controllers/Update/ForgotUserPassword')
const UpdateUserPassword = require('../Controllers/Update/UpdateUserPassword');
const AuthenticateJWT = require('../Middlewares/AuthenticateJWT');
const ValidateToken = require('../Controllers/Update/ValidateToken');

// Validate/Authenticate User 
AuthRouter.post('/Authentication', UserAuthentication);

// SignUp/Register New User
AuthRouter.post('/Registration', RegisterUser);

// Apply for Update User Password 
AuthRouter.post('/Forgot', ForgotPassword);

// Update User Password
AuthRouter.put('/Forgot/Update', AuthenticateJWT, UpdateUserPassword)

// Check Token 
AuthRouter.post('/Validate', AuthenticateJWT, ValidateToken)

module.exports = AuthRouter;