function maxTableau(tableau) {
    tableau.sort(function(a, b) {
        return a - b;
      });
      
    return tableau[tableau.length - 1]

}

console.log(maxTableau([737,738,855,567,51,940,180,481,250,92,744,919,91,890,301,530,478,149,670,354,871,891,243,537,910,885,397,242,913,340,799,372,233,900,99,429,108,979,691,72,205,851,792,598,560,976,771,283,574,268,127,614,523,503,316,823,924,374,977,20,356,704,317,371,724,857,873,860,684,570,418,212,154,27,8,682,57,866,896,559,120,961,960,133,836,831,384,395,592,76,790,733,575,49,246,774,68,158,714,711]))