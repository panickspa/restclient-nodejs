var request = require("request");

module.exports = {
  reqPost: data => {
    var options = {
      method: "POST",
      url: "http://localhost/api/ex2",
      headers: {
        "content-type": "application/x-www-form-urlencoded"
      },
      form: data
    };
    request(options, function(error, response, body) {
      if (error) throw new Error(error);
      console.log(body);
    });
  },
  reqJSON: () => {
    var options = {
      method: "GET",
      url: "http://localhost/api/ex2",
      headers: {
        "content-type": "application/x-www-form-urlencoded"
      }
    };
    request(options, function(error, response, body) {
      if (error) throw new Error(error);
      console.log(body);
    });
  }
};
