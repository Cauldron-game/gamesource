function playerController()
{
	
	var defaultPlayerCharacter = new playerCharacter()
	this.activePlayerCharacter = defaultPlayerCharacter

	var defaultDeviceProfile_mouse = this.createDeviceProfile()
	this.setDeviceInput(defaultDeviceProfile_mouse, this.activePlayerCharacter)

}

function playerCharacter(){
	this.visible = true;
	this.activeSprite = CreateGenericSprite()
	this.spriteManager = new GenericManager()
	this.spriteManager.addToRoster(this.activeSprite)
	this.speed = 1

}

playerCharacter.prototype.move = function(direction, speed){

	if (direction){
		switch(direction){
			case "north":
				this.activeSprite.x += speed
				break;
			case "south":
				this.activeSprite.x -= speed
				break;
			case "east":
				this.activeSprite.y += speed
				break;
			case "west":
				this.activeSprite.y -= speed
				break;
			default:
				window.alert("direction required for moving playerCharacter ")
				break;
		}
	}
}	

playerCharacter.prototype.mouseMove = function(mouseDeltaX, mouseDeltaY)
{
	if (mouseDeltaX && mouseDeltaY)
	{
		this.activeSprite.x = mouseDeltaX
		this.activeSprite.y = mouseDeltaY
	}
};

playerCharacter.prototype.setActiveSprite = function(inputSprite)
{
	if(inputSprite)
	{	
		inputSprite.x = this.activeSprite.x
		inputSprite.y = this.activeSprite.y


		this.activeSprite = inputSprite
	}
}

playerCharacter.prototype.characterStates =
{
	battle:"battleState",
	moving: "movingState",
	idle: "idleState",
	inactive: "inactiveState",
	attacking: "attackingState",
	underAttack: "underAttackState",
	gameContol: "gameControlState"
}

playerCharacter.prototype.setState = function(pState)
{
	switch(pState)
	{		
		case this.characterStates.idle:


	}
}

playerController.prototype.controlType = {
	
	mouse: "mouse",
	keyboard: "keyboard",
	gamepad: "gamepad",
	mouseAndKeyboard: "mouseAndKeyboard"
}

playerController.prototype.setDeviceInput = function(deviceProfile, inputCharacter){

	var inputDevice = TurbulenzEngine.getInputDevice();
	var mouseCodes = inputDevice.mouseCodes;

	if (deviceProfile)
	{
		var currentDeviceType = deviceProfile.deviceType

		switch(currentDeviceType)
		{
			case "mouse":
			default:
				var onMouseOver = function onMouseOverFn(deltaX, deltaY)
				{
					inputCharacter.mouseMove(deltaX, deltaY)
				}

				var onMouseEnter = function onMouseEnterFn()
				{
					inputDevice.hideMouse();
				}

				var onMouseLeave = function onMouseLeaveFn()
				{
					inputDevice.showMouse();
				}

				var onMouseDown = function onMouseDownFn (mouseCode, x, y)
				{
					if (mouseCode === mouseCodes.BUTTON_0)
					{
						inputCharacter.setActiveSprite(inputCharacter.spriteManager.roster[1])
						console.log("mouse clicked")
					}
					if (mouseCode === mouseCodes.BUTTON_1)
					{
						inputCharacter.setActiveSprite(inputCharacter.spriteManager.roster[2])
						console.log("mouse2 clicked")
					}
				}

				var onMouseUp = function onMouseUpFn (mouseCode, x, y)
				{
					if (mouseCode === mouseCodes.BUTTON_0)
					{
						inputCharacter.setActiveSprite(inputCharacter.spriteManager.roster[0])
						console.log("mouse unclicked")
					}
					if (mouseCode === mouseCodes.BUTTON_1)
					{
						inputCharacter.setActiveSprite(inputCharacter.spriteManager.roster[0])
						console.log("mouse2 unclicked")
					}

				}
				inputDevice.addEventListener('mouseover', onMouseOver)
				inputDevice.addEventListener('mouseenter', onMouseEnter)
				inputDevice.addEventListener('mouseleave', onMouseLeave)
				inputDevice.addEventListener('mousedown', onMouseDown)
				inputDevice.addEventListener('mouseup', onMouseUp)

		}
	}


}

playerController.prototype.createDeviceProfile = function(){
	
	var newDeviceProfile = {
		deviceType: "mouse",
		north: "",
		south: "",
		east: "",
		west: "",
		Button1: "spriteRedOnMouseDown"
	}
	return newDeviceProfile;

	
}