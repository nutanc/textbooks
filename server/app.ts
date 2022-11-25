// =============================================================================
// Mathigon Studio Demo App
// (c) Mathigon
// =============================================================================


import {MathigonStudioApp} from '@mathigon/studio/server/app';

new MathigonStudioApp()
    .get('/', (req, res) => res.render('home.pug', {}))
    .get('/courses', (req, res) => res.render('courses.pug', {}))
    .get('/custom', (req, res) => res.render('custom.pug', {}))
    .course({})
    .redirects({'/help': '/'})
    .errors()
    .listen(8080);
