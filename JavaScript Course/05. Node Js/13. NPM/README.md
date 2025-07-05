<h1 align="center">What is npm in Node.js?</h1>

```
npm (Node Package Manager) is the default package manager for Node.js. It allows you to install, manage, and share JavaScript libraries and frameworks. With npm, you can add thousands of open-source packages (modules) to your project, saving time by using code that has already been written by others.
```

## Key Features of npm:

```
1. Install Packages: You can install external libraries or packages (like frameworks, tools, or modules) to add functionality to your project.

2. Version Management: It helps in managing different versions of the same package and keeps your project dependencies up-to-date.

3. Package Publishing: You can publish your own packages to the npm registry for others to use.
```

## Installing npm:

```
npm is automatically installed when you install Node.js, so you don’t need to install it separately.
```

### To verify if you have npm installed, open a terminal or command prompt and type:

```bash
npm -v
```

or 

```bash
npm --version
```
This will display the version of npm installed.

## Initializing a Project with npm

```
To create a new Node.js project and initialize npm, you need to create a package.json file, which holds information about your project and its dependencies.
```

### In your project directory, run:

```bash
npm init
```

```
This command will ask you a series of questions (like project name, version, description, etc.). You can press Enter to accept the default values, or fill them in as needed.

Once completed, it will generate a package.json file.
```

If you want to surpass these questions then you can use this command

```
npm init -y
```

This command will answers all questions with "yes" .


### The package.json file will look something like this:


```json
{
  "name": "my-app",
  "version": "1.0.0",
  "description": "My first Node.js app",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Your Name",
  "license": "ISC"
}
```

## Installing Packages

To install packages from npm, use the npm install command.

For example, to install the popular package lodash:

```bash
npm install lodash
```

or 

```bash
npm i lodash
```


```
This will:

Download the lodash package from the npm registry.

Add a node_modules/ directory, where lodash and its dependencies will be stored.

Update the package.json file with lodash as a dependency.

Add a package-lock.json file to lock the installed versions of all packages.
```

#### You can now use lodash in your project:

```javascript
const _ = require('lodash');
console.log(_.isEmpty({})); // true
```

## Managing Dependencies

```md
1. dependencies: These are the libraries your project needs to run. npm will automatically add any installed packages here in the package.json file.
```

#### Example of a dependencies section in package.json:

```json
{
  "dependencies": {
    "lodash": "^4.17.21"
  }
}
```
```md
1. devDependencies:-> These are packages needed only for development (e.g., testing tools, linters). You can install them by using the --save-dev flag:
```

```bash
npm install mocha --save-dev
```
This will add mocha as a dev dependency, which is not required when the app is deployed.

## Common npm Commands

### Install a package:

```bash
npm install <package-name>
```

### Uninstall a package:

```bash
npm uninstall <package-name>
```

or 

```bash
npm un <package-name>
```

### Install all dependencies (from package.json):

```bash
npm install
```

or 

```bash
npm i <package-name>
```

### Update packages:

```bash
npm update
```

### List installed packages:

```bash
npm list
```

## Nodemon

```md
1. nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.

2. nodemon does not require any additional changes to your code or method of development. nodemon is a replacement wrapper for node. To use nodemon, replace the word node on the command line when executing your script.
```

### Installing Nodemon

#### Either through cloning with git or by using npm (the recommended way):

```bash
npm install -g nodemon # or using yarn: yarn global add nodemon
```
And nodemon will be installed globally to your system path.

#### You can also install nodemon as a development dependency:

```bash
npm install --save-dev nodemon # or using yarn: yarn add nodemon -D
```

With a local installation, nodemon will not be available in your system path or you can't use it directly from the command line. Instead, the local installation of nodemon can be run by calling it from within an npm script (such as npm start) or using npx nodemon.

## Scripts In npm

In npm, scripts are custom commands that you can define in the package.json file to automate tasks such as running your application, building it, or running tests. They allow you to simplify complex tasks by running them with a simple command.

### Example of npm Scripts

##### In the package.json file, you can define a scripts section:

```json
{
  "name": "my-app",
  "version": "1.0.0",
  "scripts": {
    "start": "node app.js",
    "test": "echo \"No tests specified\"",
    "build": "webpack --config webpack.config.js"
  }
}
```

#### In this example:


```md
1. start: Runs your Node.js application by executing node app.js. You can run it by typing "npm start" in the terminal.
2. test: A placeholder for testing the application. You can modify it to run actual tests. Run it with "npm test".
3. build: Runs a build script for bundling the app with Webpack. You can execute this by running "npm run build".
```

### Running npm Scripts
#### To run a script, use:

```bash
npm run <script-name>
```

#### For example, to run the build script:

```bash
npm run build
```

#### For scripts named start or test, you can omit run:

```bash
npm start
npm test
```

npm scripts are useful for automating repetitive tasks like testing, building, and deploying your project.

## .gitignore File in npm
```
The .gitignore file specifies which files and directories should be ignored by Git when you commit your code to a repository. This is useful because certain files (like sensitive data or automatically generated files) should not be version-controlled.
```

#### Example .gitignore File

```plaintext
node_modules/
dist/
.env
.DS_Store
package-lock.json
```

```md
1. node_modules/: The directory where npm installs your project dependencies. You don't need to push these to Git, as they can be installed by running npm install.

2. dist/: If you build your project (e.g., with Webpack), this folder contains the compiled files.

3. .env: Files containing sensitive information like API keys or configuration values.

4. .DS_Store: A system file generated by macOS that doesn’t need to be tracked by Git.

5. package-lock.json: Depending on your preferences, some teams choose to ignore this file, though it's often included to lock dependency versions.
```
#### The .gitignore file helps prevent unnecessary or sensitive files from being pushed to your Git repository, keeping it clean and secure.



## Summary

```md
1. npm is a package manager for Node.js that helps you install, manage, and share code libraries.
2. It uses a package.json file to track the project's dependencies and metadata.
3. You can easily install, update, and remove packages using simple npm commands.
4. Learning npm is essential for managing dependencies and working with third-party libraries in Node.js development.
5. npm scripts help automate tasks like starting your app, running tests, or building your project.
6. .gitignore tells Git which files and directories to ignore, often excluding things like node_modules/, build files, and sensitive data like .env files.
```






