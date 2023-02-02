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

  max() {}

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;
