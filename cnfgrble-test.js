
const assert = require( "assert" );
const cnfgrble = require( "./cnfgrble.js" );
const harden = require( "harden" );

assert.equal( cnfgrble( "property", { "property": "value" } ), true, "should be equal to true" );

let test = { };
harden( 123, "sample", test );
assert.equal( cnfgrble( 123, test ), false, "should be equal to false" );

console.log( "ok" );
