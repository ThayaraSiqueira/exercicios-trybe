// Rewrite the code from the previous exercise so that it uses async/await

const doMath = require("./exercise1");

const a = Math.floor(Math.random() * 100 + 1)
const b = Math.floor(Math.random() * 100 + 1)
const c = Math.floor(Math.random() * 100 + 1)

async function callDoMath() {
    try { const result = await doMath(a,b,c)
    console.log(result);
    } catch (e) {
        console.error(e.message);
    }
}

callDoMath();