const {getReasonPhrase} = require('http-status-codes');

function responseFormatter(req, res, next) {
  const oldJson = res.json;

  res.json = function (data) {
    const response ={
      status:res.statusCode >= 200 && res.statusCode < 300 ? "success" : "error",
      statusCode: res.statusCode,
      message: getReasonPhrase(res.statusCode),
      data: data }

    oldJson.call(this, response);
   
  };
   next();
  
}
module.exports = responseFormatter;