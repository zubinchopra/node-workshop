let sayHi = () => {
    console.log('Hi');
}

let sayHello = () => {
    console.log('Hello');
}

let app = () => {
    return {
        sayHi: sayHi,
        sayHello: sayHello
    };
};

module.exports = app;






