module.exports.init = (app) => {
  // catch 404 and forward to error handler
  app.use((req, res, next) => {
    const err = new Error('Not Found')
    err.status = 404
    next(err)
  })

  // development error handler (will print stacktrace)
  if (app.get('env') === 'development') {
    app.use((err, req, res, next) => {
      res.status(err.status || 500).send({
        message: err.message,
        error: err
      })
    })
  }

  // production error handler (no stacktraces leaked to user)
  app.use((err, req, res, next) => {
    res.status(err.status || 500).send({
      message: err.message,
      error: {}
    })
  })
}
