function GenericManager(){

	this.idCounter = 0;
	this.id = 0;
	this.roster = new Array()
	
};

GenericManager.prototype.addToRoster = function(rosterEntry) 
{
	var rosterLength = this.roster.length

	this.roster[rosterLength] = rosterEntry;

	var realId = this.idCounter

	this.idCounter++;

	return realId;
};

GenericManager.prototype.removeFromRoster = function(rosterEntry)
{
	var rosterEntryIndex = this.roster.indexOf(rosterEntry);
	this.roster.splice(rosterEntryIndex, 1);
}