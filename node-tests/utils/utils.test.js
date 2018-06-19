const utils = require('./utils');
const expect = require('expect');

describe('Utils', () => {
    it('should add two numbers', () => {
        var res = utils.add(33, 11);
        
        expect(res).toBe(44).toBeA('number');
    });

    it('should async add two numbers', (done) => {
        utils.asyncAdd(4,3, (sum) => {
            expect(sum).toBe(7).toBeA('number');
            done();
        });
    })

    it('should square a number', () => {
        res = utils.square(4);
        
        expect(res).toBe(16);
    })

    it('should async square a number', (done) => {
        utils.asyncSquare(4, (square) => {
            expect(square).toBe(16);
            done();
        })
    })
    
    it('should verify first and last names are set', () => {
        var user = {
            age: 25,
            location: 'Philadelphia'
        }
        var res  = utils.setName(user, 'Rin Tohsaka');
        
        expect(res).toBeA('object').toInclude({
            firstName: 'Rin',
            lastName: 'Tohsaka'
        })
    })
});


// it('should expect some values', () => {
//     expect({
//         name: 'Andrew',
//         age: 25,
//         location: 'PhiladelPhia'
//     }).toExclude({
//         name: 23
//     })
// })

