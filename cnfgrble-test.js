
const assert = require( "assert" );
const cnfgrble = require( "./cnfgrble.js" );

assert.equal( cnfgrble( "property", { "property": "value" } ), true, "should be true" );

console.log( "ok" );
