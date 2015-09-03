/*
==========================================
File Name: 
AppController.js

Project: 
User Management System - Frontend Developer Task

Author: 
Bretislav Mazoch, bretislav.mazoch@gmail.com, http://www.bretick.cz/en/

Created On: 
06/2015
==========================================
*/




//=======================
//Ums.AppController class
//=======================


/** @namespace */
var Ums = Ums || {};




/**
* Ums.AppController 
* @class Controller - interlink beetween the view and the model (manages user-input and application logic).
* 
* @param {object} model The model of the app.
* @param {object} view The view of the app.
* 
*/
Ums.AppController = function (model, view) {	

	var self = this;
	this._appModel = model;
	this._appView = view;
	
	
	
  //event bindings
  $('body').bind('updateView', function(e) {       
      self._appView.updateView(self._appModel.userManagement.getUsers(), self._appModel.groupManagement.getGroups());
  });
      
  $('body').bind('addUser', function(e) {
  	self._appModel.userManagement.addUser(e.userName, e.groupID);
  });
  
  $('body').bind('addGroup', function(e) {
  	self._appModel.groupManagement.addGroup(e.groupName);
  });
  
  $('body').bind('deleteUser', function(e) {
  	self._appModel.userManagement.deleteUser(e.userID);
  });
  
  $('body').bind('changeGroup', function(e) {
  	self._appModel.userManagement.changeGroup(e.userID, e.groupID);
  });
  
  $('body').bind('deleteGroup', function(e) {
  	self._appModel.groupManagement.deleteGroup(e.groupID);
  });
    

	//inits models
	this._appModel.init();
	this._appView.init();
    
    	
} //ends Ums.AppController class 







