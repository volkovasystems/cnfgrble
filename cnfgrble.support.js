"use strict";/*;
	@module-license:
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
	@end-module-license

	@module-configuration:
		{
			"package": "cnfgrble",
			"path": "cnfgrble/cnfgrble.js",
			"file": "cnfgrble.js",
			"module": "cnfgrble",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
				"Vinse Vinalon <vinsevinalon@gmail.com>"
			],
			"repository": "https://github.com/volkovasystems/cnfgrble.git",
			"test": "cnfgrble-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Checks if property is configurable.
	@end-module-documentation

	@include:
		{
			"dscrb": "dscrb",
			"kein": "kein",
			"zelf": "zelf"
		}
	@end-include
*/

var dscrb=require("dscrb");
var kein=require("kein");
var zelf=require("zelf");

var cnfgrble=function cnfgrble(property,entity){
/*;
		@meta-configuration:
			{
				"property:required": [
					"number"
					"string",
					"symbol"
				],
				"entity": "*"
			}
		@end-meta-configuration
	*/

if(arguments.length==1){
entity=zelf(this);
}

return kein(property,entity)&&dscrb(property,entity).configurable();
};

module.exports=cnfgrble;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNuZmdyYmxlLnN1cHBvcnQuanMiXSwibmFtZXMiOlsiZHNjcmIiLCJyZXF1aXJlIiwia2VpbiIsInplbGYiLCJjbmZncmJsZSIsInByb3BlcnR5IiwiZW50aXR5IiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiY29uZmlndXJhYmxlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6ImFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwREEsR0FBTUEsT0FBUUMsUUFBUyxPQUFULENBQWQ7QUFDQSxHQUFNQyxNQUFPRCxRQUFTLE1BQVQsQ0FBYjtBQUNBLEdBQU1FLE1BQU9GLFFBQVMsTUFBVCxDQUFiOztBQUVBLEdBQU1HLFVBQVcsUUFBU0EsU0FBVCxDQUFtQkMsUUFBbkIsQ0FBNkJDLE1BQTdCLENBQXFDO0FBQ3JEOzs7Ozs7Ozs7Ozs7O0FBYUEsR0FBSUMsVUFBVUMsTUFBVixFQUFvQixDQUF4QixDQUEyQjtBQUMxQkYsT0FBU0gsS0FBTSxJQUFOLENBQVQ7QUFDQTs7QUFFRCxNQUFTRCxNQUFNRyxRQUFOLENBQWdCQyxNQUFoQixHQUE0Qk4sTUFBT0ssUUFBUCxDQUFpQkMsTUFBakIsRUFBMEJHLFlBQTFCLEVBQXJDO0FBQ0EsQ0FuQkQ7O0FBcUJBQyxPQUFPQyxPQUFQLENBQWlCUCxRQUFqQiIsImZpbGUiOiJjbmZncmJsZS5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyo7XG5cdEBtb2R1bGUtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLW1vZHVsZS1saWNlbnNlXG5cblx0QG1vZHVsZS1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcImNuZmdyYmxlXCIsXG5cdFx0XHRcInBhdGhcIjogXCJjbmZncmJsZS9jbmZncmJsZS5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwiY25mZ3JibGUuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwiY25mZ3JibGVcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXG5cdFx0XHRdLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2NuZmdyYmxlLmdpdFwiLFxuXHRcdFx0XCJ0ZXN0XCI6IFwiY25mZ3JibGUtdGVzdC5qc1wiLFxuXHRcdFx0XCJnbG9iYWxcIjogdHJ1ZVxuXHRcdH1cblx0QGVuZC1tb2R1bGUtY29uZmlndXJhdGlvblxuXG5cdEBtb2R1bGUtZG9jdW1lbnRhdGlvbjpcblx0XHRDaGVja3MgaWYgcHJvcGVydHkgaXMgY29uZmlndXJhYmxlLlxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJkc2NyYlwiOiBcImRzY3JiXCIsXG5cdFx0XHRcImtlaW5cIjogXCJrZWluXCIsXG5cdFx0XHRcInplbGZcIjogXCJ6ZWxmXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgZHNjcmIgPSByZXF1aXJlKCBcImRzY3JiXCIgKTtcbmNvbnN0IGtlaW4gPSByZXF1aXJlKCBcImtlaW5cIiApO1xuY29uc3QgemVsZiA9IHJlcXVpcmUoIFwiemVsZlwiICk7XG5cbmNvbnN0IGNuZmdyYmxlID0gZnVuY3Rpb24gY25mZ3JibGUoIHByb3BlcnR5LCBlbnRpdHkgKXtcblx0Lyo7XG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdHtcblx0XHRcdFx0XCJwcm9wZXJ0eTpyZXF1aXJlZFwiOiBbXG5cdFx0XHRcdFx0XCJudW1iZXJcIlxuXHRcdFx0XHRcdFwic3RyaW5nXCIsXG5cdFx0XHRcdFx0XCJzeW1ib2xcIlxuXHRcdFx0XHRdLFxuXHRcdFx0XHRcImVudGl0eVwiOiBcIipcIlxuXHRcdFx0fVxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdCovXG5cblx0aWYoIGFyZ3VtZW50cy5sZW5ndGggPT0gMSApe1xuXHRcdGVudGl0eSA9IHplbGYoIHRoaXMgKTtcblx0fVxuXG5cdHJldHVybiAoIGtlaW4oIHByb3BlcnR5LCBlbnRpdHkgKSAmJiBkc2NyYiggcHJvcGVydHksIGVudGl0eSApLmNvbmZpZ3VyYWJsZSggKSApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBjbmZncmJsZTtcbiJdfQ==
//# sourceMappingURL=cnfgrble.support.js.map
