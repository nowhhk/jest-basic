const Calculator = require('../calculator.js');

describe('Calculator', () => {
  // describe로 연관있는 테스트를 그룹화
  let cal;
  beforeEach(() => {
    cal = new Calculator();
  }); // beforeEach: 모든 테스트 전에 실행되어야할 함수. 각각의 테스트가 독립적이고 서로 영향 주지 않도록 하기위해

  it('inits with 0', () => {
    expect(cal.value).toBe(0);
  });

  it('sets', () => {
    cal.set(9);
    expect(cal.value).toBe(9);
  });

  it('clear', () => {
    cal.set(9);
    cal.clear();
    expect(cal.value).toBe(0);
  });

  it('adds', () => {
    cal.set(1);
    cal.add(2);

    expect(cal.value).toBe(3);
  });

  //ERROR TEST
  it('add should throw an error if value is greater than 100', () => {
    expect(() => {
      cal.add(101);
    }).toThrow('Value can not be greater than 100');
  });

  it('subtracts', () => {
    cal.subtract(1);

    expect(cal.value).toBe(-1);
  });

  it('multiplies', () => {
    cal.set(5);
    cal.multiply(4);

    expect(cal.value).toBe(20);
  });

  describe('divides', () => {
    it('0 / 0 === NaN', () => {
      cal.divide(0);
      expect(cal.value).toBe(NaN);
    });
    it('1 / 0 === Infinity', () => {
      cal.set(1);
      cal.divide(0);
      expect(cal.value).toBe(Infinity);
    });
    it('4 / 4 === 1', () => {
      cal.set(4);
      cal.divide(4);

      expect(cal.value).toBe(1);
    });
  });
});
