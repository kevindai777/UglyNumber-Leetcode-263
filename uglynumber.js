//Objective is to see whether a number is 'ugly', or if it's prime factors only 
//consist of 2, 3, and 5.

let num = 6


//O(n) solution where n is the number of prime factors of the integer

let check = [2,3,5]
    
//Keep dividing it by the factors of 2,3,5
for (let val of check) {
    while (num && num % val == 0) {
        num /= val
    }
}

//If the final result isn't 1, that means it had another factor
//other than the ones listed
return num == 1