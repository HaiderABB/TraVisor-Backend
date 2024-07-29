const express = require('express');
const jwt = require('jsonwebtoken');
const SecretKey = require('../Config/SecretKey');

const GenerateWebToken = async (userId) => {
  return jwt.sign({ user_id: userId }, SecretKey, { expiresIn: '1h' })
}

module.exports = GenerateWebToken;