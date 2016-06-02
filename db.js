'use strict';
/**
    Connect to a Mongo data base
    This module has the config need it to make the connection

    The connect function returns a Promise
    The collection function returns a db collection
    The mdb variable has the instance of the data base

    //TODO: Implement a function to close the connection

*/

var MongoClient = require('mongodb').MongoClient;

var config = {
    host: 'localhost',
    port: 27017,
    db: 't1'
};

var mdb = null,
    uri = `mongodb://${config.host}:${config.port}/${config.db}`;

module.exports = {
    connect: () => {

        return new Promise((resolve, reject) => {

            MongoClient.connect(uri, (err, db) => {
                if(err) {
                    return reject(err);
                } else {
                    mdb = db;
                    return resolve();
                }
            });

        });
    },

    collection: (name) => {
        return mdb.collection(name);
    },

    get: () => {
        return mdb;
    }
};
