![](http://laurentcurau.com/images/bazinga.png)

Bazinga is a TV show tracker. A signed-in user can subscribe to a show and be notified by email 2 hours before the show starts. Email notification are sent with Mandrill.

Bazinga uses a REST API built with NodeJS and Express. Server-side user authentication uses Passport. User accounts and TV shows are stored in a MongoDB database hosted on MongoLab.

The project's front-end is built using AngularJS and Bootstrap Sass. Template caching, CSS minification, as well as JavaScript file concatenation and minification is done with Gulp.
