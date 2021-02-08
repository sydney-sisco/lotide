const assertEqual = require('../assertEqual');
const head = require('../head');


assertEqual(head([-1,0,1]), -1);
assertEqual(head(["monday", "tuesday", "wednesday"]), "monday");
assertEqual(head(['one']), 'one');
assertEqual(head([], undefined));
