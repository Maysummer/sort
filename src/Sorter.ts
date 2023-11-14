interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

export class Sorter {
  //long method
  /*collection: number[];

  constructor(collection: number[]) {
    this.collection = collection;
  }*/

  //shorter method by using a modifier inside the constructor argument
  constructor(public collection: Sortable) {}

  sort() :void {
    const {length} = this.collection;

    for (let i=0; i < length; i++) {
      for (let j=0; j < length - i - 1; j++) {
        if (this.collection.compare(j, j+1)) {
          this.collection.swap(j, j+1);
        }
      }
    }
  }
}