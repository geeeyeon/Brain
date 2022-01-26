function solution(numbers) {
    const answer = new Set();

    const getNumber = (numberArray, currentNumber) => {
        for (let i = 0; i < numberArray.length; i ++) {
            const num = numberArray[i];
            const newArray = [...numberArray];
            newArray.splice(i, 1);
            const newNumber = currentNumber + num;

            if (isPrime(newNumber)) {
                answer.add(Number(newNumber));
            }

            getNumber(newArray, newNumber)
        }
    }

    const isPrime = (num) => {
        if (num < 2) return false;
        if (num === 2) return true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    const arr = numbers.split("");
    getNumber(arr, '');
    
    return answer.size;
}


console.log(solution("011"));
