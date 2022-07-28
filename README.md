### Typescript Express Server Template

<br>

### Useful commands:

- `npm run build` (will create / update your dist folder by compiling all the Typescript files);
- `npm run test` (will run all the tests if you have them, otherwise it will just print out an error);
- Both `npm run prestart` && `npm run preserve` will run just like npm run build;
- `npm start` will run your server after it has been build and compiled;

### Getting Started:

- On package.json and package-lock.json change the "name" to your project's name;
- Make sure you run `npm install`;
- Add a <b>.env</b> to your main folder with all the environment variables that you will need;
- After that, run `npm run build` to do an initial compiling of all the initial files;
- To initialize your project and keep the surver running just type `npm start` on your terminal and it will start listening to changes;
- Use the <b> custom.d.ts </b> file to create global interfaces;
