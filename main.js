function insertionSort(arr) {
    // Start from the second element as the first element is already "sorted"
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i]; // The current element to be inserted
        let j = i - 1;

        // Move elements of arr[0..i-1], that are greater than key, to one position ahead of their current position
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key; // Insert the key into its correct position
    }
    return arr;
}

// Test the insertionSort function
const testArray = [12, 11, 13, 5, 6];
console.log("Original array:", testArray);
console.log("Sorted array:", insertionSort(testArray));
