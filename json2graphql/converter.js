/* eslint-disable no-negated-condition */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
const accounts1 = require('/home/ash/customers.1.json');
const accounts2 = require('/home/ash/customers.2.json');
const accounts3 = require('/home/ash/customers.3.json');
const calls = require('/home/ash/callrecords.json');
const employees = require('/home/ash/employees.json');
const accounts = [];
const limit = 500
accounts.push(...accounts1, ...accounts2, ...accounts3);
const snakeCase = require('change-case').snakeCase;
const orders = require('/home/ash/orders_fixed.json');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
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
    if (i < limit) {
      i++;
      if (item.geoAddress != undefined) {
        var address = {};
        item.geoAddress.address_components.forEach((component) => {
          component.types.forEach((type) => {
            if (component.types.includes('street_number')) {
              address.streetNumber = component.long_name;
              // //console.log(component.short_name)
            }

            if (component.types.includes('route')) {
              address.streetName = component.long_name;
            }
            if (component.types.includes('postal_code')) {
              // //console.log(component.long_name)
              address.zip = component.long_name;
            }
            if (component.types.includes('locality')) {
              address.city = component.long_name;
            }
          });
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
      // delete item.searchAddress;
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
        order.accounts_id = thisAccount[0].id;
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
    if(c < limit){}
    item.id = c;
    delete item._id;
    if (item._updated_at != undefined) {
      item.updated_at = item._updated_at.$date;
    }
    if (item._created_at != undefined) {
      item.created_at = item._created_at.$date;
    }
    item.startTime = new Date(item.startTime);
    item.endTime = new Date(item.endTime )   // calls: snakeCalls,
    // accounts: snakeAccounts,
    // orders: snakeOrders,);
    // item.employees_id = item.employee;
    // delete item.employee;
    delete item._updated_at;
    delete item._created_at;
    convertedCalls.push(item);
    c++;
  });
  const shortEmployees = [];
  let e = 0;
  employees.forEach((item) => {
    item.employeeId = item.id;
    // item.id = e;
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
  let shortCalls = [];
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
    const employee = shortEmployees.filter((employee) => employee.id == item.employee);
    if (employee.length > 0) {
      console.log(employee[0].id)
      item.employees_id = employee[0].id;
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
  // dupes = findDuplicates(callsEmployeesIds);
  // dupes.forEach((dupeId) => {
  //   shortCalls = shortCalls.filter((call) => call.employees_id !== dupeId);
  // });
  dupes = findDuplicates(accountIds);
  dupes.forEach((dupeId) => {
    shortAccounts = shortAccounts.filter((account) => account.id !== dupeId);
  });

  const snakeEmployees = snake(shortEmployees);
  const snakeCalls = snake(convertedCalls);
  const snakeAccounts = snake(shortAccounts);
  const snakeOrders = snake(shortOrders);
  let u = 0

  const users = snakeEmployees.map(item => {
    const user = {}
    if ( item.employee_id != undefined) {
      user.id = uuidv4()
      user.employees_id = item.id
      user.created_at = new Date()
      user.updated_at = new Date()
      user.password = "asdf"
      user.email = item.email
      user.active_timesheet_id = ""
      user.isLogged_in = false
      // user.lastSeen = null
user.last_seen = new Date()
      return user
    } else {

    }
  })

    const timesheets = users.map(item => {
      const timesheet = {}
    if ( item.id != undefined) {
      timesheet.id = uuidv4()
      timesheet.users_id = item.id
      timesheet.start = new Date()
      timesheet.end = new Date()
      timesheet.created_at = new Date()
      timesheet.updated_at = new Date()
      // user.active_timesheet_id = null
      // user.isLoggedIn = false
      // user.lastSeen = null

      return timesheet
    } else {

    }
  })

  const accounts_test = {
    employees: snakeEmployees,
    timesheets: timesheets,
    calls: snakeCalls,
    accounts: snakeAccounts,
    orders: snakeOrders,
    users: users

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

  fs.writeFile('converted.json', data, (err) => {
    if (err) throw err;
  });

  return {
    employees: snakeEmployees,
    users: users,
    calls: snakeCalls,
    accounts: snakeAccounts,
    orders: snakeOrders,
    timesheets: timesheets,

  };
}

module.exports = convert();
