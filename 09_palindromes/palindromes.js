// filter to compare if firstIndex and lastIndex are equal to each other 

const palindromes = function (str) {
    let cleanStr = str.replace(/[|&;$!%@"<>()+,.]/g, "").toLowerCase();
    cleanStr = cleanStr.replaceAll(" ","");
    let reverse = cleanStr.split("").reverse().join("");
    return cleanStr === reverse;
};

// Do not edit below this line
module.exports = palindromes;
