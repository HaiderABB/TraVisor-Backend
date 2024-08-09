const express = require('express');
const jwt = require('jsonwebtoken');
const ValidateUser = require('../Helper/Validation/ValidateUser');

const AuthenticateJWT = async (req, res, next) => {
  const token = req.body.jwt_token;
  if (!token) {
    return res.status(400).json({ authenticated: false, token: false, expired: false });
  }
  else {
    try {
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      const User = await ValidateUser(decoded.user_id);
      req.user = User;
      if (User) {
        next();
      } else { return res.status(404).json({ authenticated: false, token: true, expired: true }) }

    } catch (err) { return res.status(404).json({ authenticated: false, token: true, expired: false }) }
  }
}

module.exports = AuthenticateJWT;