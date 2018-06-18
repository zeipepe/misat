import React from 'react';

import { Meteor } from 'meteor/meteor';

import { render } from 'react-dom';

import App from '../imports/ui/App.js';
 
const container = document.getElementById('target')

Meteor.startup(() => {

  render(<App />, container);

});

