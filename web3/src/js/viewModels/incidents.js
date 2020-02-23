/**
 * @license
 * Copyright (c) 2014, 2019, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 * @ignore
 */
/*
 * Your incidents ViewModel code goes here
 */
define(['accUtils', 'ojs/ojbootstrap', 'knockout', 'ojs/ojknockout', 'ojs/ojavatar' ,'jet-composites/profile-card/loader'],
 function(accUtils) {

    function IncidentsViewModel(Bootstrap, ko) {
      var self = this;
      this.employees = [
        {
          name: 'Deb Raphaely',
          avatar: '../../css/images/dep.jpeg',
          title: 'Purchasing Director',
          work: 5171278899,
          email: 'deb.raphaely@oracle.com'
        },
        {
          name: 'Adam Fripp',
          avatar: null,
          title: 'IT Manager',
          work: 6501232234,
          email: 'adam.fripp@oracle.com'
        }
      ];
      // Below are a set of the ViewModel methods invoked by the oj-module component.
      // Please reference the oj-module jsDoc for additional information.

      /**
       * Optional ViewModel method invoked after the View is inserted into the
       * document DOM.  The application can put logic that requires the DOM being
       * attached here.
       * This method might be called multiple times - after the View is created
       * and inserted into the DOM and after the View is reconnected
       * after being disconnected.
       */
      self.connected = function() {
        accUtils.announce('Incidents page loaded.', 'assertive');
        document.title = "Incidents";
        // Implement further logic if needed
      };

      /**
       * Optional ViewModel method invoked after the View is disconnected from the DOM.
       */
      self.disconnected = function() {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after transition to the new View is complete.
       * That includes any possible animation between the old and the new View.
       */
      self.transitionCompleted = function() {
        // Implement if needed
      };
    }

    /*
     * Returns an instance of the ViewModel providing one instance of the ViewModel. If needed,
     * return a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.
     */
    return IncidentsViewModel;
  }
);
