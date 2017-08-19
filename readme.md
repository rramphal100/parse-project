Ryan's Parse Project
====================

This project is my attempt to run a MongoDB server and manage it with Parse server and a Parse Dashboard that are both hosted from a single node express application.

To Install / Run
----------------
1. Configure and run your own MongoDB server. Add data to it as necessary for your particular project.
2. Clone this repository to your machine.
3. Be sure to modify the repository info in package.json before continuing, if you decided to fork your own copy of this repository.
4. Run **npm init** and configure your program as you desire.
5. Run **npm install** to install the dependencies for running this code.
6. Customize your configuration to match your project and MongoDB settings by either modifying the code in *app.js* or by using the custom arguments to the run command. Run **node app.js --help** for details. All listed options are optional and have default values.
7. Run **node app.js** along with any desired optional flags and data and you should be ready to go!

Usage
-----

Now that you have Parse running, you can interface any projects of yours that use a NoSQL database solution with it for easier commands than with MongoDB alone. Parse Dashboard makes it easier to manage your data with a web-based GUI solution, rather than using lengthy and sometimes repetitive commmand line statements. You can even use parse to manage certain application-specific functionality, like cloud code for running CRON scripts, or setting up push notifications for your mobile app!
