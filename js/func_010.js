// https://kodaktor.ru/func_3fb6a

const fn = f => f(x => fn(f)(x));
const func = fn(f => x => x <= 1 ? 1 : x * f(x - 1));
console.log(func(5));