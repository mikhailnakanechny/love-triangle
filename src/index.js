module.exports = function getLoveTrianglesCount(preferences = []) {
    let counter = 0;

    for (let i = 0; i < preferences.length; i++) {
        const x1 = preferences[i],
              x2 = preferences[x1 - 1],
              x3 = preferences[x2 - 1];
        if((x3-1===i)){counter++;}
    }

    return Math.floor(counter/3);
};
