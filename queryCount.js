function queryCount(INPUT, QUERY) {
    return QUERY.map(query => INPUT.filter(item => item === query).length);
}

const INPUT = ['xc', 'dz', 'bbb', 'dz'];
const QUERY = ['bbb', 'ac', 'dz'];
console.log(queryCount(INPUT, QUERY));  // Output: [1, 0, 2]
