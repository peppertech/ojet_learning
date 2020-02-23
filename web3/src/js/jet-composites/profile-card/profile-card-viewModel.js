/**
  Copyright (c) 2015, 2019, Oracle and/or its affiliates.
  The Universal Permissive License (UPL), Version 1.0
*/
'use strict';
define(
    ['knockout', 'ojL10n!./resources/nls/profile-card-strings', 'ojs/ojcontext', 'ojs/ojknockout', 'ojs/ojavatar'], function (ko, componentStrings, Context) {
    
    function ExampleComponentModel(context) {
        var self = this;
        
        //At the start of your viewModel constructor
        var busyContext = Context.getContext(context.element).getBusyContext();
        var options = {"description": "Web Component Startup - Waiting for data"};
        self.busyResolve = busyContext.addBusyState(options);

        self.composite = context.element;

        //Example observable
        //self.messageText = ko.observable('Hello from Example Component');
        this.initials = null;
        this.workFormatted = null;
        var element = context.element;
  
        /**
         * Formats a 10 digit number as a phone number.
         * @param  {number} number The number to format
         * @return {string}        The formatted phone number
         */
        var formatPhoneNumber = function(number) {
          return Number(number).toString().replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
        }
  
        if (context.properties.name) {
          var initials = context.properties.name.match(/\b\w/g);
          this.initials = (initials.shift() + initials.pop()).toUpperCase();
        }
        if (context.properties.workNumber)
          this.workFormatted = formatPhoneNumber(context.properties.workNumber);
  
        /**
         * Flips a card
         * @param  {MouseEvent} event The click event
         */
        this.flipCard = function(event) {
          if (event.type === 'click' || (event.type === 'keypress' && event.keyCode === 13)) {
            // It's better to look for View elements using a selector
            // instead of by DOM node order which isn't guaranteed.
            element.querySelector('.profile-card-flip-container').classList.toggle('profile-card-flipped');
          }
        };
        self.properties = context.properties;
        self.res = componentStrings['profile-card'];
        // Example for parsing context properties
        // if (context.properties.name) {
        //     parse the context properties here
        // }

        //Once all startup and async activities have finished, relocate if there are any async activities
        self.busyResolve();
    };
    
    //Lifecycle methods - uncomment and implement if necessary 
    //ExampleComponentModel.prototype.activated = function(context){
    //};

    //ExampleComponentModel.prototype.connected = function(context){
    //};

    //ExampleComponentModel.prototype.bindingsApplied = function(context){
    //};

    //ExampleComponentModel.prototype.disconnect = function(context){
    //};

    //ExampleComponentModel.prototype.propertyChanged = function(context){
    //};

    return ExampleComponentModel;
});