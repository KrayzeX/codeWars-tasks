function createPhoneNumber(numbers){
    const code = numbers.slice(0, 3).join('');
    const begin = numbers.slice(3, 6).join('');
    const end = numbers.slice(6).join('');

    return '(' + code + ') ' + begin + '-' + end;
}
