function removeElement(nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (nums.includes(val) && nums.indexOf(val) === i) {
      nums.splice(i, 1);
      i--;
    }
  }

  return nums.length;
}

console.log(removeElement([3,3,3], 3))