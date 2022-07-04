//boolean
let hasValue: boolean = true;//型注釈
let hasValue2 = true; //型推論
//number
let count: number = 10;
let float: number = 3.14;
let negative: number = -0.12;
//string
let string: string = 'hello';
let doubele: string = "hello";
let back: string = `hello`;

let hello: string;
hello = "hello";

// オブジェクト
const person: {
    name: string;
    age: number;
} = {
    name: 'Jack',
    age: 21
}

const personNest = {
    name: {
        first: "Jack",
        last: "Smith"
    },
    age: 21
}
// array
const fruits: string[] = ['Apple','Banana','Grape'];
const fruits2 = ['Apple','Banana','Grape',1];

const fruit = fruits[0];

// Tuple
const book: [string, number, boolean] = ['business',1500,false];
book.push(21);//初期値が厳しいけど、そのあとは面倒を見てくれません

// Enum 列挙型
enum CoffeSize {
    SHORT= 'SHORT',
    TALL= 'TALL',
    GRANDE= 'GRANDE',
    VENTI= 'VENTI'
}
const coffe = {
    hot: true,
    size: CoffeSize.TALL
}

