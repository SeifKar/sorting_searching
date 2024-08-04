Outer Loop:

Start with the second element ('i = 1') since the first element is trivially sorted.
Iterate through the array from the second element to the last element.

Key and Inner Loop:
Set 'key' to the current element 'arr[i]'.
Set 'j' to 'i - 1' (the last index of the sorted portion of the array).
While 'j' is greater than or equal to 0 and 'arr[j]' is greater than 'key', move 'arr[j]' one position to the right.
Decrement 'j'.

Insert Key:

Place the 'key' into its correct position in the sorted portion of the array.