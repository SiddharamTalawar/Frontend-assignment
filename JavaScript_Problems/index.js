function toCase(str) {
    const lowerCase = str.toLowerCase();
    const upperCase = str.toUpperCase();
    return `${lowerCase}-${upperCase}`;
  }


  
function firstChar(str) {
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== " ") {
        return str[i];
      }
    }
    return "";
  }  


function rotateArray(arr) {
    const firstElement = arr.shift();
    arr.push(firstElement);
    return arr;
  }  

//calling the functions
console.log(toCase("Hello World"));
console.log(firstChar("Hello World"));
console.log(rotateArray([1, 2, 3, 4, 5]));  