export const stopwatch = () => {
    const minute = 0 ;
    const second = 0 ;
    const millisecond = 0 ;

    const timer = setInterval(() => {
        if (millisecond < 100) {
            millisecond += 1;
        } else if (second < 60) {
            second += 1;
            millisecond = 0;
        } else {
            minute += 1;
            second = 0;
        }
    }, 10);
    return timer;   
}
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