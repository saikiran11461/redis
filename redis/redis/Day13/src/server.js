const app = require("./index");

const connect = require("./configs/db");

app.listen(4200, async function () {
  try {
    await connect();
    console.log("listening on port 4200");
  } catch (err) {
    console.error("Error connecting" + err);
  }
});
