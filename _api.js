var axios = require("axios");
var data = JSON.stringify({
  collection: "user",
  database: "personalDb",
  dataSource: "Cluster0",
  projection: {
    _id: 1,
  },
});

var config = {
  method: "post",
  url: "https://data.mongodb-api.com/app/data-dbvui/endpoint/data/beta/action/findOne",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Request-Headers": "*",
    "api-key": "<621345c9facf25cbe2568cf2>",
  },
  data: data,
};

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
