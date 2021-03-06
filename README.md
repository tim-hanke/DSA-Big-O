# Big O notation assignment

In these drills, you'll practice determining the big O complexity of algorithms. For each drill, we'll provide a code snippet with a function, and you'll work out the big O complexity by analyzing the code without running it.

## 1. What is the Big O for this?

1. Determine the Big O for the following algorithm: You are sitting in a room with 15 people. You want to find a playmate for your dog, preferably of the same breed. So you want to know if anyone out of the 15 people have the same breed as your dog. You stand up and yell out, who here has a golden retriever and would like to be a playdate for my golden. Someone yells - "I do, be happy to bring him over"

- `O(1) because it would not matter how many people are in the room (assuming that everyone hears and it's a normal room, not some sort of infinite room situation)`

2. Determine the Big O for the following algorithm: You are sitting in a room with 15 people. You want to find a playmate for your dog who is of the same breed. So you want to know if anyone out of the 15 people have the same breed as your dog. You start with the first person and ask him if he has a golden retriever. He says no, then you ask the next person, and the next, and the next until you find someone who has a golden or there is no one else to ask.

- `O(n) because your worst case is asking everyone in the room, regardless of how many people are there`

## 2. Even or odd

What is the Big O of the following algorithm? Explain your answer

```
function isEven(value) {
    if (value % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}
```

- `O(1) because the code will execute the same way, the same number of times, the same time complexity, regardless of the input size`

## 3. Are you here?

What is the Big O of the following algorithm? Explain your answer

```
function areYouHere(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        const el1 = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            const el2 = arr2[j];
            if (el1 === el2) return true;
        }
    }
    return false;
}
```

- `O(a * b) it is very similar to O(n^2), polynomial time, but arr1 and arr2 are not necessarily the same lengths, so it's not a square`

## 4. Doubler

What is the Big O of the following algorithm? Explain your answer

```
function doubleArrayValues(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= 2;
    }
    return array;
}
```

- `O(n) it's linear because the inside of that loop is going to execute the same number of times as the size of the input array`

## 5. Naive search

What is the Big O of the following algorithm? Explain your answer

```
function naiveSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
}
```

- `O(n) because running through all items in the array is worst case`

## 6. Creating pairs:

What is the Big O of the following algorithm? Explain your answer

```
function createPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            console.log(arr[i] + ", " +  arr[j] );
        }
    }
}
```

- `O(n^2) because the inner loop will run arr * arr times`

## 7. Compute the sequence

What does the following algorithm do? What is its runtime complexity? Explain your answer

```
function compute(num) {
  let result = [];
  for (let i = 1; i <= num; i++) {

      if (i === 1) {
          result.push(0);
      }
      else if (i === 2) {
          result.push(1);
      }
      else {
          result.push(result[i - 2] + result[i - 3]);
      }
  }
  return result;

}
```

- `That looks like it's a fibonacci sequence generator. It would be O(n) because the inside of the loop will run once for each item up to num.`

## 8. An efficient search

In this example, we return to the problem of searching using a more sophisticated approach than in naive search, above. Assume that the input array is always sorted. What is the Big O of the following algorithm? Explain your answer

```
function efficientSearch(array, item) {
  let minIndex = 0;
  let maxIndex = array.length - 1;
  let currentIndex;
  let currentElement;

  while (minIndex <= maxIndex) {
      currentIndex = Math.floor((minIndex + maxIndex) / 2);
      currentElement = array[currentIndex];

      if (currentElement < item) {
          minIndex = currentIndex + 1;
      }
      else if (currentElement > item) {
          maxIndex = currentIndex - 1;
      }
      else {
          return currentIndex;
      }
  }
  return -1;

}
```

- `O(log(n)) because by halving the problem on each iteration, this binary search's run time grows slower than the input size`

## 9. Random element

What is the Big O of the following algorithm? Explain your answer

```
function findRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
```

- `O(1) that is constant time because the size of arr has no effect on execution time`

## 10. What Am I?

What does the following algorithm do? What is the Big O of the following algorithm? Explain your answer

```
function isWhat(n) {
  if (n < 2 || n % 1 !== 0) {
    return false;
  }
  for (let i = 2; i < n; ++i) {
    if (n % i === 0) return false;
  }
  return true;
}
```

- `The function returns true if n is a prime number, false if n is not prime. It is O(n), linear time, because the run time will scale with the input size.`

## 11. Tower of Hanoi

The Tower of Hanoi is a very famous mathematical puzzle (some call it game!). This is how it goes:

