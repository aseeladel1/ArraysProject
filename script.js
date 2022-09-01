function alwaysHungry(arr) {
    var counter=0;
for(var i=0;i<arr.length;i++){
    if(arr[i] == "food"){
        console.log("yummy");
    }
    else if (arr[i] !=="food"){
        counter+=1;
        if(counter==arr.length){
            console.log("i am hungry")
            break;
        }
    }
    }
}

alwaysHungry([3.14, "food", "pie", true, "food"]);
alwaysHungry([4, 1, 5, 7, 2]);



function highPass(arr, cutoff) {
    var filteredArr = [];
    var counter=0;
    for(i=0;i<arr.length;i++){
        if(arr[i]>cutoff){
            filteredArr[counter]=arr[i];
            counter+=1;
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result);

function betterThanAverage(arr) {
    var sum = 0;
    var avg;
    var count = 0;
    for( var i=0;i<arr.length;i++){
        sum=sum+arr[i];
    }
    avg=sum/arr.length;
    for(var j=0;j<arr.length;j++){
        if(arr[j]>avg){
            count+=1;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result);




function reverse(arr) {
    var newarr = [];
    var counter = arr.length;
    for (var i = 0; i <= arr.length; i++) {
        if (counter >= 1) {
            newarr[i] = arr[counter - 1];
            counter -= 1;
        }
        else{return newarr;}
    }
    return newarr;
}

var result = reverse(["a", "b", "c", "d", "e","f"]);
console.log(result);


function fibonacciArray(n) {
    var fibArr = [0, 1];
    for(var i=2;i<n;i++){
        fibArr[i]=fibArr[i-1]+fibArr[i-2];
    }
    return fibArr;
}
var result = fibonacciArray(10);
console.log(result);