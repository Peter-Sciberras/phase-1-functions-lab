// Code your solution in this file!
function distanceFromHqInBlocks(blockNum){
    let hqBlock = 42;
    return Math.abs(blockNum - hqBlock)
}
function distanceFromHqInFeet(feetNum){
    let hqFeet = 42;
    return Math.abs(feetNum - hqFeet)*264;
}
function distanceTravelledInFeet (start, destination) {
    return Math.abs(destination - start)*264;
}
function calculatesFarePrice(start, destination) {
  let distanceTravelled = distanceTravelledInFeet(start, destination);
  console.log(distanceTravelled);
    if (distanceTravelled <= 400) {
      return 0;
    } else if (distanceTravelled > 400 && distanceTravelled <=2000) {
      return Math.abs(distanceTravelled - 400) * 0.02;      
    } else if (distanceTravelled > 2000 && distanceTravelled <=2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }