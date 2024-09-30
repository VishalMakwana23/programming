const arr = ["abcdef", "abcd", "abcde", "abc"];

function longestSuffix(array) {
    let str = arr[0];
    let prefix = "";
    
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        
        for (let j = 1; j < array.length; j++) {
            console.log("array[j][i]",array[j][i])
            const element = array[j][i];
            
            if (element !== char) return prefix;
        }
        prefix = prefix + char;
        console.log("prefix", prefix)
    }
    return prefix;
}
console.log("🚀 :====== longestSuffix:", longestSuffix(arr))
