🚨 Be sure to update this file according to your team.

## Run the project
* To run this project you will need [Node](https://nodejs.org/en/). We strongly recommend to use [nvm](https://github.com/nvm-sh/nvm) for installing node.
* After installing nvm go to project directory and run:
    * `nvm install [version in .nvmrc file]`
    * `nvm use`
    * `npm install`
    * `npm start` - builds project for development


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run lint`

Runs all linters and prettier and shows any warnings/errors in console.

### `npm run storybook`

Runs storybook for development.

## Learn More

To learn React, check out the [React documentation](https://reactjs.org/).

## Git Guidelines

New features should be developed in separate branches starting with the `feature/` prefix, for example: `feature/SFE21V-7-Main-layout`. The `SFE21V-7` part is an issue number from JIRA, if there's no issue for this feature, feature key can be omitted.

Bugs should be fixed in related feature branches if the branch is not merged yet or in separate branches named with `bugfix/` prefix.

Start commit messages with `JIRA issue number` + `Fix`, `Add`, `Remove`, `Change`, etc. instead of `Fixed`, `Added`, `Removed`, `Changed`.

Commit messages should describe what will be done with this commit. Some examples:

* SFE21V-7 Add lodash to devDependencies
* SFE21V-7 Fix memory-leak in worker tasks
* SFE21V-7 Remove lodash from devDependencies
* SFE21V-7 Add functionality for pausing worker tasks
* SFE21V-7 Change the layout of the dashboard page

You may specify multiple issue number if commit is relevant for them or if using subtasks:

* SFE21V-7, SFE21V-8 Change the layout of the dashboard page

This enables to easily locate branch or related commits directly from JIRA story or lookup story when looking at commit history.

## Endpoints

http://frontendsourceryweb.s3-website.eu-central-1.amazonaws.com/userData.json

http://frontendsourceryweb.s3-website.eu-central-1.amazonaws.com/categories.json

http://frontendsourceryweb.s3-website.eu-central-1.amazonaws.com/devices.json

http://frontendsourceryweb.s3-website.eu-central-1.amazonaws.com/books.json

http://frontendsourceryweb.s3-website.eu-central-1.amazonaws.com/restaurants.json

http://frontendsourceryweb.s3-website.eu-central-1.amazonaws.com/rooms.json

http://frontendsourceryweb.s3-website.eu-central-1.amazonaws.com/stories.json

http://frontendsourceryweb.s3-website.eu-central-1.amazonaws.com/weather.json
