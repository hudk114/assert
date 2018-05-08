class Expect {
  constructor (obj) {
    // TODO new调用
    this.obj = obj;
    // TODO 绑定this  
  }

  equal (o) {
    return this.obj === o;
  }

  isNull () {
    return this.obj === null;
  }

  isUndefined () {
    return typeof this.obj === 'undefined';
  }

  isUndefinedOrNull () {
    return this.isNull() || this.isUndefined();
  }

  isEmptyOrNull () {
    return this.isUndefinedOrNull() || this.obj === '';
  }

  isZeroOrNull () {
    return this.isUndefinedOrNull() || Number(this.obj) === 0;
  }

  isEmptyOrZeroOrNull () {
    return this.isEmptyOrNull() || this.isZeroOrNull();
  }

  isStr () {
    return typeof obj === 'string';
  }

  isNum () {
    return !isNull() && !isNaN(Number(this.obj));
  }

  isNaturalNum () {
    return /^\d+?$/.test(this.obj);
  }
  
  isPosInt () {
    return this.isNaturalNum() && Number(obj) > 0;
  }

  lengthShorterThan (num) {
    return this.obj.length < num;
  }

  lengthLongerThan (num) {
    return this.obj.length > num;
  }

  followReg (pattern) {
    return pattern.test(this.obj);
  }
}

export default obj => new Expect(obj);
