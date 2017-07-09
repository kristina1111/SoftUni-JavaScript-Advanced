function manager(worker) {
    const cureAmount = 0.1;
    function calculateCureAmountNeeded(weight, experience) {
        return cureAmount*weight*experience;
    }
    if(worker.handsShaking == true){
        worker.bloodAlcoholLevel += calculateCureAmountNeeded(worker.weight, worker.experience);
        worker.handsShaking = false;
    }
    return worker;
}
// console.log(manager({
//     weight: 80,
//     experience: 1,
//     bloodAlcoholLevel: 0,
//     handsShaking: true
// }));
console.log(manager({
    weight: 120,
    experience: 20,
    bloodAlcoholLevel: 200,
    handsShaking: true
}));