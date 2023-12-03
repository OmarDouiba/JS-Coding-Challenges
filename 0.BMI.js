// const markWeights = 78;
// const markTall = 1.69;
// const johnWeights = 92;
// const johnTall = 1.95;
const markWeights = 95;
const markTall = 1.88;
const johnWeights = 85;
const johnTall = 1.76;

const markBMI = markWeights / (markTall * markTall);
const johnBMI = johnWeights / (johnTall * johnTall);
const markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI, markHigherBMI);