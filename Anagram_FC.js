function anagram(str1,str2){
// check if both have the same length
// create freqcounter object for each string
// count freq of each character for both strings
// check if they have the same keys and
// check if each key have the same frequencies

    if(str1.length !== str2.length){
        return false;
    }
    let freqcounter1 = {}, freqcounter2 = {};
    for(let val of str1){
        freqcounter1[val] = (freqcounter1[val] || 0) + 1;
    }
    for(let val of str2){
        freqcounter2[val] = (freqcounter2[val] || 0) + 1;
    }
    for(let key in freqcounter1){
        if(!(key in freqcounter2)){
            return false;
        }
        if(freqcounter1[key] !== freqcounter2[key]){
            return false;
        }
    }
    return true;

}

anagram('iceman', 'cinema')