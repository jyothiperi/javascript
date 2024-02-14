function wordBlank(mynoun, myadjective, myverb, myadverb){
    var result ="   ";
    result = 'My'+ myadjective + mynoun + myverb + myadverb;
    return result;
}
console.log(wordBlank('dog', 'big', 'runs', 'fast'));
