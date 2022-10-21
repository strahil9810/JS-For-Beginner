function equalWords([word1, word2]){
    let firstWord = word1.toLowerCase();
    let secondWord = word2.toLowerCase();

    if (firstWord == secondWord){
        console.log("yes");
    }
    else{
        console.log("no")
    }
}
equalWords(["Russia", "win"])