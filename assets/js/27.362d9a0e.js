(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{598:function(t,a,e){"use strict";e.r(a);var s=e(6),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"_1-字符的-unicode-表示法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-字符的-unicode-表示法"}},[t._v("#")]),t._v(" 1.字符的 Unicode 表示法")]),t._v(" "),e("p",[t._v("ES6 加强了对 Unicode 的支持，允许采用\\uxxxx形式表示一个字符，其中xxxx表示字符的 Unicode 码点, 但是，这种表示法只限于码点在\\u0000~\\uFFFF之间的字符。超出这个范围的字符，必须用两个双字节的形式表示")]),t._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[t._v("See More")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v('"\\uD842\\uDFB7"\n// "𠮷"\n"\\u20BB7"\n// " 7"\n\n// 转码后\ninput.map(function (item) {\n    return item + 1;\n});\n//上面代码表示，如果直接在\\u后面跟上超过0xFFFF的数值（比如\\u20BB7），JavaScript 会理解成\\u20BB+7。由于\\u20BB是一个不可打印字符，所以只会显示一个空格，后面跟着一个7。ES6 对这一点做出了改进，只要将码点放入大括号，就能正确解读该字符\n"\\u{20BB7}"\n// "𠮷"\n\n"\\u{41}\\u{42}\\u{43}"\n// "ABC"\n\nlet hello = 123;\nhell\\u{6F} // 123\n\n\'\\u{1F680}\' === \'\\uD83D\\uDE80\'\n// true\n')])])])]),t._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[t._v("See More")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("//JavaScript 共有 6 种方法可以表示一个字符。\n'\\z' === 'z'  // true\n'\\172' === 'z' // true\n'\\x7A' === 'z' // true\n'\\u007A' === 'z' // true\n'\\u{7A}' === 'z' // true\n")])])])]),t._v(" "),e("h2",{attrs:{id:"_2-字符串的遍历器接口"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-字符串的遍历器接口"}},[t._v("#")]),t._v(" 2.字符串的遍历器接口")]),t._v(" "),e("p",[t._v("ES6 为字符串添加了遍历器接口，使得字符串可以被for...of循环遍历。这个遍历器最大的优点是可以识别大于0xFFFF的码点，传统的for循环无法识别这样的码点。")]),t._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[t._v("See More")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v('let text = String.fromCodePoint(0x20BB7);\n\nfor (let i = 0; i < text.length; i++) {\n    console.log(text[i]);\n}\n// " "\n// " "\n\nfor (let i of text) {\n    console.log(i);\n}\n// "𠮷"\n')])])])]),t._v(" "),e("h2",{attrs:{id:"_3-字符关键字"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-字符关键字"}},[t._v("#")]),t._v(" 3.字符关键字")]),t._v(" "),e("p",[t._v("U+005C：反斜杠（reverse solidus)\nU+000D：回车（carriage return）\nU+2028：行分隔符（line separator）\nU+2029：段分隔符（paragraph separator）\nU+000A：换行符（line feed）")]),t._v(" "),e("h2",{attrs:{id:"_4-json-stringify-的改造"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-json-stringify-的改造"}},[t._v("#")]),t._v(" 4.JSON.stringify() 的改造")]),t._v(" "),e("p",[t._v("根据标准，JSON 数据必须是 UTF-8 编码。但是，现在的JSON.stringify()方法有可能返回不符合 UTF-8 标准的字符串。\n为了确保返回的是合法的 UTF-8 字符，ES2019 改变了JSON.stringify()的行为。如果遇到0xD800到0xDFFF之间的单个码点，或者不存在的配对形式，它会返回转义字符串，留给应用自己决定下一步的处理。")]),t._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[t._v("See More")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v('JSON.stringify(\'\\u{D834}\') // ""\\\\uD834""\nJSON.stringify(\'\\uDF06\\uD834\') // ""\\\\udf06\\\\ud834""\n')])])])]),t._v(" "),e("h2",{attrs:{id:"_5-模板字符串"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-模板字符串"}},[t._v("#")]),t._v(" 5.模板字符串")]),t._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[t._v("See More")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("// 传统模板\n$('#result').append(\n    'There are <b>' + basket.count + '</b> ' +\n    'items in your basket, ' +\n    '<em>' + basket.onSale +\n    '</em> are on sale!'\n);\n// es6\n$('#result').append(`\n    There are <b>${basket.count}</b> items\n    in your basket, <em>${basket.onSale}</em>\n    are on sale!\n`);\n\n//  `字符串  ${变量/函数/js代码}`\n")])])])]),t._v(" "),e("h2",{attrs:{id:"_6-模板编译"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-模板编译"}},[t._v("#")]),t._v(" 6.模板编译")]),t._v(" "),e("h2",{attrs:{id:"_7-标签模板"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7-标签模板"}},[t._v("#")]),t._v(" 7.标签模板")]),t._v(" "),e("h2",{attrs:{id:"_8-模板字符串的限制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_8-模板字符串的限制"}},[t._v("#")]),t._v(" 8.模板字符串的限制")]),t._v(" "),e("h2",{attrs:{id:"_9-string-fromcodepoint-新增"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_9-string-fromcodepoint-新增"}},[t._v("#")]),t._v(" 9. String.fromCodePoint()   - 新增")]),t._v(" "),e("p",[t._v("ES5 提供String.fromCharCode()方法，用于从 Unicode 码点返回对应字符，但是这个方法不能识别码点大于0xFFFF的字符\nES6 提供了String.fromCodePoint()方法，可以识别大于0xFFFF的字符，弥补了String.fromCharCode()方法的不足。在作用上，正好与下面的codePointAt()方法相反。")]),t._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[t._v("See More")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v('//es5\nString.fromCharCode(0x20BB7)\n// "ஷ"\n\n//es6\nString.fromCodePoint(0x20BB7)\n// "𠮷"\nString.fromCodePoint(0x78, 0x1f680, 0x79) === \'x\\uD83D\\uDE80y\'\n// true\n')])])])]),t._v(" "),e("div",{staticStyle:{color:"red"}},[t._v("如果String.fromCodePoint方法有多个参数，则它们会被合并成一个字符串返回。")]),t._v(" "),e("h2",{attrs:{id:"_10-codepointat-新增"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_10-codepointat-新增"}},[t._v("#")]),t._v(" 10. codePointAt()    - 新增")]),t._v(" "),e("p",[t._v("JavaScript 内部，字符以 UTF-16 的格式储存，每个字符固定为2个字节。对于那些需要4个字节储存的字符（Unicode 码点大于0xFFFF的字符），JavaScript 会认为它们是两个字符。")]),t._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[t._v("See More")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("var s = \"𠮷\";\n\ns.length // 2\ns.charAt(0) // ''\ns.charAt(1) // ''\ns.charCodeAt(0) // 55362\ns.charCodeAt(1) // 57271\n")])])])]),t._v(" "),e("p",[t._v("ES6 提供了codePointAt()方法，能够正确处理 4 个字节储存的字符，返回一个字符的码点。")]),t._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[t._v("See More")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("let s = '𠮷a';\n\ns.codePointAt(0) // 134071\ns.codePointAt(1) // 57271\ns.codePointAt(2) // 97\n//codePointAt()方法的参数，是字符在字符串中的位置（从 0 开始）。上面代码中，JavaScript 将“𠮷a”视为三个字符，codePointAt 方法在第一个字符上，正确地识别了“𠮷”，返回了它的十进制码点 134071（即十六进制的20BB7）。在第二个字符（即“𠮷”的后两个字节）和第三个字符“a”上，codePointAt()方法的结果与charCodeAt()方法相同。\n")])])])]),t._v(" "),e("p",[t._v("codePointAt()方法是测试一个字符由两个字节还是由四个字节组成的最简单方法")]),t._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[t._v("See More")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v('function is32Bit(c) {\nreturn c.codePointAt(0) > 0xFFFF;\n}\n\nis32Bit("𠮷") // true\nis32Bit("a") // false\n')])])])]),t._v(" "),e("h2",{attrs:{id:"_11-string-raw-新增"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_11-string-raw-新增"}},[t._v("#")]),t._v(" 11. String.raw()     - 新增")]),t._v(" "),e("p",[t._v("ES6 还为原生的 String 对象，提供了一个raw()方法。该方法返回一个斜杠都被转义（即斜杠前面再加一个斜杠）的字符串，往往用于模板字符串的处理方法。")]),t._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[t._v("See More")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v('String.raw`Hi\\n${2+3}!`\n// 实际返回 "Hi\\\\n5!"，显示的是转义后的结果 "Hi\\n5!"\n\nString.raw`Hi\\u000A!`;\n// 实际返回 "Hi\\\\u000A!"，显示的是转义后的结果 "Hi\\u000A!"\n\n//如果原字符串的斜杠已经转义，那么String.raw()会进行再次转义。\nString.raw`Hi\\\\n`\n// 返回 "Hi\\\\\\\\n"\n\nString.raw`Hi\\\\n` === "Hi\\\\\\\\n" // true\n')])])])]),t._v(" "),e("p",[t._v("String.raw()的代码实现基本如下。")]),t._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[t._v("See More")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("String.raw = function (strings, ...values) {\n    let output = '';\n    let index;\n    for (index = 0; index < values.length; index++) {\n        output += strings.raw[index] + values[index];\n    }\n\n    output += strings.raw[index]\n    return output;\n}\n")])])])]),t._v(" "),e("h2",{attrs:{id:"_12-normalize-新增"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_12-normalize-新增"}},[t._v("#")]),t._v(" 12. normalize()      - 新增")]),t._v(" "),e("p",[t._v("许多欧洲语言有语调符号和重音符号。为了表示它们，Unicode 提供了两种方法。一种是直接提供带重音符号的字符，比如Ǒ（\\u01D1）。另一种是提供合成符号（combining character），即原字符与重音符号的合成，两个字符合成一个字符，比如O（\\u004F）和ˇ（\\u030C）合成Ǒ（\\u004F\\u030C）。")]),t._v(" "),e("p",[t._v("这两种表示方法，在视觉和语义上都等价，但是 JavaScript 不能识别")]),t._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[t._v("See More")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("// avaScript 将合成字符视为两个字符，导致两种表示方法不相等。\n'\\u01D1'==='\\u004F\\u030C' //false\n\n'\\u01D1'.length // 1\n'\\u004F\\u030C'.length // 2\n")])])])]),t._v(" "),e("p",[t._v("ES6 提供字符串实例的normalize()方法，用来将字符的不同表示方法统一为同样的形式，这称为 Unicode 正规化。")]),t._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[t._v("See More")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("'\\u01D1'.normalize() === '\\u004F\\u030C'.normalize()\n// true\n")])])])]),t._v(" "),e("div",{staticStyle:{color:"red"}},[t._v("\n    normalize方法可以接受一个参数来指定normalize的方式，参数的四个可选值如下。\n")]),t._v(" "),e("div",{staticStyle:{"padding-left":"10px"}},[e("br"),t._v("\n    - NFC，默认参数，表示“标准等价合成”（Normalization Form Canonical Composition），返回多个简单字符的合成字符。所谓“标准等价”指的是视觉和语义上的等价。\n"),e("br"),t._v("\n    - NFD，表示“标准等价分解”（Normalization Form Canonical Decomposition），即在标准等价的前提下，返回合成字符分解的多个简单字符。\n"),e("br"),t._v("\n    - NFKC，表示“兼容等价合成”（Normalization Form Compatibility Composition），返回合成字符。所谓“兼容等价”指的是语义上存在等价，但视觉上不等价，比如“囍”和“喜喜”。（这只是用来举例，normalize方法不能识别中文。）\n"),e("br"),t._v("\n    - NFKD，表示“兼容等价分解”（Normalization Form Compatibility Decomposition），即在兼容等价的前提下，返回合成字符分解的多个简单字符。\n")]),t._v(" "),e("h2",{attrs:{id:"_13-实例方法：includes-startswith-endswith-新增"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_13-实例方法：includes-startswith-endswith-新增"}},[t._v("#")]),t._v(" 13. 实例方法：includes(), startsWith(), endsWith()       - 新增")]),t._v(" "),e("p",[t._v("JavaScript 只有indexOf方法，可以用来确定一个字符串是否包含在另一个字符串中。ES6 又提供了三种新方法。\n- includes()：返回布尔值，表示是否找到了参数字符串。\n- startsWith()：返回布尔值，表示参数字符串是否在原字符串的头部。\n- endsWith()：返回布尔值，表示参数字符串是否在原字符串的尾部。")]),t._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[t._v("See More")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("let s = 'Hello world!';\n\ns.startsWith('world', 6) // true\ns.endsWith('Hello', 5) // true\ns.includes('Hello', 6) // false\n\n// 这三个方法都支持第二个参数，表示开始搜索的位置 ***\n")])])])]),t._v(" "),e("h2",{attrs:{id:"_14-repeat-新增"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_14-repeat-新增"}},[t._v("#")]),t._v(" 14. repeat()      - 新增")]),t._v(" "),e("p",[t._v("repeat方法返回一个新字符串，表示将原字符串重复n次。")]),t._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[t._v("See More")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("'x'.repeat(3) // \"xxx\"\n'hello'.repeat(2) // \"hellohello\"\n'na'.repeat(0) // \"\"\n")])])])]),t._v(" "),e("div",{staticStyle:{color:"red"}},[t._v("\n    1.参数如果是小数，会被取整(向下取整)。\n"),e("br"),t._v("\n    2.参数是负数或者Infinity，会报错。\n"),e("br"),t._v("\n    3.如果参数是 0 到-1 之间的小数，则等同于 0，这是因为会先进行取整运算。0 到-1 之间的小数，取整以后等于-0，repeat视同为 0\n"),e("br"),t._v("\n    4. 参数NaN等同于 0。\n"),e("br"),t._v("\n    5. repeat的参数是字符串，则会先转换成数字\n")]),t._v(" "),e("h2",{attrs:{id:"_15-实例方法：padstart-，padend-新增"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_15-实例方法：padstart-，padend-新增"}},[t._v("#")]),t._v(" 15. 实例方法：padStart()，padEnd()      - 新增")]),t._v(" "),e("p",[t._v("ES2017 引入了字符串补全长度的功能。如果某个字符串不够指定长度，会在头部或尾部补全。padStart()用于头部补全，padEnd()用于尾部补全。")]),t._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[t._v("See More")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("'x'.padStart(5, 'ab') // 'ababx'\n'x'.padStart(4, 'ab') // 'abax'\n\n'x'.padEnd(5, 'ab') // 'xabab'\n'x'.padEnd(4, 'ab') // 'xaba'\n\n// padStart()和padEnd()一共接受两个参数，第一个参数是字符串补全生效的最大长度，第二个参数是用来补全的字符串\n")])])])]),t._v(" "),e("div",{staticStyle:{color:"red"}},[t._v("\n    1.如果原字符串的长度，等于或大于最大长度，则字符串补全不生效，返回原字符串。"),e("br"),t._v("\n    2.如果用来补全的字符串与原字符串，两者的长度之和超过了最大长度，则会截去超出位数的补全字符串。"),e("br"),t._v("\n    3.如果省略第二个参数，默认使用空格补全长度。"),e("br")]),t._v(" "),e("p",[t._v("padStart()的常见用途")]),t._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[t._v("See More")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("// 1.为数值补全指定位数。下面代码生成 10 位的数值字符串。\n'1'.padStart(10, '0') // \"0000000001\"\n'12'.padStart(10, '0') // \"0000000012\"\n'123456'.padStart(10, '0') // \"0000123456\"\n\n// 2.提示字符串格式。\n'12'.padStart(10, 'YYYY-MM-DD') // \"YYYY-MM-12\"\n'09-12'.padStart(10, 'YYYY-MM-DD') // \"YYYY-09-12\"\n")])])])]),t._v(" "),e("h2",{attrs:{id:"_16-实例方法：trimstart-，trimend-新增"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_16-实例方法：trimstart-，trimend-新增"}},[t._v("#")]),t._v(" 16. 实例方法：trimStart()，trimEnd()     - 新增")]),t._v(" "),e("p",[t._v("ES2019 对字符串实例新增了trimStart()和trimEnd()这两个方法。它们的行为与trim()一致，trimStart()消除字符串头部的空格，trimEnd()消除尾部的空格。它们返回的都是新字符串，不会修改原始字符串。")]),t._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[t._v("See More")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v('const s = \'  abc  \';\n\ns.trim() // "abc"\ns.trimStart() // "abc  "\ns.trimEnd() // "  abc"\n\n//上面代码中，trimStart()只消除头部的空格，保留尾部的空格。trimEnd()也是类似行为。\n')])])])]),t._v(" "),e("div",{staticStyle:{color:"red"}},[t._v("\n    1.除了空格键，这两个方法对字符串头部（或尾部）的 tab 键、换行符等不可见的空白符号也有效。"),e("br"),t._v("\n    2.浏览器还部署了额外的两个方法，trimLeft()是trimStart()的别名，trimRight()是trimEnd()的别名。\n")]),t._v(" "),e("h2",{attrs:{id:"_17-matchall-新增"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_17-matchall-新增"}},[t._v("#")]),t._v(" 17. matchAll()       - 新增")]),t._v(" "),e("p",[t._v("matchAll()方法返回一个正则表达式在当前字符串的所有匹配，")]),t._v(" "),e("h2",{attrs:{id:"_18-replaceall-新增"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_18-replaceall-新增"}},[t._v("#")]),t._v(" 18. replaceAll()     - 新增")]),t._v(" "),e("p",[t._v("历史上，字符串的实例方法replace()只能替换第一个匹配。")]),t._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[t._v("See More")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("// 替换一个\n'aabbcc'.replace('b', '_')\n// 'aa_bcc'\n\n// 替换所有\n'aabbcc'.replace(/b/g, '_')\n// 'aa__cc'\n// 或\n'aabbcc'.replaceAll('b', '_')\n// 'aa__cc'\n")])])])]),t._v(" "),e("p",[t._v("replaceAll()的第二个参数replacement是一个字符串，表示替换的文本，其中可以使用一些特殊字符串。")]),t._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[t._v("See More")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("- $&：匹配的子字符串。\n- $` ：匹配结果前面的文本。\n- $'：匹配结果后面的文本。\n- $n：匹配成功的第n组内容，n是从1开始的自然数。这个参数生效的前提是，第一个参数必须是正则表达式。\n- $$：指代美元符号$。\n")])])])]),t._v(" "),e("div",{staticStyle:{color:"red"}},[t._v("replaceAll()的第二个参数replacement除了为字符串，也可以是一个函数，该函数的返回值将替换掉第一个参数searchValue匹配的文本。")])])}),[],!1,null,null,null);a.default=n.exports}}]);