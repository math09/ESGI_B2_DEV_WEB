let tableau = ['cest cool','trop génial en fait', 'je suis la plus longue']
let plusLongue = ''
for (const i of tableau) {
    if (i.length > plusLongue.length){
        plusLongue = i
    }
}
console.log(plusLongue)