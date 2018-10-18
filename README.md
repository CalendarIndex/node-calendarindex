# node-calendarindex
Node.js library for [CalendarIndex API](https://www.calendarindex.com)

## Installation

```shell
npm install --save node-calendarindex
```

## Usage

```javascript

// Load the package
var CalendarIndex = require('node-calendarindex');

// Initlize with an API key
var clapi = new CalendarIndex('_YOUR_API_KEY_');

var parameters = {
  // Required
  country: 'US',
  year:    2019,
  // Optional
  // state: CA,
  // region: LA
};

clapi.holidays(parameters, function (data) {
  console.log(data)
  // Insert awesome code here...
});
```