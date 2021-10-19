// Example 1 remove from array
// Bài này em sẽ làm theo hướng dùng arguments đối tượng

function removeFromArray(arr) {
    // Chuyển đổi mảng đối tượng thành mảng thực
    var remove = [...arguments]; 
    // So sánh nếu giá trị index nào bằng -1 sẽ lấy ra
    // Hàm indexOf sẽ kiểm tra giá trị nếu không sẽ trả về -1 và có sẽ trả về chỉ số
    return arr.filter((x) => remove.indexOf(x) == -1); 
}
let a = removeFromArray([1, 2, 3, 1, 2, 3, 7, 8], 7);
let b = removeFromArray([1, 2, 3, 1, 2, 3, 7, 8], 1,2, 7);
console.log(a) // Kết quả là [1,2,3,1,2,3,8]
console.log(b) // Kết quả là [3,8]
// Example 2
// Bài 2 sẽ làm theo hướng lấy giá trị từ form và ép kiểu thành number rồi thực hiện tính toán
const numberOne = document.getElementById('numberOne')
const numberTwo = document.getElementById('numberTwo')
const add = document.querySelector('#add')
const subtract = document.querySelector('#subtract')
const divide = document.querySelector('#divide')
const factorial = document.querySelector('#factorial')
const multiple = document.querySelector('#multiple')
const power = document.querySelector('#power')

add.addEventListener('click', () => {
    console.log(Number(numberOne.value) + Number(numberTwo.value)) 
})
subtract.addEventListener('click', () => {
    console.log(Number(numberOne.value) - Number(numberTwo.value))
})
divide.addEventListener('click', () => {
    console.log(Number(numberOne.value) / Number(numberTwo.value))
})
multiple.addEventListener('click', () => {
    console.log(Number(numberOne.value) * Number(numberTwo.value))
})
power.addEventListener('click', () => {
    console.log(Math.pow(Number(numberOne.value), Number(numberTwo.value)))
})
factorial.addEventListener('click', () => {
    var fact = 1;
    for (i = 1; i <= Number(numberOne.value); i++) {
        fact *= i
    }
    console.log(fact)
})
// Example 3
// Dãy fibonacci sẽ có công thức F(n) = F(n-1) + F(n-2)
// Vì vậy, truyền tham số n vào 
// dùng vòng lặp để thực hiện tính công thức, và push vào mảng giá trị của dãy Fibonacci
// Nếu giá trị < 0 sẽ undefine
// giá trị < 2 sẽ bằng dãy 0, 1
// Giá trị > 2 sẽ tính theo công thức
// lấy gía trị cuối sẽ dùng (array.length - 1)
const fibo = num =>{
    let fibonacci = []
    for(let i = 0; i <= num; i++){
        fibonacci.push( i < 2 ? i : fibonacci[i-1] + fibonacci[i-2])
    }
    return fibonacci[fibonacci.length-1]
}
console.log(fibo(10))
// Example 4
// Bài 4 sẽ thực hiện 3 bước
// B1: tính số tuổi và nếu ngày mất chưa có sẽ lấy năm hiện tại bằng đối tượng Date và method getFullYear()
// tuổi = năm mất hoặc năm hiện tại trừ năm sinh
// B2: Dùng hàm map để lặp mảng people và trả về mảng tuổi của từng people
// B3: Dùng hàm filter để lấy giá trị lớn nhất trong mảng và in ra người lớn tuổi nhất
const people = [
    {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    }, 
    {
        name: "Draw",
        yearOfBirth: 1912,
    }
]
const findTheOldest = ()=>{
    const getYear = new Date()
    
    const age = people.map((index) =>{
        return ((index.yearOfDeath||getYear.getFullYear()) - index.yearOfBirth)
    }) 
    const oldest = people.filter(index=>{
        
        return ((index.yearOfDeath||getYear.getFullYear()) - index.yearOfBirth) == Math.max(...age)
    })
    console.log(oldest)   
}
findTheOldest()
// Example 5
// Bài 5 sẽ thực hiện 3  bước
// Sẽ dùng hàm match để trả về một mảng dưới dạng regex
// dung map để duyệt qua mảng và tạo ra mảng mới chứa tất cả các kí tự thường 
// dùng join (_) để nối chuỗi.
const snakeCase = (string) =>{
    const str = string.match(/[A-Z](?=[A-Z])|[A-Za-z]+/g)
    .map(x => x.toLowerCase())
    .join('_');
    console.log(str)
    return str
}

snakeCase("SnakeCase") // Chưa hoàn thành
snakeCase('hello world') // Hoàn thành
snakeCase('Hello, World???') // Hoàn thành
snakeCase('This is the song that never ends....') // Hoàn thành
snakeCase('snake-case') // Hoàn thành
snakeCase('SnAkE..CaSe..Is..AwEsOmE') // Hoàn thành
