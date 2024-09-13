
// Regular log
console.log("Hello World!")

// warning!
console.warn("CODE MAY CONTAIN BUGS!🪲");

// Error :|
console.error("Oh Shit! Not Good.💀");

// Styled
console.log("%cRoses are red, %cviolets are blue, %cI love JavaScript, %cyou should too.",
"color:red;font-size:10px;font-weight:bold",
"color:blue;font-size:10px;font-weight:bold",
"color:orange;font-size:10px;font-weight:bold",
"color:teal;font-size:10px;font-weight:bold",
);

// Time / TimeEnd
console.time("Insertion sort(1000)")
let numbers = Array.from({length:1000}, () => Math.floor(Math.random() * 1000));
function insertionSort(arr, len = arr.length) {
    let j, current_value;
    for(let i = 1; i < len; i++){
        j = i;
        current_value = arr[i];
        while((j - 1) >= 0 && arr[j-1] > current_value){
            arr[j] = arr[j-1];
            j--;
        }
        arr[j] = current_value;
    }
}
insertionSort(numbers);
console.timeEnd("Insertion sort(1000)")

//table
const countries = [
    {
        name: 'Eiffel Tower',
        height_m: 324,
        city: "Paris"
    },
    {
        name: "Burj Khalifa",
        height_m: 828,
        city: "Dubai"
    },
    {
        name: "CN Tower",
        height_m: 553,
        city: "Toronto"
    },
]
console.table(countries);

// Assert / Testing
 console.assert(1 === 2, "1 is not equal to 2!");

// counting
const fruits = ["apple🍎", "orange🍊","Pear🍐", "apple🍎" , "pear🍐", "orange🍊", "orange🍊"];
fruits.forEach(fruit => console.count(fruit));

// Interpolated
 console.log("I love %s%d%s.", "JavaScript", 30, "👨🏻‍💻");


// Info
 console.info("Did you know The oldest known “your mom” joke is 3,500 years old! same as your mom.");

//clearing
// console.clear();