let tableau = [{ name: 'jean', surname: 'jj' },
         { name: 'mattéo', surname: 'rienzo' }]

function keyValue (tableau, key) {
    let value = []
    for (const i of tableau){
        value.push(i[key])
    }
    return value
}
console.log(keyValue(tableau,'name'))