function GenericManager(){

	this.idCounter = 0;
	this.id = 0;
	this.roster = new Array()
	this.visible = false
	
};

GenericManager.prototype.addToRoster = function(rosterEntry, pOptArryEntryIndex) 
{
	if(pOptArryEntryIndex)
	{
		this.roster[pOptArryEntryIndex] = rosterEntry
	}
	else
	{
		this.roster.push(rosterEntry)
	}
	var rosterId = this.roster.indexOf(rosterEntry)

	return rosterId;

	
};

GenericManager.prototype.removeFromRoster = function(rosterEntry)
{
	var rosterEntryIndex = this.roster.indexOf(rosterEntry);
	this.roster.splice(rosterEntryIndex, 1);
	return rosterEntryIndex;
}

GenericManager.prototype.getFromRoster = function(rosterEntryIndex)
{
	var rosterEntry = this.roster[rosterEntryIndex]
	return rosterEntry;
}

GenericManager.prototype.replaceInRoster = function(originRosterEntry, replacementEntry) 
{
	var originRosterEntryIndex = this.removeFromRoster(originRosterEntry)
	this.addToRoster(replacementEntry, originRosterEntryIndex)
	this.roster[originRosterEntryIndex].id = originRosterEntryIndex
};

GenericManager.prototype.getVisibleObjects = function()
{
	if(this.visible == true)
	{
		var managerRoster = this.roster
		var managerRosterLength = managerRoster.length
		var visibleObjArray = new Array()
		var visibleObjCount = 0

		for (iObj = 0; iObj < managerRosterLength; iObj++)
		{
			var currentObj = managerRoster[iObj]
			if(currentObj.visible && currentObj.visible == true)
			{
				visibleObjArray[visibleObjCount] = currentObj
				visibleObjCount++
			}
		}

	}
	else
	{
		return false;
	}
}