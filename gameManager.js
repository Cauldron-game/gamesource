function CreateGameObjectManager()
{
	var gameObjectManager = new GenericManager();

	gameObjectManager.id = "mainObjectManager"

	var playerControllerManager = new GenericManager();
	playerControllerManager.visible = true
	playerControllerManager.id = "playerControllerManager"

	gameObjectManager.getVisibleObjects = function()
	{
		var playerControllerManager = this.roster["playerControllerManager"]
		
		var visibleCharacterSprites = new Array()
		var visibleCharacterCount = 0;

		var playerControllerManagerRosterLength = playerControllerManager.roster.length

		for (iCurrentController = 0; iCurrentController < playerControllerManagerRosterLength; iCurrentController++)
		{
			var currentPlayerController = playerControllerManager.roster[iCurrentController];

			if(currentPlayerController.visible == true)
			{
				var currentPlayerCharacterSprite = currentPlayerController.activePlayerCharacter.activeSprite;
				visibleCharacterSprites[visibleCharacterCount] = currentPlayerCharacterSprite
				visibleCharacterCount++
			};
		}
		return visibleCharacterSprites;

	}

	playerControllerManager.updateControllers = function()
	{
		var playerControllerManagerLength = this.roster.length

		for(iController = 0; iController < playerControllerManagerLength; iController++)
		{
			var currentPlayerController = this.roster[iController]
			currentPlayerController.update()
		}
	}



	var playerControllerManagerRef = "playerControllerManager"

	gameObjectManager.addToRoster(playerControllerManager, playerControllerManagerRef)

	return gameObjectManager;

}
