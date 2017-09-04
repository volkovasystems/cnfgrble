"use strict";

/*;
	@test-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-test-license

	@test-configuration:
		{
			"package": "cnfgrble",
			"path": "cnfgrble/test.module.js",
			"file": "test.module.js",
			"module": "test",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
				"Vinse Vinalon <vinsevinalon@gmail.com>"
			],
			"repository": "https://github.com/volkovasystems/cnfgrble.git"
		}
	@end-test-configuration

	@test-documentation:

	@end-test-documentation

	@include:
		{
			"assert": "should",
			"cnfgrble": "cnfgrble",
			"path": "path"
		}
	@end-include
*/

const assert = require( "should" );

//: @server:
const cnfgrble = require( "./cnfgrble.js" );
//: @end-server





//: @server:
describe( "cnfgrble", ( ) => {

	describe( "`cnfgrble( 'property', { 'property': 'value' } )`", ( ) => {
		it( "should return true", ( ) => {
			let result = cnfgrble( "property", { "property": "value" } );

			assert.equal( result, true );
		} );
	} );

	describe( "`cnfgrble( 'name', function yeah( ){ } )`", ( ) => {
		it( "should return true", ( ) => {
			let result = cnfgrble( "name", function yeah( ){ } );

			assert.equal( result, true );
		} );
	} );

	describe( "`cnfgrble( 'property', { } )`", ( ) => {
		it( "should return false", ( ) => {
			let result = cnfgrble( "property", { } );

			assert.equal( result, false );
		} );
	} );

	describe( "`non-configurable property`", ( ) => {
		it( "should return false", ( ) => {
			let data = { };
			Object.defineProperty( data, "property", {
				"value": 123,
				"configurable": false
			} );

			let result = cnfgrble( "property", data );

			assert.equal( result, false );
		} );
	} );

	describe( "`cnfgrble( 'length', [ 1, 2, 3 ] )`", ( ) => {
		it( "should return false", ( ) => {
			let result = cnfgrble( "length", [ 1, 2, 3 ] );

			assert.equal( result, false );
		} );
	} );

} );
//: @end-server




