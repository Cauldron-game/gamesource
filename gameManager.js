function CreateGameObjectManager()
{
	var gameObjectManager = new GenericManager();

	var playerControllerManager = new GenericManager();
	playerControllerManager.drawToScene = true

	playerControllerManager.updateControllers = function()
	{
		var playerControllerManagerLength = this.roster.length

		for(iController = 0; iController < playerControllerManagerLength; iController++)
		{
			var currentPlayerController = this.roster[iController]
			currentPlayerController.update()
		}
	}

	var playerControllerManagerRef = 0

	gameObjectManager.addToRoster(playerControllerManager, playerControllerManagerRef)

	gameObjectManager.getVisibleObjects = function()
	{	
		var returnVisibleObjectArray = new Array()
		var returnVisibleObjectCounter = 0
		if(this.roster)
		{
			var gmRosterLength = this.roster.length
			for (iManager = 0; iManager < gmRosterLength; iManager++ )
			{
				// get playerControllerManager, computerControllerManager, sceneControllerManager
				var currentManager = this.roster[iManager];
				if(currentManager.drawToScene == true)
				{
					var currentManagerLength = currentManager.roster.length;
					for(iController = 0; iController < currentManagerLength; iController++)
					{
						var currentController = currentManager.roster[iController]
						if(currentController.activePlayerCharacter.visible == true)
						{

							var activePlayerCharacterSprite = currentController.activePlayerCharacter.activeSprite
							//console.log("activePlayerCharacterSprite =", activePlayerCharacterSprite)
							returnVisibleObjectArray[returnVisibleObjectCounter] = activePlayerCharacterSprite
							returnVisibleObjectCounter++
						}
					}
				}
				

			}
		
		}
		
		return returnVisibleObjectArray
	}	

	return gameObjectManager;

}
