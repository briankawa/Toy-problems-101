function calculateDemeritPoints(Speed) {
  const speedLimit = 70;
  const kmPerDemerit = 5;
  const demerits = Math.floor((Speed - speedLimit) / kmPerDemerit);

  if (Speed <= speedLimit) {
    console.log("Ok");
  } else if (demerits <= 12) {
    console.log("Your demerit points:", demerits);
  } else {
    console.log("License suspended");
  }
}

calculateDemeritPoints(Speed); // Replace with the actual car speed