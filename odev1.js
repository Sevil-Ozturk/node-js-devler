arguments = process.argv.slice(2)
let r = arguments[0]*1;

function roundArea (r){
    let area = 3 * r * r;
    return area;
}

let area = roundArea(r);
console.log(`yarıçapı ${r} olan dairenin alanı = ${area}`);
