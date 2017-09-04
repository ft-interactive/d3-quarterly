# d3-quarterly
## 2017 Ændrew Rininsland
### Based off block by [Chris Vaiu](http://bl.ocks.org/biovisualize/5430237)

`d3-quarterly` will parse a "quarter" string (e.g., "Q3 2017") and return a date object,
indicating either the lower or upper bounds of a quarter.

### Usage

1. `$ npm install d3-quarterly`
2. `import quarterly from 'd3-quarterly'`
3. ```js
test('General use', t => {
  const lower = quarterly('Q1 2017', false);
  const upper = quarterly('Q1 2017', true);
  t.is(lower.toISOString(), '2017-01-01T00:00:00.000Z');
  t.is(upper.toISOString(), '2017-03-31T23:59:59.999Z');
});
```

### API

1. `quarterly(quarterString: string, returnBoundsEnd: boolean = false)`
    * quarterString
      - A string in the format 'QN YY(YY)?' where "N" is an integer 1-4 (incl.) and "YY(YY)?" is either a 2- or 4-integer year value

    * returnBoundsEnd
      - By default returns the lower bounds (i.e., the start) of a quarter. Pass `true` to return the upper bounds.
