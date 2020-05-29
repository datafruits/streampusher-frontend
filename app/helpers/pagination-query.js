import { helper } from '@ember/component/helper';

export default helper(function paginationQuery([paramName, number]) {
    let query = {};
    query[paramName] = number;
    return query;
});
