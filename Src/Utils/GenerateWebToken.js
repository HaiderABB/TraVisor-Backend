const express = require('express');
const jwt = require('jsonwebtoken');

const GenerateWebToken = async (userId) => {
  return jwt.sign({ user_id: userId }, process.env.SECRET_KEY, { expiresIn: '1h' })
}

module.exports = GenerateWebToken;