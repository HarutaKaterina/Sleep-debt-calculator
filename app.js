const getSleepHours = day => {
  if(day === 'Monday'){
    return 7;
  }else if(day === 'Tuesday'){
    return 10;
  }else if (day === 'Wednesday'){
    return 7;
  }else if(day === 'Thursday'){
    return 11;
  }else if(day === 'Friday'){
    return 6;
  }else if(day === 'Saturday'){
    return 9;
  }else if(day === 'Sunday'){
    return 10;
  }else {
    return 'Nothing';
  }
}
const getActualSleepHours = () => 
  getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') +getSleepHours('Saturday') + getSleepHours('Sunday');

const getIdealSleepHours = () =>{
  let idealHours = 8;
  return idealHours * 7;
}
const calculateSleepDebt = () =>{
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();
  if(actualSleepHours === idealSleepHours){
    return 'You got the perfect amount of sleep!';
  }else if(actualSleepHours > idealSleepHours){
    return 'You got ' + (actualSleepHours - idealSleepHours) + ' more hours sleep than needed!';
  }else if(actualSleepHours < idealSleepHours){
    return 'You should get some rest because you slept ' + (idealSleepHours - actualSleepHours) + ' hours less than you should, this week!';
  }else {
    return 'Error!';
  }
}
console.log(calculateSleepDebt());

// Rescriu conditiile pentru punctul 12

const getSleepHourss = day => {
  if(day === 'Monday'){
    return 6;
  }else if(day === 'Tuesday'){
    return 7;
  }else if (day === 'Wednesday'){
    return 7;
  }else if(day === 'Thursday'){
    return 3;
  }else if(day === 'Friday'){
    return 6;
  }else if(day === 'Saturday'){
    return 6;
  }else if(day === 'Sunday'){
    return 7;
  }else {
    return 'Nothing';
  }
}
const getActualSleepHourss = () => 
  7 + 5 + 6 + 6 + 6 + 6 +7;

const getIdealSleepHourss = idealHourss => idealHourss * 7;

const calculateSleepDebts = () =>{
  const actualSleepHourss = getActualSleepHourss();
  const idealSleepHourss = getIdealSleepHourss(8);
  if(actualSleepHourss === idealSleepHourss){
    return 'You got the perfect amount of sleep!';
  }else if(actualSleepHourss > idealSleepHourss){
    return 'You got ' + (actualSleepHourss - idealSleepHourss) + ' more hours sleep than needed!';
  }else if(actualSleepHourss < idealSleepHourss){
    return 'You should get some rest because you slept ' + (idealSleepHourss - actualSleepHourss) + ' hours less than you should, this week!';
  }else {
    return 'Error!';
  }
}
console.log(calculateSleepDebts());


