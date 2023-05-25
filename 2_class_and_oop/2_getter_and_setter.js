/**
 * Getter and Setter
 */
class IdolModel {
    name;
    year;

    constructor(name, year){
        this.name = name;
        this.year = year;
    }

    /**
     * 데이터를 가공해서 새로운 데이터를 반환할때
     * private 값을 반환할때
     */
    get nameAndYear(){
        return `${this.name}-${this.year}`;
    }

    set setName(name){
        this.name = name;
    }
}

const yuJin = new IdolModel('안유진',2003);
console.log(yuJin);
console.log(yuJin.nameAndYear);

yuJin.setName = '장원영';
console.log(yuJin);

// #은 ES7에서 지원
// immutable 프로그래밍에서는 setter는 사용하지 않는다.
class IdolModel2{
    #name;
    year;

    constructor(name, year){
        this.#name = name;
        this.year = year;
    }

    get name(){
        return this.#name;
    }

    set name(name){
        this.#name = name;
    }
}

const yuJin2 = new IdolModel2('안유진', 2003);
console.log(yuJin2); // private는 외부에서 직접적으로 access 하지 못한다.
console.log(yuJin2.name);
yuJin2.name = '코드팩토리';
console.log(yuJin2.name);