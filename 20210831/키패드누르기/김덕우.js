function solution(numbers, hand) {
    var answer = '';
    const lastPressedNum = {
        left: 10,
        right: 12,
    }
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i] || 11;
        const remainder = number % 3;
        let pressedThumb;
        if ( remainder === 1 ) {
            pressedThumb = 'L';
        } else if ( remainder === 0 ) {
            pressedThumb = 'R';
        } else {
            const leftDistance = parseInt(Math.abs(lastPressedNum.left - number) / 3, 10) + Math.abs(lastPressedNum.left - number) % 3;
            const rightDistance = parseInt(Math.abs(lastPressedNum.right - number) / 3, 10) + Math.abs(lastPressedNum.right - number) % 3;
            if ( leftDistance === rightDistance ) {
                pressedThumb = hand === 'right' ? 'R' : 'L';
            } else if (leftDistance > rightDistance) {
                pressedThumb = 'R';
            } else {
                pressedThumb = 'L';
            }
        }

        if ( pressedThumb === 'R' ) {
            lastPressedNum.right = number;
        } else {
            lastPressedNum.left = number;
        }
        answer += pressedThumb;
    }

    return answer;
}

console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], 'left'));

// 1   2   3
// 4   5   6
// 7   8   9
// 10  11  12


