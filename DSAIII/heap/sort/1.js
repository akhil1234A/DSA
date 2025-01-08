class HeapSort {
  constructor() {
    this.heap = [];
  }

  // Helper method to build a MaxHeap
  buildMaxHeap(arr) {
    this.heap = arr;
    let startIndex = Math.floor(arr.length / 2) - 1;

    // Perform bubbledown on all non-leaf nodes
    for (let i = startIndex; i >= 0; i--) {
      this.bubbledown(i, arr.length);
    }
  }

  // Bubble down to maintain MaxHeap property
  bubbledown(index, size) {
    while (true) {
      let leftchild = 2 * index + 1;
      let rightchild = 2 * index + 2;
      let largest = index;

      if (leftchild < size && this.heap[leftchild] > this.heap[largest]) {
        largest = leftchild;
      }
      if (rightchild < size && this.heap[rightchild] > this.heap[largest]) {
        largest = rightchild;
      }
      if (largest === index) break;

      // Swap parent with the largest child
      [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
      index = largest;
    }
  }

  // Sort the array using HeapSort
  sort(arr) {
    // Step 1: Build a MaxHeap
    this.buildMaxHeap(arr);

    // Step 2: Extract elements from the heap
    for (let i = arr.length - 1; i > 0; i--) {
      // Swap the root (max element) with the last element
      [this.heap[0], this.heap[i]] = [this.heap[i], this.heap[0]];

      // Restore the MaxHeap property on the reduced heap
      this.bubbledown(0, i);
    }

    return this.heap; // The sorted array
  }
}

// Test HeapSort
const heapSort = new HeapSort();
const arr = [5, 3, 8, 1, 2, 7];
console.log("Original Array:", arr);

// const sortedArray = heapSort.sort(arr);
const sortedArray = heapSort.buildMaxHeap(arr);
// console.log("Sorted Array:", sortedArray);

console.log(heapSort.heap);