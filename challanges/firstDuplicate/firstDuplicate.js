function firstDuplicate(a) {
  let nums = {};
  for (let i = 0; i < a.length; i++) {
    if (a[i] in nums) {
      return a[i]; 
    }
    nums[a[i]] = 'HEY!';
  }
  return -1;
 }
 