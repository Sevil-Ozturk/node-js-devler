export function circleArea(r){
    return Math.PI * r * r;
}

export function circleCircumference(r){
    return 2 * Math.PI * r;
}

module.exports = { circleArea, circleCircumference };