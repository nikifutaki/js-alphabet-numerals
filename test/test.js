import test from 'ava';
import {num2Ab,ab2Num} from '../index.js';

test('num2Ab', t => {
  t.is(num2Ab(1),'A');
  t.is(num2Ab(26),'Z');
  t.is(num2Ab(27),'AA');
  t.is(num2Ab(52),'AZ');
  t.is(num2Ab(53),'BA');
  t.is(num2Ab(702),'ZZ');
  t.is(num2Ab(703),'AAA');
  t.is(num2Ab(2147483647),'FXSHRXW');
})

test('num2Ab-Exception', t => {
  t.throws(() => num2Ab(null), {instanceOf: TypeError, message: 'Argument must be a number'});
  t.throws(() => num2Ab('0'), {instanceOf: TypeError, message: 'Argument must be a number'});
  t.throws(() => num2Ab(1.1), {instanceOf: RangeError, message: 'The number must be an integer'});
  t.throws(() => num2Ab(0), {instanceOf: RangeError, message: 'The number must be 1 or more'});
  t.throws(() => num2Ab(-1), {instanceOf: RangeError, message: 'The number must be 1 or more'});
  t.throws(() => num2Ab(2147483648), {instanceOf: RangeError, message: 'The number must be less than 2147483647'});
})

test('ab2Num', t => {
  t.is(ab2Num('A'),1);
  t.is(ab2Num('Z'),26);
  t.is(ab2Num('AA'),27);
  t.is(ab2Num('AZ'),52);
  t.is(ab2Num('BA'),53);
  t.is(ab2Num('ZZ'),702);
  t.is(ab2Num('AAA'),703);
  t.is(ab2Num('FXSHRXW'),2147483647);
})

test('ab2Num-Exception', t => {
  t.throws(() => ab2Num(null), {instanceOf: TypeError, message: 'Argument must be a string'});
  t.throws(() => ab2Num(1), {instanceOf: TypeError, message: 'Argument must be a string'});
  t.throws(() => ab2Num(''), {instanceOf: RangeError, message: 'Argument should consist only of uppercase alphabets'});
  t.throws(() => ab2Num('test'), {instanceOf: RangeError, message: 'Argument should consist only of uppercase alphabets'});
  t.throws(() => ab2Num('TeST'), {instanceOf: RangeError, message: 'Argument should consist only of uppercase alphabets'});
  t.throws(() => ab2Num('AAAAAAAA'), {instanceOf: RangeError, message: 'The string must be in the range up to A-ZZZZZZZ'});
})