class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }
  // add(item) {
  //   this.items.push(item)
  //   this.items.sort();
  //   this.length = this.items.length;
  // }

  add(item) {
    let i = 0;
    while (i < this.items.length && this.items[i] < item) {
      i++;
    }
    this.items.splice(i, 0, item);
    this.length = this.items.length;
  }

  get(pos) {
    if (pos > this.items.length) {
      throw new Error("OutOfBounds");
    } else {
      return this.items[pos];
    }
  }

  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items[this.items.length - 1];
    }
  }

  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items[0];
    }
  }

  sum() {
    if (this.items.length === 0) {
      return 0;
    } else {
      let resultSum = 0;
      this.items.forEach((element) => (resultSum += element));
      return resultSum;
    }
  }

  avg() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      let intermediateSum = 0;
      let average = 0;
      this.items.forEach((element) => (intermediateSum += element));
      average = intermediateSum / this.items.length;
      return average;
    }
  }
}

module.exports = SortedList;
