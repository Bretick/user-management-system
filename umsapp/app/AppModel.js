/*
==========================================
File Name: 
AppModel.js

Project: 
User Management System - Frontend Developer Task

Author: 
Bretislav Mazoch, bretislav.mazoch@gmail.com, http://www.bretick.cz/en/

Created On: 
06/2015
==========================================
*/




//==================
//Ums.AppModel class
//==================


/** @namespace */
var Ums = Ums || {};




/**
* Ums.AppModel 
* @class Business logic for the app.
*  
*/
Ums.AppModel = function () {	
		
	var self = this;
	this.userManagement = new UserManagement();
	this.groupManagement = new GroupManagement();
	
	var notifyController = function () {	
		$('body').trigger('updateView');
	}



	/**
	 * Initializates the model.
	 * 
	 */	
	this.init = function () {
   		this.groupManagement.addGroup('Unspecified'); //add default group (after that trigger update of the view)
	}	
		
		

	/**
	* User
	* @class Class for creating users.
	* 
	* @param {number} userID ID of the user.
	* @param {string} name Name of the user.
	* @param {number} groupID ID of the group where the user belongs.
	*  
	*/
	function User(userID, name, groupID) {
		
		this.id = userID;
		this.name = name || "No username";
		this.groupID = groupID || 0;	
		
	}; //ends User class





	/**
	* UserManagement
	* @class Class for management of users.
	*  
	*/
	function UserManagement() {
		
 		this._users = [];   		
 		var _usersCounter = 0;
   		
   		
		/**
		 * Adds new user.
		 * 
		* @param {string} name Name of the user.
		* @param {number} groupID ID of the group where the user belongs.
		 * 
		 */		
		this.addUser = function (name, groupID) {
			
			this._users.push(new User(_usersCounter, name, groupID));
			_usersCounter++;
			notifyController();
			
		}	
   		
   		
   		
		/**
		 * Deletes specific user.
		 * 
		* @param {number} userID ID of the user.
		 * 
		 */		
		this.deleteUser = function (userID) {
			
			var result = confirm("Do you really want to remove this user?\n#" + userID + ' ' + this.getUserName(userID));
			if (result) {
			    for(var i = 0 ; i < this._users.length; i++){
				    if (this._users[i].id == userID) { 
				        this._users.splice(i, 1);
						notifyController();
				        break;
				    }
			    }
			}
		    
		}
   		
   		
   		
		/**
		 * Changes user's group.
		 * 
		 * @param {number} userID ID of the user.
		 * @param {number} groupID ID of the new group.
		 * 
		 */		
		this.changeGroup = function (userID, groupID) {

		    for(var i = 0 ; i < this._users.length; i++){
			    if (this._users[i].id == userID) { 
					this._users[i].groupID = groupID;
					notifyController();
			        break;
			    }
		    }			
		    
		}
   		
   		
   		
		/**
		 * Gets all users.
		 * 
		 * @return {array} List of users.
		 * 
		 */		
		this.getUsers = function () {	
					
			return this._users;		    
			
		}
   		
   		
   		
		/**
		 * Get user name.
		 * 
		 * @param {number} userID ID of the user.
		 * 
		 * @return {string} Name of the user.
		 * 
		 */		
		this.getUserName = function (userID) {	
					
		    for(var i = 0 ; i < this._users.length; i++){
			    if (this._users[i].id == userID) { 
			        return this._users[i].name;
			    }
		    }	    
			
		}
   		
		
	}; //ends UserManagement class





	/**
	* Group
	* @class Class for creating groups
	* 
	* @param {number} groupID ID of the group.
	* @param {string} name Name of the group.
	*  
	*/
	function Group(groupID, name) {
		
		this.id = groupID;
		this.name = name || "No group name";
		
	}; //ends Group class





	/**
	* GroupManagement
	* @class Class for management of groups.
	*  
	*/
	function GroupManagement() {
		
 		this._groups = [];   	
 		var _groupsCounter = 0;
   		
   		
		/**
		 * Adds new group.
		 * 
		 * @param {string} name Name of the group.
		 * 
		 */		
		this.addGroup = function (name) {
			
			this._groups.push(new Group(_groupsCounter, name));
			_groupsCounter++;
			notifyController();
			
		}	
   		
   		
   		
		/**
		 * Deletes specific group.
		 * 
		 * @param {number} groupID ID of the group.
		 * 
		 */		
		this.deleteGroup = function (groupID) {

			var result = confirm("Do you really want to remove this group?\n#" + groupID + ' ' + this.getGroupName(groupID));
			if (result) {
			    for(var i = 0 ; i < this._groups.length; i++){
				    if (this._groups[i].id == groupID) { 
				        this._groups.splice(i, 1);
						notifyController();
				        break;
				    }
			    }
			}		
		    
		}
   		
   		
   		
		/**
		 * Gets all groups.
		 * 
		 * @return {array} List of groups.
		 * 
		 */		
		this.getGroups = function () {	
					
			return this._groups;		    
			
		}
   		
   		
   		
		/**
		 * Get group name.
		 * 
		 * @param {number} groupID ID of the group.
		 * 
		 * @return {string} Name of the group.
		 * 
		 */		
		this.getGroupName = function (groupID) {	
					
		    for(var i = 0 ; i < this._groups.length; i++){
			    if (this._groups[i].id == groupID) { 
			        return this._groups[i].name;
			    }
		    }					    
			
		}
   		
   		
		
	}; //ends GroupManagement class
	
	
	
	

    	
} //ends Ums.AppModel class







