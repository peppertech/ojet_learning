/**
  Copyright (c) 2015, 2019, Oracle and/or its affiliates.
  The Universal Permissive License (UPL), Version 1.0
*/
define(['ojs/ojcomposite', 'text!./profile-card-view.html', './profile-card-viewModel', 'text!./component.json', 'css!./profile-card-styles'],
  function(Composite, view, viewModel, metadata) {
    Composite.register('profile-card', {
      view: view,
      viewModel: viewModel,
      metadata: JSON.parse(metadata)
    });
  }
);