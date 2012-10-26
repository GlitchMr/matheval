_matheval_ is a node.js library that evaluates simple math expressions.
Supports variables, parentheses, basic functions.

## Example

    var matheval = require('matheval');

    matheval.evaluate('x = 1', console.log); // prints 1
    matheval.evaluate('x + 1', console.log); // prints 2

## Installation

    $ npm install matheval

## Notes
    evaluate() calls are queued and processed in order

    You can override Variables.js to supply your own variables
    (for example, you can load them from a database or something)

    unary minus is higher precedence than exponentiation, so -1^-2 === (-1)^(-2), not -(1^(-2))

