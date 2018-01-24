console.log('start');

setTimeout(() => {
    console.log('middle1');
}, 0);

console.log('end');

let apples = (callback1, callback2) => {
    console.log("apples");
    callback1();
    callback2();
};

let bananas = () => {
    console.log("bananas");
}

let mangoes = () => {
    console.log("mangoes")
}

apples(bananas, mangoes);

