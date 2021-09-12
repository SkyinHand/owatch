const vscode = require('vscode');
const {OwatchDocumentSymbolProvider} = require('./src/provider/documentSymbols')

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	let disposable = vscode.commands.registerCommand('owatch.about', function () {
		vscode.window.showInformationMessage('Owatch插件由 掌上天空#5861 制作');
	});

    // About提示
	context.subscriptions.push(disposable);

    // 生成大纲
    context.subscriptions.push(
        vscode.languages.registerDocumentSymbolProvider(
            {scheme: 'file', language: "owatch"}, 
            new OwatchDocumentSymbolProvider())
    );
}


function deactivate() {}

module.exports = {
	activate,
	deactivate
}
