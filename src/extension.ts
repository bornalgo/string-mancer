import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    // Custom Paste
    let pasteDisposable = vscode.commands.registerCommand('extension.customPaste', async () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showErrorMessage('No active editor detected.');
            return;
        }

        const initialCursorPosition = editor.selection.active;

        try {
            await vscode.commands.executeCommand('editor.action.clipboardPasteAction');

            const finalCursorPosition = editor.selection.active;
            const pastedRange = new vscode.Range(initialCursorPosition, finalCursorPosition);

            const pastedText = editor.document.getText(pastedRange);

            if (pastedText) {              
                const modifiedText = pastedText.replace(/(?<!\\)\\(?!\\)/g, '\\\\');

                await editor.edit((editBuilder) => {
                    editBuilder.replace(pastedRange, modifiedText);
                });
            } else {
                vscode.window.showErrorMessage('No text was pasted from the clipboard.');
            }
        } catch (error: unknown) {
            const errorMessage =
                error instanceof Error ? error.message : 'Unknown error';
            vscode.window.showErrorMessage(`An error occurred: ${errorMessage}`);
        }
    });

    // Custom Copy
    let copyDisposable = vscode.commands.registerCommand('extension.customCopy', async () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showErrorMessage('No active editor detected.');
            return;
        }

        const selection = editor.selection;
        const selectedText = editor.document.getText(selection);

        if (selectedText) {
            const modifiedText = selectedText.replace(/\\\\/g, '\\');

            await vscode.env.clipboard.writeText(modifiedText);
            vscode.window.showInformationMessage('Custom copy completed. Backslashes escaped.');
        } else {
            vscode.window.showErrorMessage('No text selected to copy.');
        }
    });

    // Uppercase
    const uppercaseDisposable = vscode.commands.registerCommand('extension.toUppercase', () => {
        transformSelectedText((text) => text.toUpperCase());
    });

    // Lowercase
    const lowercaseDisposable = vscode.commands.registerCommand('extension.toLowercase', () => {
        transformSelectedText((text) => text.toLowerCase());
    });

    // CamelCase
    const camelCaseDisposable = vscode.commands.registerCommand('extension.toCamelCase', () => {
        transformSelectedText((text) => {
            return text
                .split(/\s+/)
                .map((word, index) => index === 0
                    ? word.toLowerCase()
                    : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                .join('');
        });
    });

    // Capitalize
    const capitalizeDisposal = vscode.commands.registerCommand('extension.toCapitalize', () => {
        transformSelectedText((text) => text.replace(/\b\w/g, (match) => match.toUpperCase()));
    });

    // Join Lines
    const joinLinesDisposable = vscode.commands.registerCommand('extension.joinLinesBy', async () => {
        const input = await vscode.window.showInputBox({ prompt: 'Enter a string/character to join lines:' });
        if (input === undefined || input === '') { return; }
        transformSelectedText((text) => {
            if (text.includes('\n')) {
                return text.split('\n').join(input);
            } else {
                vscode.window.showInformationMessage('No multiple lines selected.');
                return text; // No change if only one line
            }
        });
    });

    // Split Lines
    const splitLinesDisposable = vscode.commands.registerCommand('extension.splitLinesBy', async () => {
        const input = await vscode.window.showInputBox({ prompt: 'Enter a string/character to split by into lines:' });
        if (input === undefined || input === '') { return; }
        transformSelectedText((text) => {
            if (text.includes(input)) {
                return text.split(input).join('\n');
            } else {
                vscode.window.showInformationMessage('No matching text to split by.');
                return text; // No change if input not found
            }
        });
    });

    // Join Words
    const joinWordsDisposable = vscode.commands.registerCommand('extension.joinWordsBy', async () => {
        const input = await vscode.window.showInputBox({ prompt: 'Enter a string/character to join words:' });
        if (input === undefined || input === '') { return; }
        transformSelectedText((text) => text.split(/\s+/).join(input));
    });

    // Split Words
    const splitWordsDisposable = vscode.commands.registerCommand('extension.splitWordsBy', async () => {
        const input = await vscode.window.showInputBox({ prompt: 'Enter a string/character to split by into words:' });
        if (input === undefined || input === '') { return; }
        transformSelectedText((text) => {
            if (text.includes(input)) {
                return text.split(input).join(' ');
            } else {
                vscode.window.showInformationMessage('No matching text to split by.');
                return text; // No change if input not found
            }
        });
    });

    // Split CamelCase
    const splitCamelCaseDisposal = vscode.commands.registerCommand('extension.splitCamelCase', () => {
        transformSelectedText((text) => text.replace(/(.{1})([A-Z])/g, '$1 $2').replace(/([A-Z])([A-Z])/g, '$1 $2'));
    });


    context.subscriptions.push(
        pasteDisposable,
        copyDisposable,
        uppercaseDisposable,
        lowercaseDisposable,
        camelCaseDisposable,
        capitalizeDisposal,
        joinLinesDisposable,
        splitLinesDisposable,
        joinWordsDisposable,
        splitWordsDisposable,
        splitCamelCaseDisposal
    );
}

// Helper function to transform selected text
function transformSelectedText(transform: (text: string) => string) {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
        vscode.window.showErrorMessage('No active editor detected.');
        return;
    }

    const selection = editor.selection;
    const selectedText = editor.document.getText(selection);

    if (!selectedText) {
        vscode.window.showErrorMessage('No text selected.');
        return;
    }

    const transformedText = transform(selectedText);

    editor.edit((editBuilder) => {
        editBuilder.replace(selection, transformedText);
    });
}

export function deactivate() {}
