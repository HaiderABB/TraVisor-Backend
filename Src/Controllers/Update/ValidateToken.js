
const ValidateToken = async (req, res) => {
  return res.status(200).json({ token: true, authenticated: true, expired: false })
}

module.exports = ValidateToken;