alert('Hello');

const userName = 'John';

alert(userName);

const userAge = parseFloat(prompt('Enter your age'));

const massege = 'Your age is ' + userAge;

alert(massege);

const newAge = addOne(userAge);

alert(newAge);

if (userAge < 18) {
    alert('You are not adult');
} else if (userAge >80 && userAge < 100) {
    alert('You are between 80 and 100');
} else if (userAge > 100) {
    alert('You have seen a lot in your life');
} else {
    alert('You are adult')
}


function addOne (num){
    const result = num + 1;
    return result;
}
