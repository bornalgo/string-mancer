# String Mancer
![String Mancer](images/icon.png)

## Description
String Mancer is a powerful Visual Studio Code extension that provides enhanced copy, paste, and string manipulation features.

- **Custom Paste**: Replaces backslashes (`\`) with double backslashes (`\\`) when pasting text.
- **Custom Copy**: Replaces double backslashes (`\\`) with single backslashes (`\`) when copying text to the clipboard.
- **Uppercase**: Converts the selected text to uppercase.
- **Lowercase**: Converts the selected text to lowercase.
- **CamelCase**: Converts the selected text to camelCase format.
- **Capitalize**: Capitalizes the first letter of each word in the selected text.
- **Join Lines**: Joins multiple lines in the selected text with a user-provided string or character.
- **Split Lines**: Splits the selected text into multiple lines based on a user-provided string or character.
- **Join Words**: Joins words in the selected text with a user-provided string or character.
- **Split Words**: Splits words in the selected text based on a user-provided string or character.
- **Split CamelCase**: Splits a camelCase string into individual words.

## Installation
1. Download the `.vsix` package of the extension.
2. Open Visual Studio Code.
3. Go to the Extensions view by clicking on the Extensions icon in the Activity Bar or pressing `Ctrl+Shift+X`.
4. Click on the three-dot menu at the top-right corner of the Extensions view and select "Install from VSIX...".
5. Navigate to the downloaded `.vsix` file and select it to install the extension.

## Usage
- **Custom Paste**: Press `CTRL+ALT+V` (or from context menu choose **String Mancer > Custom Paste**) to paste text with backslashes replaced by double backslashes.
- **Custom Copy**: Select text and press `CTRL+ALT+C` (or from context menu choose **String Mancer > Custom Copy**) to copy text with double backslashes replaced by single backslashes.
- **Uppercase**: Select text and right-click to choose **String Mancer > Uppercase** to convert the selected text to uppercase.
- **Lowercase**: Select text and right-click to choose **String Mancer > Lowercase** to convert the selected text to lowercase.
- **CamelCase**: Select text and right-click to choose **String Mancer > CamelCase** to convert the selected text to camelCase format.
- **Capitalize**: Select text and right-click to choose **String Mancer > Capitalize** to capitalize the first letter of each word in the selected text.
- **Join Lines**: Select text with multiple lines and right-click to choose **String Mancer > Join Lines** to join them with a user-provided string or character.
- **Split Lines**: Select text and right-click to choose **String Mancer > Split Lines** to split the text by a user-provided string or character.
- **Join Words**: Select text and right-click to choose **String Mancer > Join Words** to join words with a user-provided string or character.
- **Split Words**: Select text and right-click to choose **String Mancer > Split Words** to split the text by a user-provided string or character.
- **Split CamelCase**: Select camelCase text and right-click to choose **String Mancer > Split CamelCase** to split the camelCase text into individual words.

## Creating the VSIX Package
1. Make sure you have `vsce` (Visual Studio Code Extension Manager) installed globally:
   ```sh
   npm install -g vsce
   ```
2. Navigate to the root directory of your extension where `package.json` is located.
3. Run the following command to create a `.vsix` package:
   ```sh
   vsce package
   ```
4. The generated `.vsix` file will be available in the same directory.

## Features
- Replace `\` with `\\` on paste.
- Replace `\\` with `\` on copy.
- Convert selected text to uppercase.
- Convert selected text to lowercase.
- Convert selected text to camelCase.
- Capitalize the first letter of each word in the selected text.
- Join multiple lines with a user-provided string or character.
- Split selected text by a user-provided string or character.
- Join words in selected text with a user-provided string or character.
- Split selected text into words by a user-provided string or character.
- Split camelCase text into individual words.

## Commands
- `extension.customPaste`: Triggers the custom paste command.
- `extension.customCopy`: Triggers the custom copy command.
- `extension.toUppercase`: Converts the selected text to uppercase.
- `extension.toLowercase`: Converts the selected text to lowercase.
- `extension.toCamelCase`: Converts the selected text to camelCase.
- `extension.toCapitalize`: Capitalizes the first letter of each word in the selected text.
- `extension.joinLinesBy`: Joins multiple lines in the selected text with a user-provided string or character.
- `extension.splitLinesBy`: Splits the selected text into lines based on a user-provided string or character.
- `extension.joinWordsBy`: Joins words in the selected text with a user-provided string or character.
- `extension.splitWordsBy`: Splits the selected text into words based on a user-provided string or character.
- `extension.splitCamelCase`: Splits camelCase text into individual words.

## Contributing
If you would like to contribute to this extension, please submit a pull request or open an issue on the GitHub repository.

## License
This extension is licensed under the MIT [License](LICENSE).
