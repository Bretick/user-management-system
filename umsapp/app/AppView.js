/*
==========================================
File Name: 
AppView.js

Project: 
User Management System - Frontend Developer Task

Author: 
Bretislav Mazoch, bretislav.mazoch@gmail.com, http://www.bretick.cz/en/

Created On: 
06/2015
==========================================
*/




//=================
//Ums.AppView class
//=================


/** @namespace */
var Ums = Ums || {};




/**
* Ums.AppView 
* @class Environment of the app (updating GUI and user events handling).
*  
*/
Ums.AppView = function () {	

	//cache elements
	var $usernameInputEl = $('body').find('input.input-username');
	var $groupSelectEl = $('body').find('#users select.select-group');
	var $addUserBtnEl = $('body').find('button.btn-add-user');
	var $usersTbodyEl = $('body').find('#users tbody');
	
	var $groupnameInputEl = $('body').find('input.group-name');
	var $addGroupBtnEl = $('body').find('button.btn-add-group');
	var $groupsTbodyEl = $('body').find('#groups tbody');



	/**
	 * Initializates the view.
	 * 
	 */	
	this.init = function () {
		
		//adding a new user
		$addUserBtnEl.on('click', function (e) { 
			var event = jQuery.Event('addUser');
			event.userName = $usernameInputEl.val();
			event.groupID = $groupSelectEl.val();
			$usernameInputEl.val('');
			e.preventDefault();
			$('body').trigger(event);
		});
		
	
		//adding a new group
		$addGroupBtnEl.on('click', function (e) {
			var event = jQuery.Event('addGroup');
			event.groupName = $groupnameInputEl.val();
			$groupnameInputEl.val('');		
			e.preventDefault();
			$('body').trigger(event);
		});
		
	}	



	/**
	 * Updates view after changes.
	 * 
	 * @param {array} users List of users.
	 * @param {array} group List of groups.
	 * 
	 */		
	this.updateView = function (users, groups) {
				
		//updating selection of groups (in a new user form)
		$groupSelectEl.find('option').remove();
	    for(var i = 0 ; i < groups.length; i++) {
		    $groupSelectEl.append('<option value="' + groups[i].id + '">' + groups[i].name + '</option>');
	    }				

		
		
		//updating list of users
		$usersTbodyEl.find('tr').remove();
	    for(var i = 0 ; i < users.length; i++) {
	    	
		   var tmpHtml = '<tr class="row-user' + users[i].id + '"><td><p>#' + users[i].id + '</p></td><td>' + users[i].name + '</td><td><select data-userid="' + users[i].id + '" class="select-group">';
		   
		   for(var j = 0 ; j < groups.length; j++) {
		   		var isSelected = (groups[j].id == users[i].groupID) ? ' selected' : '';
		   		tmpHtml = tmpHtml + '<option value="' + groups[j].id + '"' + isSelected + '>' + groups[j].name + '</option>';	
		   }
		   
		   tmpHtml = tmpHtml + '</select></td><td><button title="Remove user" class="btn-delete-user" value="' + users[i].id + '">Remove</button></td></tr>';
		   	   
		   $usersTbodyEl.append(tmpHtml);
	    } //ends for	    

		if(users.length === 0) {
			$usersTbodyEl.append('<tr><td colspan="4"><p><em>There is no user created.</em></p></td></tr>');
		}			

		$usersDeleteBtnEls = $('body').find('#users tbody button');
		$usersDeleteBtnEls.on('click', function (e) { 
			var event = jQuery.Event('deleteUser');
			event.userID = $(this).val();		
			$('body').trigger(event);
		});					

		$usersSelectGroupEls = $('body').find('#users tbody select');
		$usersSelectGroupEls.on('change', function (e) {
			var event = jQuery.Event('changeGroup');
			event.userID = $(this).attr('data-userid');		
			event.groupID = $(this).val();		
			$('body').trigger(event);
		});	

		
		
		//updating list of groups
		$groupsTbodyEl.find('tr').remove();
	    for(var i = 0 ; i < groups.length; i++){

			var numberOfUsersInGroup = 0;			
		    for(var j = 0 ; j < users.length; j++){
			    if (users[j].groupID == groups[i].id) { 
			        numberOfUsersInGroup++;
			    }
		    }

	    	
	    	var tmpHtml = '<tr class="row-group' + groups[i].id + '"><td><p>#' + groups[i].id + '</p></td><td><p>' + groups[i].name + '</p></td><td><p>' + numberOfUsersInGroup + '</p></td>';
	
		    if(groups[i].id === 0) {
		    	tmpHtml = tmpHtml + '<td><p><em>Default group</em></p></td></tr>';  
		    } else if(numberOfUsersInGroup > 0) {		
		    	tmpHtml = tmpHtml + '<td></td></tr>';   		    	
		    } else {		    	
		    	tmpHtml = tmpHtml + '<td><button title="Remove group" class="btn-delete-group" value="' + groups[i].id + '">Remove</button></td></tr>';	
		    }
		    
		    $groupsTbodyEl.append(tmpHtml); 
		    
	    } //ends for			

		if(groups.length === 0) {
			$groupsTbodyEl.append('<tr><td colspan="4"><p><em>There is no group created.</em></p></td></tr>');
		}			

		$groupsDeleteBtnEls = $('body').find('#groups tbody button');
		$groupsDeleteBtnEls.on('click', function (e) { 
			var event = jQuery.Event('deleteGroup');
			event.userID = $(this).attr('data-userid');		
			event.groupID = $(this).val();		
			$('body').trigger(event);
		});	
		
	} //ends updateView
		
	

    	
} //ends Ums.AppView class







