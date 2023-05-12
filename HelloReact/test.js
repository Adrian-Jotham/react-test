function SUM(...x){
    let total = 0;
    for (i of x){
    total += i;
    }
    return total;
}
console.log(SUM(3, 3, 2, 9, 10, 25));
