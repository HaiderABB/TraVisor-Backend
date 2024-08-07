const express = require('express');
const jwt = require('jsonwebtoken');
const ValidateUser = require('../Helper/Validation/ValidateUser');

const AuthenticateJWT = async (req, res, next) => {
  const token = req.body.jwt_token;
  if (!token) {
    res.status(400).json({ authenticated: false, token: false, expired: false });
  }
  else {
    try {
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      const User = await ValidateUser(decoded.user_id);
      if (User) {
        next();
      }
    } catch (err) { res.status(404).json({ authenticated: false, token: true, expired: true }) }
  }
}

module.exports = AuthenticateJWT;