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

var assert=require("should");



//: @client:
var cnfgrble=require("./cnfgrble.support.js");
//: @end-client





//: @client:
describe("cnfgrble",function(){

describe("`cnfgrble( 'property', { 'property': 'value' } )`",function(){
it("should return true",function(){
var result=cnfgrble("property",{"property":"value"});

assert.equal(result,true);
});
});

describe("`cnfgrble( 'property', { } )`",function(){
it("should return false",function(){
var result=cnfgrble("property",{});

assert.equal(result,false);
});
});

describe("`non-configurable property`",function(){
it("should return false",function(){
var data={};
Object.defineProperty(data,"property",{
"value":123,
"configurable":false});


var result=cnfgrble("property",data);

assert.equal(result,false);
});
});

});
//: @end-client
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwiY25mZ3JibGUiLCJkZXNjcmliZSIsIml0IiwicmVzdWx0IiwiZXF1YWwiLCJkYXRhIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdEQSxHQUFNQSxRQUFTQyxRQUFTLFFBQVQsQ0FBZjs7OztBQUlBO0FBQ0EsR0FBTUMsVUFBV0QsUUFBUyx1QkFBVCxDQUFqQjtBQUNBOzs7Ozs7QUFNQTtBQUNBRSxTQUFVLFVBQVYsQ0FBc0IsVUFBTzs7QUFFNUJBLFNBQVUsbURBQVYsQ0FBK0QsVUFBTztBQUNyRUMsR0FBSSxvQkFBSixDQUEwQixVQUFPO0FBQ2hDLEdBQUlDLFFBQVNILFNBQVUsVUFBVixDQUFzQixDQUFFLFdBQVksT0FBZCxDQUF0QixDQUFiOztBQUVBRixPQUFPTSxLQUFQLENBQWNELE1BQWQsQ0FBc0IsSUFBdEI7QUFDQSxDQUpEO0FBS0EsQ0FORDs7QUFRQUYsU0FBVSwrQkFBVixDQUEyQyxVQUFPO0FBQ2pEQyxHQUFJLHFCQUFKLENBQTJCLFVBQU87QUFDakMsR0FBSUMsUUFBU0gsU0FBVSxVQUFWLENBQXNCLEVBQXRCLENBQWI7O0FBRUFGLE9BQU9NLEtBQVAsQ0FBY0QsTUFBZCxDQUFzQixLQUF0QjtBQUNBLENBSkQ7QUFLQSxDQU5EOztBQVFBRixTQUFVLDZCQUFWLENBQXlDLFVBQU87QUFDL0NDLEdBQUkscUJBQUosQ0FBMkIsVUFBTztBQUNqQyxHQUFJRyxNQUFPLEVBQVg7QUFDQUMsT0FBT0MsY0FBUCxDQUF1QkYsSUFBdkIsQ0FBNkIsVUFBN0IsQ0FBeUM7QUFDeEMsUUFBUyxHQUQrQjtBQUV4QyxlQUFnQixLQUZ3QixDQUF6Qzs7O0FBS0EsR0FBSUYsUUFBU0gsU0FBVSxVQUFWLENBQXNCSyxJQUF0QixDQUFiOztBQUVBUCxPQUFPTSxLQUFQLENBQWNELE1BQWQsQ0FBc0IsS0FBdEI7QUFDQSxDQVZEO0FBV0EsQ0FaRDs7QUFjQSxDQWhDRDtBQWlDQSIsImZpbGUiOiJ0ZXN0LnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEB0ZXN0LWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC10ZXN0LWxpY2Vuc2VcblxuXHRAdGVzdC1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcImNuZmdyYmxlXCIsXG5cdFx0XHRcInBhdGhcIjogXCJjbmZncmJsZS90ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwidGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwidGVzdFwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvY25mZ3JibGUuZ2l0XCJcblx0XHR9XG5cdEBlbmQtdGVzdC1jb25maWd1cmF0aW9uXG5cblx0QHRlc3QtZG9jdW1lbnRhdGlvbjpcblxuXHRAZW5kLXRlc3QtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiYXNzZXJ0XCI6IFwic2hvdWxkXCIsXG5cdFx0XHRcImNuZmdyYmxlXCI6IFwiY25mZ3JibGVcIixcblx0XHRcdFwicGF0aFwiOiBcInBhdGhcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBhc3NlcnQgPSByZXF1aXJlKCBcInNob3VsZFwiICk7XG5cblxuXG4vLzogQGNsaWVudDpcbmNvbnN0IGNuZmdyYmxlID0gcmVxdWlyZSggXCIuL2NuZmdyYmxlLnN1cHBvcnQuanNcIiApO1xuLy86IEBlbmQtY2xpZW50XG5cblxuXG5cblxuLy86IEBjbGllbnQ6XG5kZXNjcmliZSggXCJjbmZncmJsZVwiLCAoICkgPT4ge1xuXG5cdGRlc2NyaWJlKCBcImBjbmZncmJsZSggJ3Byb3BlcnR5JywgeyAncHJvcGVydHknOiAndmFsdWUnIH0gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIHRydWVcIiwgKCApID0+IHtcblx0XHRcdGxldCByZXN1bHQgPSBjbmZncmJsZSggXCJwcm9wZXJ0eVwiLCB7IFwicHJvcGVydHlcIjogXCJ2YWx1ZVwiIH0gKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIHRydWUgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgY25mZ3JibGUoICdwcm9wZXJ0eScsIHsgfSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gZmFsc2VcIiwgKCApID0+IHtcblx0XHRcdGxldCByZXN1bHQgPSBjbmZncmJsZSggXCJwcm9wZXJ0eVwiLCB7IH0gKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIGZhbHNlICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYG5vbi1jb25maWd1cmFibGUgcHJvcGVydHlgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBmYWxzZVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IGRhdGEgPSB7IH07XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoIGRhdGEsIFwicHJvcGVydHlcIiwge1xuXHRcdFx0XHRcInZhbHVlXCI6IDEyMyxcblx0XHRcdFx0XCJjb25maWd1cmFibGVcIjogZmFsc2Vcblx0XHRcdH0gKTtcblxuXHRcdFx0bGV0IHJlc3VsdCA9IGNuZmdyYmxlKCBcInByb3BlcnR5XCIsIGRhdGEgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIGZhbHNlICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cbn0gKTtcbi8vOiBAZW5kLWNsaWVudFxuXG5cbiJdfQ==
//# sourceMappingURL=test.support.js.map
