(function() {
    'use strict';


    require.config({
            "shim" : {
                "sightglass" : {
                    "exports" : "sightglass"
                },
                "rivets" : {
                    "exports" : "rivets"
                }
            },
            "packages" : [
                {
                    "name" : "masseuse",
                    "location" : "/vendor/masseuse/app"
                }
            ],
            "paths" : {
                "backbone"                  : "./vendor/backbone-amd/backbone",
                "jquery"                    : "./vendor/jquery/dist/jquery",
                "underscore"                : "./vendor/lodash/lodash.min",
                "rivets"                    : "./vendor/rivets/dist/rivets",
                "jade"                      : "./vendor/require-jade/jade",
                "editor"                    : "./admin/editor",
                "editorData"                : "./admin/editorData"
            }
        }
    );
    /* jshint ignore:end */
    require([
        './admin/page/edit/view'
    ], function(PageView) {

        console.log('starting edit view');
        new PageView().start();
    });
}());