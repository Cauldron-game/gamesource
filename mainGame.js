var mainGame = (function () {
	function mainGame(){

	}

	TurbulenzEngine = WebGLTurbulenzEngine.create({
						canvas: document.getElementById("mainCanvas")
	});

	TurbulenzEngine.onerror = function gameErrorFn (msg)
	{
		window.alert(msg)
	}

	var graphicsDevice = TurbulenzEngine.createGraphicsDevice({})

	var draw2d = Draw2D.create
	({
		graphicsDevice: graphicsDevice
	});

	var inputDevice = TurbulenzEngine.createInputDevice()

	var bgColor = [0, 0, 0, 1]

	var gameObjectManager = CreateGameObjectManager()

	console.log("gameObjectManager = ", gameObjectManager)

	var playerControllerManager = gameObjectManager.getFromRoster("playerControllerManager")

	console.log("playerControllerManager =", playerControllerManager)
	
	var newPlayerController = new playerController()

	playerControllerManager.addToRoster(newPlayerController)

	var redSquareSpriteTextureSrc = "assets/textures/redTexture.png"

	var tealSquareSpriteTextureSrc = "assets/textures/tealTexture.png"

	var redSquareSprite = CreateGenericSprite(redSquareSpriteTextureSrc)

	var tealSquareSprite = CreateGenericSprite(tealSquareSpriteTextureSrc)

	var defaultAnimation = newPlayerController.activePlayerCharacter.defaultAnimation

	newPlayerController.activePlayerCharacter.addSpriteToAnimation(redSquareSprite,0)
	newPlayerController.activePlayerCharacter.addSpriteToAnimation(tealSquareSprite,0)


	function drawSpriteBatch(spriteBatch)
	{
		for (iSprite = 0; iSprite < spriteBatch.length; iSprite++)
		{
			var currentSprite = spriteBatch[iSprite]

			draw2d.drawSprite(currentSprite)
		}

	}


	function update()
	{
		inputDevice.update()
		playerControllerManager.updateControllers()

		var SpritesToBeDrawn = gameObjectManager.getVisibleObjects()
		//console.log(testArray)

		if (graphicsDevice.beginFrame())
		{
			graphicsDevice.clear(bgColor, 1.0)
			/* Render Code */
			draw2d.begin()
			drawSpriteBatch(SpritesToBeDrawn)
			draw2d.end()

			graphicsDevice.endFrame();
		}
	}
	TurbulenzEngine.setInterval(update, 1000 / 60)

})

function CreateGenericSprite(pTextureSrc){

	var genericTexture = null;
	if(pTextureSrc)
	{
		genericTexture = CreateGenericTexture(pTextureSrc)	
	}
	else
	{
		genericTexture = CreateGenericTexture()
	}
	

	var newGenericSprite = Draw2DSprite.create({
		texture: genericTexture,
		width: 64,
		height: 64,
		x: 32,
		y: 32,
		color: [1,1,1,1]
	})

	newGenericSprite.id = null

	return newGenericSprite;
}

function CreateGenericTexture(pSrc){

	var graphicsDevice = TurbulenzEngine.getGraphicsDevice();
	if (pSrc)
	{
		var newGenericTexture = graphicsDevice.createTexture(
		{		
			src: pSrc,
			mipmaps: true
		})
	}
	else
	{
		var newGenericTexture = graphicsDevice.createTexture({
			src: "assets/textures/defaultTexture.png",
			mipmaps: true
		})			
	}
	return newGenericTexture;
}