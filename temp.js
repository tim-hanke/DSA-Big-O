function towerOfHanoi(startRod, destinationRod, extraRod, discs) {
  // base case
  if (discs <= 0) {
    return;
  }

  towerOfHanoi(startRod, extraRod, destinationRod, discs - 1);

  console.log(`Move disk ${discs} from ${startRod} to ${destinationRod}`);

  towerOfHanoi(extraRod, destinationRod, startRod, discs - 1);
}

towerOfHanoi("A", "C", "B", 3);
