function findShort(s){
    const words = s.split(' ');
    const countSim = words.map((word) => {
        return word.length;
    });

    return Math.min(...countSim);
}
