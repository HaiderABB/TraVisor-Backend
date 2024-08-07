const express = require('express');
const jwt = require('jsonwebtoken');

const AuthenticateJWT = async (req, res, next) => {
  const token = req.body.jwt_token;
  if (!token) {
    console.log(!token);
    res.status(400).json({ authenticated: false, token: false, expired: falseS });
  }
  else {
    try {
      const decoded = jwt.verify(token, 'TRAVEL%PLANNER%WEBSITE');

    } catch (err) { res.status(404).json({ authenticated: false, token: false, expired: true }) }
  }
}

AuthenticateJWT();