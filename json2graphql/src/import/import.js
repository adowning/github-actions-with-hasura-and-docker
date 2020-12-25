/* eslint-disable no-await-in-loop */
const { generate, sanitizeData } = require('./generateTables');
const { generateSql, runSql } = require('./sql');
const { cli } = require('cli-ux');
const { trackTables } = require('./track');
const { getInsertOrder, insertData } = require('./insert');
const { createRelationships } = require('./relationships');
const { createTables } = require('./check');

const importData = async (jsonDb, url, headers, overwrite) => {
  cli.action.start('Processing JSON data');
  const db = sanitizeData(jsonDb);
  const tables = generate(db);
  const sql = generateSql(tables);
  cli.action.stop('Done!');
  cli.action.start('Checking database');
  createTables(tables, url, headers, overwrite, runSql, sql).then(() => {
    cli.action.stop('Done!');
    cli.action.start('Tracking tables');
    trackTables(tables, url, headers).then(() => {
      cli.action.stop('Done!');
      cli.action.start('Creating relationships');
      createRelationships(tables, url, headers).then(async () => {
        cli.action.stop('Done!');
        cli.action.start('Inserting data');

        for (var i = 0; i < 30; i++) {
          let start = 900 * i;
          let end = start + 900;
          let newdb = {};
          if (db.employees.slice(start, end).length > 0) {
            newdb.employees = db.employees.slice(start, end);
          }
          if (db.users.slice(start, end).length > 0) {
            newdb.users = db.users.slice(start, end);
          }
          if (db.timesheets.slice(start, end).length > 0) {
            newdb.timesheets = db.timesheets.slice(start, end);
          }
          if (db.calls.slice(start, end).length > 0) {
            newdb.calls = db.calls.slice(start, end);
          }
          if (db.accounts.slice(start, end).length > 0) {
            newdb.accounts = db.accounts.slice(start, end);
          }
          if (db.orders.slice(start, end).length > 0) {
            newdb.orders = db.orders.slice(start, end);
          }
          if (newdb.calls == undefined) {
            delete tables[2];
          }
          if (newdb.accounts == undefined) {
            delete tables[3];
          }
          if (newdb.orders == undefined) {
            delete tables[4];
          }
          if (newdb.employees == undefined) {
            delete tables[0];
          }
          if (newdb.users == undefined) {
            delete tables[1];
          }
          if (newdb.timesheets == undefined) {
            delete tables[5];
          }
          const insertOrder = getInsertOrder(tables);

          await insertData(insertOrder, newdb, tables, url, headers);
          console.log(i);
        }
      });
    });
  });
};

module.exports = importData;
