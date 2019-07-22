# React the complete guide notes

## 24. Module Introduction The Basics - All core React Concepts

### 25. The Build Workflow
We want to set up a local react project (On machine to work with my own editor). 
**Recommended** for SPAs and MPAs.

#### **Why?**
- We want to Optimize code. Ship code that's small as possible to increase performance. 
- We want to use Next-Gen JS features. Write in  ES6 vs ES5 so we need a compiler.
- Be more productive writing code (prefixes, linting).

#### **How?**
- Using a **Dependency Management tool (npm or yarn).**
- Use a Bundler (Webpack) so that you can split files and the bundler handles the "bundling" into a giant file.
- Use a Compiler to translate next gen javascript into older javascript that works in older browsers. Babel + presets.
- Use a development server to test locally in your machine.

### 26. Using Create React App

1. Install NPM and Yarn
2. Install create react app
Note all of the commands that you have available (using yarn) yarn start, yarn build, etc
3. run `npx create-react-app <name of your app>` 
4. `cd <name of your app>`
5. `yarn start`
Now the server is started and if we visit localhost:3000 you can check the live website out

### 27. Understanding the folder structure

`package.json` is the info of the project, name, version and dependencies. It also includes the dependencies.

`node_modules` is generated automatically and include all the dependencies 

`public`is the folder that serves the website in the end. Index.html is the single page that we will have during the project. The script files will get injected. Kind of like application.html.erb.

The <div> with id root is the one that will be having all of the code.

`manifest.json`fives a progressive webapp out of the box

`src`folder is the one that cotains all of the js that we will use.

### 28. Understanding Component basics

