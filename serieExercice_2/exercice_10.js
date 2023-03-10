function deleteVoyelle (string) {
    let phrase = ''
    const voyelle = ['a','e','i','o','u','y']
    for (const i of string){
        if (voyelle.includes(i) === false){
            phrase +=i.toUpperCase()
        }
        else {
         phrase += i   
        }
        
    }
    return phrase
}
console.log(deleteVoyelle('coucou est-ce que ca marche ?'))