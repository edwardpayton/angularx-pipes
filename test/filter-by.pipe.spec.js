"use strict";
exports.__esModule = true;
var filter_by_pipe_1 = require("../src/pipes/filter-by.pipe");
describe('FilterByPipe', function () {
    var pipe;
    var users = [
        { id: 1, gender: 'm', first: 'John', last: 'Smith', status: 'active' },
        { id: 2, gender: 'f', first: 'Kelly', last: 'Ruth', status: 'active' },
        { id: 3, gender: 'm', first: 'Jeff', last: 'Stevenson', status: 'active' },
        { id: 4, gender: 'f', first: 'Jennifer', last: 'Smith', status: 'inactive' }
    ];
    beforeEach(function () {
        pipe = new filter_by_pipe_1.FilterByPipe();
    });
    it('create an instance', function () {
        expect(pipe).toBeTruthy();
    });
    it('should return one user by name', function () {
        expect(pipe.transform(users, 'first', 'John')).toEqual([users[0]]);
    });
    it('should filter multiple users by last name', function () {
        expect(pipe.transform(users, 'last', 'Smith')).toEqual([users[0], users[3]]);
    });
});
