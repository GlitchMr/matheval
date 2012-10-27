var should = require('should');
var _ = require('underscore')._;

var Token = require('../lib/Token.js').Token;
var Types = require('../lib/Token.js').Types;

var Evaluator = require('../lib/Evaluator.js').Evaluator;

describe('Evaluator', function() {
    var hpcalc = new Evaluator();
    describe('#Evaluator()', function() {
        it('should construct a new Evaluator', function() {
            hpcalc = new Evaluator();
            hpcalc.should.be.an.instanceof(Evaluator);

            hpcalc.should.have.property('evaluate');
            hpcalc.evaluate.should.be.a('function');

            should.ok(hpcalc.hasOwnProperty('result'));
        });
    });

    describe('#tokenize(expression)', function() {
        it('should throw on div by zero', function() {
            (function() {
                hpcalc.evaluate('1/(-1+1)');
            }).should.
            throw ();
        });

        it('should throw on mod by zero', function() {
            (function() {
                hpcalc.evaluate('1%(3+5-2^3)');
            }).should.
            throw ();
        });

        var tests = {
            '1 + 1': 2,
            'max(1,2,3,2,1,0,-1)': 3,
            '2**3**2': 512,
            '-1+1+-1+1': 0,
            '1^2*3/4%5+6-7': -1,
        };

        _.each(tests, function(value, key) {
            it('should evaluate "' + key + '" = "' + value + '"', function () {
                var expected = value;
                var actual = hpcalc.evaluate(key);
                actual.should.equal(expected);
            });
        });
    });
});