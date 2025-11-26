//this requires you set a target of ES2015 or later
const myArray = [10, 20, 30];
//try removing target from jsconfig.json and see what happens with the following line
for (const entry of myArray.entries()) {
    console.log(entry);
}
