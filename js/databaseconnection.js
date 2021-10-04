let config = {
    connectionString: "AccountEndpoint=https://spacedbserver.documents.azure.com:443/;AccountKey=CA1brnxGMtmXrFvx9tRxCS4cmQGxsbzPil3Yrk5bLTtrKpXqYqONBLfBJszuhT3R4waa3XQImeu9xAaM5FERvg==",
    database: "SPACEDB",
    container: "TenancyAgreement"
}

const cosmos = require("@azure/cosmos");

const client = new cosmos.CosmosClient(config.connectionString);
const databaseid = config.database;
const containerid = config.container;
var containerref = client.database(databaseid).container(containerid);
var containerdata = containerref.items;

function isOK(statusCode) {
    return statusCode >= 200 && statusCode <= 299;
}


module.exports = {containerref,containerdata,isOK}