/**
 * create a new react project using the command: npx create-react-app app-name
 * open the app in vs code
 * delete the package-lock.json file
 * run the command in the terminal: yarn add -D eslint
 * 
 * npm init @eslint/config
 * * How would you like to use ESLint? … (To check syntax, find problems, and enforce code style) 
 * * What type of modules does your project use? … (JavaScript modules (import/export))
 * * Which framework does your project use? … (React)
 * * Does your project use TypeScript? ‣ No / Yes   (No)
 * * Where does your code run? … (Browser)   
 * * How would you like to define a style for your project? … (▸ Use a popular style guide)
 * * Which style guide do you want to follow? … (▸ Airbnb: https://github.com/airbnb/javascript)
 * * What format do you want your config file to be in? … (JSON)
 * * Would you like to install them now? ‣ No / Yes (Yes)
 * * Which package manager do you want to use? … (npm or yarn)
 * 
 * select all the code inside the .eslintrc.json file and replace them by the below .eslintrc codes
 * 
 * 
 {
	"env": {
		"browser": true,
		"es6": true,
		"node": true,
		"jest": true
	},
	"extends": [
		"plugin:react/recommended",
		"eslint:recommended",
		"airbnb",
		"airbnb/hooks"
	],
	"overrides": [],
	"parserOptions": {
		"ecmaVersion": "latest",
		"sourceType": "module"
	},
	"plugins": ["react", "react-hooks"],
	"rules": {
		"react/jsx-filename-extension": 0,
		"react/react-in-jsx-scope": 0,
		"no-console": 0,
		"react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
		"react-hooks/exhaustive-deps": "warn", // Checks effect dependencies
		"no-alert": "off",
		"comma-dangle": ["error", "never"]
	}
}





* copy and paste the below vs code settings.json file code and paste it

{
	// START: Settings for Eslint and Prettier
	"editor.defaultFormatter": "esbenp.prettier-vscode",
	"editor.formatOnSave": true,
	"[javascript]": {
		"editor.formatOnSave": false,
		"editor.defaultFormatter": null
	},
	"[javascriptreact]": {
		"editor.formatOnSave": false,
		"editor.defaultFormatter": null
	},
	"editor.codeActionsOnSave": {
		"source.fixAll": true,
		"source.organizeImports": true
	},
	"json.validate.enable": false,
	"eslint.alwaysShowStatus": true,
	"eslint.validate": [
		"javascript",
		"javascriptreact",
		"typescript",
		"typescriptreact"
	],
	// START: Settings for Prettier
	"prettier.useTabs": true,
	"prettier.jsxSingleQuote": false,
	"prettier.tabWidth": 2,
	"prettier.arrowParens": "avoid",
	"prettier.singleQuote": true,
	//emmet
	"emmet.triggerExpansionOnTab": true,
	"emmet.includeLanguages": {
		"javascript": "javascriptreact"
	}
}


*
*/
