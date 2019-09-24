export const gigasecond = firstDate => {
  let miliSec = new Date(firstDate).getTime();
  let seconds = miliSec / 1000;
  let plusGig = seconds + Math.pow(10, 9);
  return new Date(plusGig * 1000);
};
