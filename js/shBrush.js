/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (July 02 2010)
 *
 * @copyright
 * Copyright (C) 2004-2010 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
;(function()
{
	// CommonJS
	typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null;

	function Brush()
	{
		var keywords =	'def';
		var types = 'int bool';

		var r = SyntaxHighlighter.regexLib;

		this.regexList = [
			{ regex: r.multiLineDoubleQuotedString,								css: 'string' },			// double quoted strings
			{ regex: r.multiLineSingleQuotedString,								css: 'string' },			// single quoted strings
			{ regex: r.singleLineCComments,										css: 'comments' },			// one line comments
			{ regex: r.multiLineCComments,										css: 'comments' },			// multiline comments
			{ regex: new RegExp(this.getKeywords(keywords), 'gm'),				css: 'keyword' },			// keywords
			{ regex: new RegExp(this.getKeywords(types), 'gm'),					css: 'variable' },
			{ regex: new RegExp(/[~]*\d+/g),									css: 'value' },				// int values
			];

		this.forHtmlScript(r.scriptScriptTags);
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['temp'];

	SyntaxHighlighter.brushes.Temp = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();
