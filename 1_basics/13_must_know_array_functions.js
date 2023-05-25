/**
 * Array Functions
 */
let iveMembersArray = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
];

console.log(iveMembersArray);

// push() : 값을 추가하고 리스트의 길이를 반환한다.
console.log(iveMembersArray.push('코드팩토리'));
console.log(iveMembersArray);

// pop() : 리스트의 마지막 값을 지우고 그 값을 반환한다.
console.log(iveMembersArray.pop());
console.log(iveMembersArray);

// shift() : 첫번째 값이 삭제되고 그 값을 반환한다.
console.log(iveMembersArray.shift());
console.log(iveMembersArray);

// unshift() : 첫번째에 값을 추가하고 리스트의 길이를 반환한다.
console.log(iveMembersArray.unshift('안유진'));
console.log(iveMembersArray);

// splice() : 첫번째 파라미터는 시작 인덱스, 두번째 파라미터는 삭제할 개수
console.log(iveMembersArray.splice(0, 2));
console.log(iveMembersArray);

iveMembersArray = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
];

console.log(iveMembersArray);

// concat() : 값을 추가한 array를 새로 만들어서 반환한다.
console.log(iveMembersArray.concat('코드팩토리'));
console.log(iveMembersArray);

// slice() : 첫번째 파라미터는 시작 인덱스, 두번째 파라미터는 어디까지 삭제할지 (인덱스 + 1)
console.log(iveMembersArray.slice(0, 2));
console.log(iveMembersArray);

// spread operator : array를 펼쳐서 값을 추가한다.
// 완전히 새로운 array를 만든다.
let iveMembersArray2 = [
    ...iveMembersArray,
];
console.log(iveMembersArray2);

let iveMembersArray3 = [
    iveMembersArray,
];
console.log(iveMembersArray3);

console.log('--------------------------');

let iveMembersArray4 = iveMembersArray;

console.log(iveMembersArray4);
console.log(iveMembersArray4 === iveMembersArray);
console.log(iveMembersArray4 === iveMembersArray2);

// join() : array를 string으로 묶을 때 사용한다.
console.log(iveMembersArray.join());
console.log(iveMembersArray.join('/'));
console.log(iveMembersArray.join(', '));

// sort()
// 오른차순으로 정렬
iveMembersArray.sort();
console.log(iveMembersArray);

console.log(iveMembersArray.reverse());

let numbersArray = [
    1,
    9,
    7,
    5,
    3,
];
console.log(numbersArray);

// a, b를 비교했을 때
// 1) a를 b보다 나중에 정렬하려면 (뒤에 두려면) 0보다 큰 숫자를 반환
// 2) a를 b보다 먼저 정렬하면(앞에 두려면) 0보다 작은 숫자를 반환
// 3) 원래 순서를 그대로 두려면 0을 반환
numbersArray.sort((a,b) => {
    return a>b ? 1 : -1;
});

console.log(numbersArray);

numbersArray.sort((a,b) => a > b ? -1 : 1);
console.log(numbersArray);

// map()
// array를 순회하면서 반한한 값을 가진 새로운 array를 만들어준다
console.log(iveMembersArray.map((x)=> `아이브 : ${x}`));

console.log(iveMembersArray.map((x) => {
    if(x === '안유진'){
        return `아이브 : ${x}`;
    } else {
        return x;
    }
}));
console.log(iveMembersArray);

// filter()
numbersArray = [1, 8, 7, 6, 3];

console.log(numbersArray.filter((x)=> x > 5));

// find() : 가장 첫번째로 조건에 맞는 값을 반환한다.
console.log(numbersArray.find((x)=> x % 2 ===0));

// findIndex()
console.log(numbersArray.findIndex((x) => x % 2 ===0));


/**
 * reduce()
 * 
 * 1. 초기값인 0이 p에 입력된다.
 * 2. numbersArray의 첫번째 값인 1이 n에 입력된다.
 * 3. p + n 즉, 0 + 1의 결과값인 1이 반환된다.
 * 4. 반환된 값이 p에 입력된다.
 * 5. array의 두번째 값인 8이 n에 입력된다.
 * 6. p + n 즉, 1 + 8의 결과값인 0가 반환된다.
 * 7. 반환된 값이 p에 입력된다.
 * 8. numbersArray의 모든 값들을 다 순회할 때까지 반복하여 결국 모든 값을 더한 25가 반환된다.
 */
console.log(numbersArray.reduce((p, n)=> p + n,0));