exports.render = function(req, res) {
  res.render('index', {
    title: 'Hello, world!'
  })
}

exports.wtf = function(req, res) {
  res.send('WTF mate?');
}
