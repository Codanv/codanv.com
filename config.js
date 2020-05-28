const dotenv = require('dotenv').config();

module.exports = {
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  graphqlIDE: process.env.GATSBY_GRAPHQL_IDE
};