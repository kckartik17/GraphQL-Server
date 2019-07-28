const express = require("express");
const expressGraphQL = require("express-graphql");
const schema = require("./schema");
const app = express();

app.use(
  "/graphql",
  expressGraphQL({
    schema: schema,
    graphiql: true
  })
);

const PORT = 4000 | process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
