/*
==========================================
File Name: 
Ums.js

Project: 
User Management System - Frontend Developer Task

Author: 
Bretislav Mazoch, bretislav.mazoch@gmail.com, http://www.bretick.cz/en/

Created On: 
06/2015
==========================================

Comments:
var naming convention and special constructions
_var - is private variable
$var - is jQuery object variable
var self = this; - "Getting Out of Binding Situations in JavaScript" http://alistapart.com/article/getoutbindingsituations 

*/




//=============
//Ums.App class
//=============


/** @namespace */
var Ums = Ums || {};





/**
* Ums.App 
* @class For creating User Management System app instances - initializes the MVC (Model-View-Controller) compontents together.
*  
*/
Ums.App = function () {	

	var appModel = new Ums.AppModel();
	var appView = new Ums.AppView();
	new Ums.AppController(appModel, appView);	
    	
} //ends Ums.App class 



