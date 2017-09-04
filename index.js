/**
 * d3-quarterly
 * 2017 Ændrew Rininsland
 * Adapted from chrisv's block: http://bl.ocks.org/biovisualize/5430237
 */

import { timeParse } from 'd3-time-format';

var endTS = '23:59:59.999Z';
var startTS = '00:00:00.0Z';

export default function(date, returnEnd) {
  if (!returnEnd) returnEnd = false;
  var splitted = date.split(/[-\s]/);
  var token = splitted[1].length === 2 ? '%y' : '%Y';
  var parse = timeParse('%d %m ' + token + ' %H:%M:%S.%L%Z');
  var quarterEndMonth = splitted[0].charAt(1) * 3;
  var quarterStartMonth = quarterEndMonth - 2;

  return returnEnd ?
    parse(getLastDateOfQuarter(quarterEndMonth, splitted[1]) + ' ' + quarterEndMonth + ' ' + splitted[1] + ' ' + endTS) :
    parse('01 ' + quarterStartMonth + ' ' + splitted[1] + ' ' + startTS);
}

// I'm aware this is needlessly complex
function getLastDateOfQuarter(quarterEndMonth, year) {
  switch(+quarterEndMonth) {
    case 4:
    case 6:
    case 9:
    case 11:
      return '30';
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      return '31';
    case 2:
      return isLeapYear(+year.length === 2 ? '20' + year : year) ? '29' : '28';
  }
}

function isLeapYear (year) {
  if (((+year % 4 === 0) && (+year % 100 !== 0)) || (+year % 400 === 0)) return true;
  else return false
}
