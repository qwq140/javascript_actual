/**
 * Immutable Object
 */
const yuJin = {
    name : '안유진',
    year : 2003,

    get age(){
        return new Date().getFullYear() - this.year +1;
    },

    set age(age){
        this.year = new Date().getFullYear() - age + 1;
    }
}

console.log(yuJin);

/**
 * Extensible
 * 
 * preventExtensions : 추가는 안되고 삭제는 된다.
 */
console.log(Object.isExtensible(yuJin));

yuJin['position'] = 'vocal';

console.log(yuJin);

Object.preventExtensions(yuJin);

console.log(Object.isExtensible(yuJin));

yuJin['groupName'] = '아이브';
console.log(yuJin);

delete yuJin['position'];
console.log(yuJin);

/**
 * Seal
 * 
 * configurable을 false로 바꾸는 것과 같은 효과이다.
 */
const yuJin2 = {
    name : '안유진',
    year : 2003,

    get age(){
        return new Date().getFullYear() - this.year +1;
    },

    set age(age){
        this.year = new Date().getFullYear() - age + 1;
    }
}
console.log(yuJin2);

console.log(Object.isSealed(yuJin2));

Object.seal(yuJin2);
console.log(Object.isSealed(yuJin2));

yuJin2['groupName'] = '아이브';
console.log(yuJin2);

delete yuJin2['name'];
console.log(yuJin2);

Object.defineProperty(yuJin2, 'name', {
    writable : false,
});

console.log(Object.getOwnPropertyDescriptor(yuJin2, 'name'));

/**
 * Freezed
 * 
 * 읽기 외에는 모든 기능이 불가능하다.
 * configurable 과 writable을 false로 빠구는 것과 같은 효과이다.
 */

const yuJin3 = {
    name : '안유진',
    year : 2003,

    get age(){
        return new Date().getFullYear() - this.year +1;
    },

    set age(age){
        this.year = new Date().getFullYear() - age + 1;
    }
}
console.log(Object.isFrozen(yuJin3));

Object.freeze(yuJin3);

console.log(Object.isFrozen(yuJin3));

yuJin3['groupName'] = '아이브';
console.log(yuJin3);

delete yuJin3['groupName'];
console.log(yuJin3);

// Object.defineProperty(yuJin2, 'name', {
//     value : '코드팩토리',
// });

console.log(Object.getOwnPropertyDescriptor(yuJin3, 'name'));

// 하위 오브젝트까지 freeze 되지않는다.
const yuJin4 = {
    name : '안유진',
    year : 2003,
    wonYoung : {
        name : '장원영',
        year : 2004,
    }
}
Object.freeze(yuJin4);

console.log(Object.isFrozen(yuJin4));
console.log(Object.isFrozen(yuJin4['wonYoung']));