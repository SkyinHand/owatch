"use strict";
exports.__esModule = true;
exports.OwatchDocumentSymbolProvider = void 0;
var vscode = require("vscode");
var OwatchDocumentSymbolProvider = /** @class */ (function () {
    function OwatchDocumentSymbolProvider() {}
    OwatchDocumentSymbolProvider.prototype.provideDocumentSymbols = function (document, token) {
        return new Promise(function (resolve, reject) {
            var symbols = [];
            for (var i = 0; i < document.lineCount; i++) {
                var line = document.lineAt(i);
                if (/规则\s*\(\s*"(.*?)"\s*\)/g.test(line.text)) {
                    symbols.push({
                        name: /规则\s*\(\s*"(.*?)"\s*\)/g.exec(line.text)[1],
                        kind: vscode.SymbolKind.Function,
                        location: new vscode.Location(document.uri, line.range)
                    });
                }
            }
            resolve(symbols);
        });
    };
    return OwatchDocumentSymbolProvider;
}());
exports.OwatchDocumentSymbolProvider = OwatchDocumentSymbolProvider;