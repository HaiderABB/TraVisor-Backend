const { Router } = require('express')
const AuthRouter = new Router();
const UserAuthentication = require('../Controllers/Auth/UserAuthentication')
const RegisterUser = require('../Controllers/Registration/RegisterUser')
const ForgotPassword = require('../Controllers/Update/ForgotUserPassword')
const UpdateUserPassword = require('../Controllers/Update/UpdateUserPassword');
const AuthenticateJWT = require('../Middlewares/authenticateJWT');

// Validate/Authenticate User 
AuthRouter.post('/Authentication', UserAuthentication);

// SignUp/Register New User
AuthRouter.post('/Registration', RegisterUser);

// Apply for Update User Password 
AuthRouter.post('/Forgot', ForgotPassword);

// Update User Password
AuthRouter.put('/Forgot/Update', AuthenticateJWT, UpdateUserPassword)


module.exports = AuthRouter;