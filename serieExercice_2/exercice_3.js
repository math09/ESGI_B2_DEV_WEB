function deleteVoyelle (string) {
    const voyelle = ['a','e','i','o','u','y']
    for (const i of voyelle){
        string = string.replaceAll(i,'')
    }
    return string
}
console.log(deleteVoyelle('coucou'))