## Design Thinking

I built this project with the following in minds:
1. Simplicity
2. Fast to deploy
3. Easy to test and scale

Simplicity means:
1. Not using Redux although it's part of the requirements. I am using Redux before and I am not interested in using it again; the most thing I don't like about Redux is that it added complexity with its verbose syntax and code structure. And it's againts React'state one way data flow where Redux using global scope for data!
2. Using [Ant Design](https://ant.design/) CSS library to fasten development; it also has complete component solution for React though it's not easy at first. I have been using it as a primary CSS solution, though sometimes I use [styled-components](https://www.styled-components.com/) as well.
3. Use CRA v2 so not to create boilerplate project from scratch.
4. Using [axios](https://github.com/axios/axios) instead `fetch` when performing AJAX request. It's less verbose than using `fetch` and sometimes I face problem using `fetch` which strangely I've never have any problem when using `axios`.

Fast to deploy means Code is written as is; sometimes there are multiple codes that can be reuse else where, sometimes I stumble upon a bug that can not be fix immediately. My code may be not be 'clean' or 'elegant', but it does the job done in such a short time.

I have yet to test this project using standard code testing (with Jest or similiar library); but it passed all the standard UI testing, backend testing, CRUD testing. Except for the Update parts. Not sure why the update won't work.

Using this project is easy:
1. `git clone https://github.com/techandmedia/portfolio.git` 
2. `git checkout prospace`
3. `cd` into the just created folder
4. `npm install` or `yarn`
5. `npm start` or `yarn start`
6. The app will run on [http://localhost:3000](http://localhost:3000)

That's it!
(btw, I am using React 16.7.0 alpha just for Hooks testing. This app can be used with any of React v16)

For the Server part, go [here](https://github.com/techandmedia/portfolio/tree/prospace/server) 

==============================================================

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
