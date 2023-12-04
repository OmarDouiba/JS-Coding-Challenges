const markWeights = 78;
const markTall = 1.69;
const johnWeights = 92;
const johnTall = 1.95;
// const markWeights = 95;
// const markTall = 1.88;
// const johnWeights = 85;
// const johnTall = 1.76;

const markBMI = markWeights / (markTall * markTall);
const johnBMI = johnWeights / (johnTall * johnTall);

if (markBMI > johnBMI) {
  console.log("Mark's BMI is higher than John's!");
  // console.log(`Mark's BMI ${markBMI} is higher than John's ${johnBMI}!`)
} else {
  console.log("John's BMI is higher than Mark's!");
  // console.log(`John's BMI ${johnBMI} is higher than Mark's ${markBMI}!`)
}
