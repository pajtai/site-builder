# Site-builder

Works but experimental at the the moment.
        
This allows you to build a static site using mongo.
        
To use create a new project and then
        
npm install --save site-builder
        
in index.js put something like
        
```javascript
var sb = require('site-builder'),
    myProjectDb = 'something';

sb
    .start(myProjectDb)
    .catch(function(error) {
        console.log('error:', error);
        console.log(error.stack);
        process.exit(1);
    });
```            

Now you can make a site in a few steps:

1. Makes some modules using the url pattern: `/admin/module/[module name]`
1. Create pages from these modules: `[route]/edit`
1. View your site: `[route]`
   