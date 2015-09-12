Package.describe({
  name: 'tgienger:meteor-mdl',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.addAssets([
    'MaterialIcons-Regular.ttf',
    'MaterialIcons-Regular.woff',
    'MaterialIcons-Regular.woff2',
  ], 'client')
  
  api.addFiles([
    'material-icons.css',
    'material.js',
    'material.css'
  ], 'client');
});
