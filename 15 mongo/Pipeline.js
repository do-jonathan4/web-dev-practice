module.exports = [
  {
    '$project': {
      'title': 1
    }
  }, {
    '$limit': 10
  }
]