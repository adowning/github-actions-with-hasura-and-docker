/* eslint-disable no-negated-condition */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
const accounts1 = require('/home/ash/customers.1.json');
const accounts2 = require('/home/ash/customers.2.json');
const accounts3 = require('/home/ash/customers.3.json');
const calls = require('/home/ash/callrecords.json');
const employees = require('/home/ash/employees.json');
const accounts = [];
accounts.push(...accounts1, ...accounts2, ...accounts3);
const snakeCase = require('change-case').snakeCase;
const orders = require('/home/ash/orders_fixed.json');
const fs = require('fs');
const console = require('console');

const converted = [];
const rejected = [];
const ordersConverted = [];
var addresses = [];
const findDuplicates = (arr) => {
  let sorted_arr = arr.slice().sort(); // You can define the comparing function here.
  // JS by default uses a crappy string compare.
  // (we use slice to clone the array so the
  // original array won't be modified)
  let results = [];
  for (let i = 0; i < sorted_arr.length - 1; i++) {
    if (sorted_arr[i + 1] == sorted_arr[i]) {
      results.push(sorted_arr[i]);
    }
  }
  return results;
};
function snake(table) {
  table.forEach((item) => {
    for (let [ old_key, value ] of Object.entries(item)) {
      // console.log(`${key}: ${value}`);
      let new_key = snakeCase(old_key);
      if (old_key !== new_key) {
        Object.defineProperty(item, new_key, Object.getOwnPropertyDescriptor(item, old_key));
        delete item[old_key];
      }
    }
  });
  return table;
}
function convert() {
  let i = 1;
  accounts.forEach((item) => {
    if (i < 999500) {
      i++;
      if (item.geoAddress != undefined) {
        var address = {};
        item.geoAddress.address_components.forEach((component) => {
          component.types.forEach((type) => {
            if (component.types.includes('street_number')) {
              // console.log(component.long_name)
              address.streetNumber = component.long_name;
              // console.log(component.short_name)
            }

            if (component.types.includes('route')) {
              // console.log(component.long_name)
              address.streetName = component.long_name;
            }
            if (component.types.includes('postal_code')) {
              // console.log(component.long_name)
              address.zip = component.long_name;
            }
            if (component.types.includes('locality')) {
              // console.log(component.long_name)
              address.city = component.long_name;
            }
          });
          // console.log(component.types)
        });
        item.address = address;
        item.address.geoPoint = item.geoAddress.geometry.location;
        item.address.formatedAddress = item.geoAddress.formatted_address;
        item.address.placeid = item.geoAddress.placeid;

        delete item.geoAddress;
        delete item.zip;
        delete item.address2;
        delete item.city;
        delete item.state;
        // // delete item.searchAddress;
        // delete item.companyID;
        // delete item.alert;
        // delete item._created_at;
        // delete item._updated_at;
        // // item.orderTest_id = item.orderID
        // item.id = i;
        // converted.push(item);
        // i++;
      }
      if (item.acquisitionDate != undefined) {
        item.acquisitionDate = new Date(item.acquisitionDate * 1000);
      }
      if (item.lastInvoiceDate != undefined) {
        item.lastInvoiceDate = new Date(item.lastInvoiceDate * 1000);
      }
      if (item._updated_at != undefined) {
        item.updated_at = item._updated_at.$date;
      }
      if (item._created_at != undefined) {
        item.created_at = item._created_at.$date;
      }
      delete item.geoAddress;
      delete item.zip;
      delete item.address2;
      delete item.city;
      delete item.state;
      delete item.searchAddress;
      delete item.companyID;
      delete item.alert;
      delete item._created_at;
      delete item._updated_at;
      // item.orderTest_id = item.orderID
      item.id = i;
      const phoneList = [];
      if (item.phone1 != undefined) {
        item.primary_phone = item.phone1;
      } else {
        if (item.phone2 != undefined) {
          item.primary_phone = item.phone2;
        } else {
          if (item.phone3 != undefined) {
            item.primary_phone = item.phone3;
          }
        }
      }
      if (item.phone1 != undefined) {
        phoneList.push(item.phone1);
      }
      if (item.phone2 != undefined) {
        phoneList.push(item.phone2);
      }
      if (item.phone3 != undefined) {
        phoneList.push(item.phone3);
      }
      delete item.phone1;
      delete item.phone2;
      delete item.phone3;
      item.phone_list = JSON.stringify(phoneList);

      if (phoneList.length > 0 && item.primary_phone != undefined) {
        converted.push(item);
      } else {
        console.log(item);
        rejected.push(item);
      }
      i++;
    }
  });

  let y = 0;
  orders.forEach((order) => {
    order.id = y;
    // order.primary_phone = order.phone1;
    // delete order.phone1;
    if (order.accountID != undefined) {
      const thisAccount = converted.filter((item) => item.accountID == order.accountID);
      if (thisAccount.length > 0) {
        order.accountTest_id = thisAccount[0].id;
        if (order.id != undefined) {
          ordersConverted.push(order);
        }
        y++;
      }
    }
  });

  let shortAccounts = [];
  let shortOrders = [];
  let c = 0;
  const convertedCalls = [];
  calls.forEach((item) => {
    item.id = c;
    delete item._id;
    if (item._updated_at != undefined) {
      item.updated_at = item._updated_at.$date;
    }
    if (item._created_at != undefined) {
      item.created_at = item._created_at.$date;
    }
    item.startTime = new Date(item.startTime);
    item.endTime = new Date(item.endTime);
    item.employee_id = item.employee;
    delete item.employee;
    delete item._updated_at;
    delete item._created_at;
    convertedCalls.push(item);
    c++;
  });
  const shortEmployees = [];
  let e = 0;
  employees.forEach((item) => {
    item.employeeId = item.id;
    item.id = e;
    delete item._id;
    item.currentDevice = item.currentDevice.toString();
    item.zip = item.zip.toString();
    // item.phone3 = item.phone3.toString();
    // item.phone2 = item.phone2.toString();
    delete item.phone3;
    delete item.phone2;

    item.personal_phone = item.phone1.toString();
    delete item.phone1;
    shortEmployees.push(item);
    e++;
  });
  const shortCalls = [];
  converted.forEach((account) => {
    // if (account.id < 900 && account.id >= 0) {
    const orders = ordersConverted.filter((item) => item.accountID == account.accountID);
    if (orders.length > 0) {
      shortOrders.push(...orders);
    }
    const calls = convertedCalls.filter((item) => item.smAccountID == account.accountID);
    if (calls.length > 0) {
      shortCalls.push(...calls);
    }
    shortAccounts.push(account);
    // }
    // zz++
  });
  shortCalls.forEach((item) => {
    const employee = shortEmployees.filter((employee) => employee.employeeId == item.employee);
    if (employee.length > 0) {
      item.employeeTest_id = employee[0].id;
    }
  });
  let orderIds = [];
  let accountIds = [];
  shortOrders.forEach((order) => {
    orderIds.push(order.id);
  });
  shortAccounts.forEach((account) => {
    accountIds.push(account.id);
  });
  let dupes = findDuplicates(orderIds);
  dupes.forEach((dupeId) => {
    shortOrders = shortOrders.filter((order) => order.id !== dupeId);
  });
  dupes = findDuplicates(accountIds);
  dupes.forEach((dupeId) => {
    console.log(dupeId);
    shortAccounts = shortAccounts.filter((account) => account.id !== dupeId);
  });

  const accounts_test = {
    employeeTest: shortEmployees,
    callsTest: shortCalls,
    accountTest: shortAccounts,
    orderTest: shortOrders,
  };
  let data = JSON.stringify(accounts_test, null, 2);

  console.log('accounts, ', accounts.length);
  console.log('converted, ', converted.length);
  console.log('orders, ', orders.length);
  console.log('converted, ', ordersConverted.length);
  console.log('rejected, ', rejected.length);
  console.log('=======================');
  console.log('shortEmployees, ', shortEmployees.length);
  console.log('convertedCalls, ', convertedCalls.length);
  console.log('shortAccounts, ', shortAccounts.length);
  console.log('shortOrders, ', shortOrders.length);

  fs.writeFile('customers.3.converted.json', data, (err) => {
    if (err) throw err;
    console.log('Data written to file');
  });
  const snakeEmployees = snake(shortEmployees);
  const snakeCalls = snake(convertedCalls);
  const snakeAccounts = snake(shortAccounts);
  const snakeOrders = snake(shortOrders);
  console.log(snakeAccounts[0]);
  return {
    employees: snakeEmployees,
    calls: snakeCalls,
    accounts: snakeAccounts,
    orders: snakeOrders,
  };
}

module.exports = convert();
