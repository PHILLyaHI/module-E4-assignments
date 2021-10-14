function myFunc(string, object) {
    if (string in object) {
        object.hasOwnProperty(string)
        return true;
    } else {
        return false;
    }
};

let result = myFunc('something', {something: 'something1'});
console.log(result);