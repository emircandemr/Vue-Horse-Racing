// export const stopwatch = () => {
//     const value = {
//         minute : 0,
//         second : 0,
//         millisecond : 0,
//         timer : () => {
//             setInterval(() => {
//                 if (value.millisecond < 100) {
//                     value.millisecond += 1;
//                 } else if (value.second < 60) {
//                     value.second += 1;
//                     value.millisecond = 0;
//                 } else {
//                     value.minute += 1;
//                     value.second = 0;
//                 }
//             }, 10);
//             return value
//         }

//     }
//     return value;   
// }

// if(millisecond.value < 100){
//     millisecond.value = millisecond.value + 1
// }
// else{
//     millisecond.value = 0
//     if(second.value < 60){
//         second.value = second.value + 1
//     }
//     else{
//         second.value = 0
//         minute.value = minute.value + 1
//     }
// }