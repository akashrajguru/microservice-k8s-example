const app = require("./src/app");
const { DB_URI } = require("./src/config");
const mongoose = require("mongoose");

const config = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  };
mongoose.connect(DB_URI, config);

app.listen(3000, () => {
  console.log("running on port 3000");
  console.log("--------------------------");
});