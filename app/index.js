const config = require("./config");

const app = express();
app.listen(config.port, () => {
  console.log(`server running on port ${config.port}`);
});

//importing utils using common js
const { stringLength } = require("./utils/stringHelper");
console.log("hello World");
console.log(stringLength("12453"));
