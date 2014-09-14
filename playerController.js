function playerController()
{
	
	var defaultPlayerCharacter = new playerCharacter()
	this.activePlayerCharacter = defaultPlayerCharacter

	console.log(defaultPlayerCharacter)

	var defaultDeviceProfile_mouse = this.createDeviceProfile()
	this.setDeviceInput(defaultDeviceProfile_mouse)

}
playerController.prototype.update = function()
{
	if(this.activePlayerCharacter.activeFrame >= this.activePlayerCharacter.activeAnimation.length)
	{
		this.activePlayerCharacter.activeFrame = 0;
	}

	this.activePlayerCharacter.setActiveSprite(this.activePlayerCharacter.activeAnimation[this.activePlayerCharacter.activeFrame])
	this.activePlayerCharacter.activeFrame++
}

playerController.prototype.setDeviceInput = function(deviceProfile){

	var inputDevice = TurbulenzEngine.getInputDevice();
	var mouseCodes = inputDevice.mouseCodes;

	var currentPlayerCharacter = this.activePlayerCharacter

	if (deviceProfile)
	{
		var currentDeviceType = deviceProfile.deviceType

		switch(currentDeviceType)
		{
			case "mouse":
			default:
				var onMouseOver = function onMouseOverFn(deltaX, deltaY)
				{
					currentPlayerCharacter.mouseMove(deltaX, deltaY)
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
						//inputCharacter.setActiveSprite(inputCharacter.spriteManager.roster[1])
						console.log("mouse clicked")
					}
					if (mouseCode === mouseCodes.BUTTON_1)
					{
						//inputCharacter.setActiveSprite(inputCharacter.spriteManager.roster[2])
						console.log("mouse2 clicked")
					}
				}

				var onMouseUp = function onMouseUpFn (mouseCode, x, y)
				{
					if (mouseCode === mouseCodes.BUTTON_0)
					{
						//inputCharacter.setActiveSprite(inputCharacter.spriteManager.roster[0])
						console.log("mouse unclicked")
					}
					if (mouseCode === mouseCodes.BUTTON_1)
					{
						//inputCharacter.setActiveSprite(inputCharacter.spriteManager.roster[0])
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

playerController.prototype.controlType = {
	
	mouse: "mouse",
	keyboard: "keyboard",
	gamepad: "gamepad",
	mouseAndKeyboard: "mouseAndKeyboard"
}