- There are three rods and a number of disks of different sizes which can slide onto any rod. The puzzle starts with the disks neatly stacked in ascending order of size on one rod, the smallest disk at the top (making a conical shape). The other two rods are empty to begin with.
- The goal of the puzzle is to move the entire stack of rods to another rod (can't be the original rod where it was stacked before) where it will be stacked in the ascending order as well. This should be done obeying the following rules: i) Only one disk may be moved at a time ii) Each move consists of taking the upper disk from one of the rods and sliding it onto another rod, on top of the other disks that may already be present on that rod. iii) A larger disk may not placed on top of a smaller disk

### Input:

|  Rod A  | Rod B | Rod C |
| :-----: | :---: | :---: |
|   x1x   |       |       |
|  xx2xx  |       |       |
| xxx3xxx |       |       |

### Output:

| Rod A | Rod B |  Rod C  |
| :---: | :---: | :-----: |
|       |       |   x1x   |
|       |       |  xx2xx  |
|       |       | xxx3xxx |

- Derive an algorithm to solve the Tower of Hanoi puzzle.
- Implement your algorithm using recursion. Your program should display each movement of the disk from one rod to another.

```
function towerOfHanoi(startRod, destinationRod, extraRod, discs) {
  // base case
  if (discs <= 0) {
    return;
  }

  towerOfHanoi(startRod, extraRod, destinationRod, discs - 1);

  console.log(`Move disk ${discs} from ${startRod} to ${destinationRod}`);

  towerOfHanoi(extraRod, destinationRod, startRod, discs - 1);
}
```

1. If you are given 5 disks, how do the rods look like after 7 recursive calls?

### After 7 moves

|    Rod A    |  Rod B  | Rod C |
| :---------: | :-----: | :---: |
|             |         |       |
|             |         |       |
|             |   x1x   |       |
|  xxxx4xxxx  |  xx2xx  |       |
| xxxxx5xxxxx | xxx3xxx |       |

2. How many moves are needed to complete the puzzle with 3 disks? with 4 disks? with 5 disks?

- `3 discs 7 moves, 4 discs 15 moves, 5 discs 31 moves`

3. What is the runtime of your algorithm?

- `O(2^n) because extra discs (input size) exponentially increase the moves needed (run time)`

## 12. Iterative version

Solve the drills 1 - 7 from your previous checkpoint (Recursion) iteratively.

### Counting Sheep

```
function jumpSheep(numOfSheep) {
  for (numOfSheep; numOfSheep > 0; numOfSheep--) {
    console.log(`${numOfSheep}:Another sheep jumps over the fence`);
  }
  console.log("All sheep jumped over the fence");
}
```

### Power Calculator

```
function powerCalculator(base, exp) {
  if (exp < 0) {
    return "exponent should be >= 0";
  }
  if (exp === 0) {
    return 1;
  }
  if (exp === 1) {
    return base;
  }
  let ans = base;
  for (let i = 2; i <= exp; i++) {
    ans *= base;
  }
  return ans;
}
```

### Reverse String

```
function reverseString(str) {
  let strArr = str.split("");
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += strArr[i];
  }
  return newStr;
}
```

### nth Triangular Number

```
function nthTriangularNumber(n) {
  let nth = 0;
  for (let i = 0; i <= n; i++) {
    nth += i;
  }
  return nth;
}
```

### String Splitter

```
function stringSplit(str, spl) {
  if (!str.includes(spl) || str.length === 1) {
    return [str];
  }
  let splitStringArray = [];
  let splIndex;
  if (spl.length === 0) {
    splIndex = 1;
  } else {
    splIndex = str.indexOf(spl);
  }

  while (str.includes(spl)) {
    const slice = str.slice(0, splIndex);
    splitStringArray.push(slice);
    str = str.slice(splIndex + spl.length);
    splIndex = spl.length === 0 ? 1 : str.indexOf(spl);
  }
  splitStringArray.push(str);
  return splitStringArray;
}
```

### Fibonacci

```
function fibonacciSequence(num) {
  let sequence = [1, 1];
  for (let i = 2; i < num; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence;
}
```

### Factorial

```
function factorial(n) {
  let factorial = 1;
  for (let i = 2; i <= n; i++) {
    factorial *= i;
  }
  return factorial;
}
```

## 13. Recursive Big O

Take your solutions from the recursive exercises that you completed in the previous checkpoint and identify the time complexities (big O) of each of them.

### Counting Sheep

- `O(n)`

### Power Calculator

- `O(n)`

### Reverse String

- `O(n)`

### nth Triangular Number

- `O(n)`

### String Splitter

- `O(n)`

### Fibonacci

- `O(2^n)`

### Factorial

- `O(n)`

### Find a way out of the maze

- `O(n)`

### Find ALL the ways out of the maze

- `O(3^n)`

### Anagrams

- `O(n^2)`

### Organization Chart

- `O(n^2)`

### Binary Representation

- `O(n)`

## 14. Iterative Big O

Take your solutions from the iterative exercises today and identify the time complexities (big O) of each of them.

### Counting Sheep

- `O(n)`

### Power Calculator

- `O(n)`

### Reverse String

- `O(n)`

### nth Triangular Number

- `O(n)`

### String Splitter

- `O(n)`

### Fibonacci

- `O(n)`

### Factorial

- `O(n)`
