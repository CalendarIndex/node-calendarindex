'use strict';

const request = require('request');

const CalendarIndex = function (key) {
  CalendarIndex.prototype.key = key;
  CalendarIndex.prototype.apiEndpoint = 'https://www.calendarindex.com/api/v1/holidays';
};

CalendarIndex.prototype.holidays = function (parameters, callback) {

  let querystring = '?api_key=' + CalendarIndex.prototype.key;

  if ('object' === typeof parameters) {
    for (var parameter in parameters) {
      querystring += '&' + parameter + '=' + parameters[parameter];
    }
  }

  const url = CalendarIndex.prototype.apiEndpoint + querystring;
  
  request(url, { json: true }, (err, res, body) => {
    if (err) { 
      return callback(err.message); 
    }
    return callback(body);
  });
};

module.exports = CalendarIndex;

