function spinWords(str){
    //TODO Have fun :)
    return str.split(' ').map(word => {
        if (word.length >= 5) {
            return word.split('').reverse().join('');
        } else return word;
    }).join(' ');
}
