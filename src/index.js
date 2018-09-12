/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 *
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    // your implementation
    var counter = 0;

    for (var i = 0; i < preferences.length; i++) {
        //узнаем значения по ссылкам
        var x1 = preferences[i];
        var x2 = preferences[x1 - 1];
        var x3 = preferences[x2 - 1];
        //  проверяем соответствие условиям: последний элемент возвращает номер первого
        if((x3-1===i)){
            counter++;
        }
    }

    return Math.floor(counter/3);
};
