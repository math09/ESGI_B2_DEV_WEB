function chaineDeCaractere2(chaine2) {
    return chaine2.sort(function(x,y) {
        return x.toString().localeCompare(y.toString());
    });
}

console.log(chaineDeCaractere2(["p","L","o","H","L","c","I","w","w","J","d","n","g","V","r","z","f","z","I","m","C","d","o","s","L","m","O","l","g","w","H","X","Y","L","q","U","A","z","I","X","V","p","l","U","S","D","T","S","n","x","h","M","u","B","Q","O","y","T","q","X","L","F","D","k","y","p","b","u","e","T","k","t","q","G","s","j","D","h","a","Q","M","j","Z","s","Q","q","p","M","B","F","H","u","z","n","y","f","F","g","W","s"]));