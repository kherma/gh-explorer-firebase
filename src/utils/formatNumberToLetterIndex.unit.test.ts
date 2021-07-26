import { formatNumberToLetterIndex } from './formatNumberToLetterIndex';

const checkDescriptionAtTime = (numOfStars: number, expectedNumOfStars: string | number) => {
  it(`${numOfStars} should be formated into ${expectedNumOfStars}`, () => {
    const stars = formatNumberToLetterIndex(numOfStars);
    expect(stars).toEqual(expectedNumOfStars);
  });
};

describe('Format Tens To Letter Index', () => {
  checkDescriptionAtTime(0, 0);
  checkDescriptionAtTime(1, 1);
  checkDescriptionAtTime(-1, -1);
  checkDescriptionAtTime(10, 10);
  checkDescriptionAtTime(-10, -10);
  checkDescriptionAtTime(50, 50);
  checkDescriptionAtTime(-50, -50);
  checkDescriptionAtTime(99, 99);
  checkDescriptionAtTime(-99, -99);
});

describe('Format Hundreds To Letter Index', () => {
  checkDescriptionAtTime(100, 100);
  checkDescriptionAtTime(-100, -100);
  checkDescriptionAtTime(123, 123);
  checkDescriptionAtTime(-123, -123);
  checkDescriptionAtTime(150, 150);
  checkDescriptionAtTime(-150, -150);
  checkDescriptionAtTime(999, 999);
  checkDescriptionAtTime(-999, -999);
});

describe('Format Thousands To Letter Index', () => {
  checkDescriptionAtTime(1000, '1k');
  checkDescriptionAtTime(-1000, '-1k');
  checkDescriptionAtTime(1099, '1.1k');
  checkDescriptionAtTime(-1099, '-1.1k');
  checkDescriptionAtTime(1230, '1.2k');
  checkDescriptionAtTime(-1230, '-1.2k');
  checkDescriptionAtTime(1500, '1.5k');
  checkDescriptionAtTime(-1500, '-1.5k');
  checkDescriptionAtTime(9999, '10k');
  checkDescriptionAtTime(-9999, '-10k');
});

describe('Format Ten thousands To Letter Index', () => {
  checkDescriptionAtTime(10000, '10k');
  checkDescriptionAtTime(-10000, '-10k');
  checkDescriptionAtTime(10099, '10.1k');
  checkDescriptionAtTime(-10099, '-10.1k');
  checkDescriptionAtTime(12300, '12.3k');
  checkDescriptionAtTime(-12300, '-12.3k');
  checkDescriptionAtTime(15000, '15k');
  checkDescriptionAtTime(-15000, '-15k');
  checkDescriptionAtTime(99999, '100k');
  checkDescriptionAtTime(-99999, '-100k');
});

describe('Format Hundred thousands To Letter Index', () => {
  checkDescriptionAtTime(100000, '100k');
  checkDescriptionAtTime(-100000, '-100k');
  checkDescriptionAtTime(100099, '100k');
  checkDescriptionAtTime(-100099, '-100k');
  checkDescriptionAtTime(123000, '123k');
  checkDescriptionAtTime(-123000, '-123k');
  checkDescriptionAtTime(150000, '150k');
  checkDescriptionAtTime(-150000, '-150k');
  checkDescriptionAtTime(999999, '999k');
  checkDescriptionAtTime(-999999, '-999k');
});
