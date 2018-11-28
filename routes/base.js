function base(req, res) {
  res.status(200).json({
    key: 'Hello world'
  })
  return;
}

module.exports = base;
