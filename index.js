/**
 * d3-quarterly
 * 2017 Ændrew Rininsland
 * Adapted from chrisv's block: http://bl.ocks.org/biovisualize/5430237
 */

import { timeFormat } from 'd3-time-format';

var format = timeFormat('%m %Y');

export default function(dates) {
  return dates.map(function(d, i){
    var splitted = d.split('-');
    var quarterEndMonth = splitted[0].charAt(1) * 3;
    var quarterStartMonth = quarterEndMonth - 3;

    return [
      format(quarterStartMonth + ' ' + splitted[1]),
      format(quarterEndMonth + ' ' + splitted[1])
    ];
  });
}
