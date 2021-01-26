import _ from 'lodash';

// allowed: ['comparison', 'logical', 'element', 'evaluation', 'array', 'projection'] OR any '$' operators.
const sanitize = (query: object, allowed: string[] = []) => {
    // https://docs.mongodb.com/manual/reference/operator/query/
    const operators = {
        comparison: ['$eq', '$gt', '$gte', '$in', '$lt', '$lte', '$ne', '$nin'],
        logical: ['$and', '$not', '$nor', '$or'],
        element: ['$exists', '$type'],
        regex: ['$regex', '$options'],
        evaluation: [
            '$expr',
            '$jsonSchema',
            '$mod',
            '$regex',
            '$text',
            '$where',
            '$options',
        ],
        array: ['$all', '$elemMatch', '$size'],
        projection: ['$', '$elemMatch', '$meta', '$slice'],
    };
    if (query instanceof Object) {
        for (var key in query) {
            if (
                /^\$/.test(key) &&
                !allowed.includes(key) &&
                !_.flatten(_.values(_.pick(operators, allowed))).includes(key)
            ) {
                throw new Error(`${key} is not allowed`);
            } else {
                sanitize(query[key], allowed);
            }
        }
    }
    return query;
};
export default { sanitize };
