function createGameManager()
{

	var gameManager = new GenericManager();

	var characterManager = new GenericManager();

	characterManager.getVisibleCharacters = function(characterArray)
	{
		var charArrayLength = characterArray.length
		var returnCharArray = new Array()

		var returnCharCounter = 0

		for (iCharacter = 0; iCharacter < charArrayLength; iCharacter++ )
		{
			var currentiCharacter = characterArray[iCharacter]
			var currentCharacterVisible = currentiCharacter.visible

			if (currentCharacterVisible == true)
			{
				var currentCharacterSprite = currentiCharacter.activeSprite
				returnCharArray[returnCharCounter] = currentCharacterSprite;
				returnCharCounter++;
			}

		}
		return returnCharArray
	}

	var currentGameManId = gameManager.addToRoster(characterManager);

	gameManager.roster[currentGameManId].id = currentGameManId

	return gameManager;

}
