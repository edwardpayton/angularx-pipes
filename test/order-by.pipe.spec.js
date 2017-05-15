"use strict";
exports.__esModule = true;
var order_by_pipe_1 = require("../src/pipes/order-by.pipe");
describe('OrderByPipe', function () {
    var pipe;
    beforeEach(function () {
        pipe = new order_by_pipe_1.OrderByPipe();
    });
    var users = [
        { id: 1, gender: 'm', first: 'John', last: 'Smith', status: 'active' },
        { id: 2, gender: 'f', first: 'Kelly', last: 'Ruth', status: 'active' },
        { id: 3, gender: 'm', first: 'Jeff', last: 'Stevenson', status: 'active' },
        { id: 4, gender: 'f', first: 'Jennifer', last: 'Smith', status: 'inactive' }
    ];
    it('create an instance', function () {
        var pipe = new order_by_pipe_1.OrderByPipe();
        expect(pipe).toBeTruthy();
    });
    it('should return users in alphabetical order by first name', function () {
        expect(pipe.transform(users, '+first')).toEqual([users[2], users[3], users[0], users[1]]);
    });
});
