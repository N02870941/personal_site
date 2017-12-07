const logger = require('winston');

module.exports = function(server) {

  // catch 404 and forward to error handler
  server.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

//------------------------------------------------------------------------------

  // error handler
  server.use(function(err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);

    // Render the page you want to navigate to. In this example,
    // I navigate the user to error page
    res.redirect('/#!/notFound');
  });
};
