import test from 'ava';
import quarterly from '../';

test('With a space and century token', t => {
  const lower = quarterly('Q1 2017', false);
  const upper = quarterly('Q1 2017', true);
  t.is(lower.toISOString(), '2017-01-01T00:00:00.000Z');
  t.is(upper.toISOString(), '2017-03-31T23:59:59.999Z');
});

test('With a dash and century token', t => {
  const lower = quarterly('Q2-2017', false);
  const upper = quarterly('Q2-2017', true);
  t.is(lower.toISOString(), '2017-04-01T00:00:00.000Z');
  t.is(upper.toISOString(), '2017-06-30T23:59:59.999Z');
});

test('With a space and no century token', t => {
  const lower = quarterly('Q3 17', false);
  const upper = quarterly('Q3 17', true);
  t.is(lower.toISOString(), '2017-07-01T00:00:00.000Z');
  t.is(upper.toISOString(), '2017-09-30T23:59:59.999Z');
});

test('With a dash and no century token', t => {
  const lower = quarterly('Q4-17', false);
  const upper = quarterly('Q4-17', true);
  t.is(lower.toISOString(), '2017-10-01T00:00:00.000Z');
  t.is(upper.toISOString(), '2017-12-31T23:59:59.999Z');
});
