function deleteVoyelle (string) {
    let compteur = 0
    const voyelle = ['a','e','i','o','u','y']
    for (const i of string){
        if (voyelle.includes(i)){
            compteur++
        }
    }
    return compteur
}
console.log(deleteVoyelle('coucou'))