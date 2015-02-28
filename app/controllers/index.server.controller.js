exports.render = function(req, res) {
  var
    lastVisit = req.session.lastVisit,
    title = lastVisit ? 'Why hello again' : 'O hai!'
  ;

  req.session.lastVisit = new Date();

  res.render('index', {
    title: title
  })
}

exports.wtf = function(req, res) {
  res.send('WTF mate?');
}
