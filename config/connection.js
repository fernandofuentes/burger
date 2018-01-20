// Set up MySQL connection.
var mysql = require("mysql");
if (process.env.JAWSDB_URL) {
  var connection = mysql.createConnection(process.env.JAWSDB_URL);

} else {

  var connection = mysql.createConnection({
    port: 3306,
    host: "cig4l2op6r0fxymw.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "xy48i6v4rki26p73",
    password: "ftr5lmauaa9xbbix",
    database: "jl0uvvmyh6dcqrz0"


  });
}
// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
