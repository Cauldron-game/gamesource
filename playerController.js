function playerController()
{
	this.visible = true
	this.currentPlayer = 0;

	var defaultPlayerCharacter = new playerCharacter();
	this.activePlayerCharacter = defaultPlayerCharacter;

	console.log(defaultPlayerCharacter);

	var defaultDeviceProfile_mouse = this.createDeviceProfile("mouse");
	console.log(defaultDeviceProfile_mouse)
	this.setDeviceInput(defaultDeviceProfile_mouse);

}
playerController.prototype.update = function()
{
	this.updateCharacter()
}

playerController.prototype.updateCharacter = function()
{
	if(this.activePlayerCharacter.activeFrame >= this.activePlayerCharacter.activeAnimation.length);
	{
		this.activePlayerCharacter.activeFrame = 0;
	}

	this.activePlayerCharacter.setActiveSprite(this.activePlayerCharacter.activeAnimation[this.activePlayerCharacter.activeFrame]);
	this.activePlayerCharacter.activeFrame++;	
	
}

playerController.prototype.setDeviceInput = function(deviceProfile){

	var inputDevice = TurbulenzEngine.getInputDevice();
	var mouseCodes = inputDevice.mouseCodes;

	var currentPlayerCharacter = this.activePlayerCharacter;

	if (deviceProfile)
	{
		var currentDeviceType = deviceProfile.deviceType

		switch(currentDeviceType)
		{
			case "mouse":
			default:
				var onMouseOver = function(deltaX, deltaY)
				{
					currentPlayerCharacter.mouseMove(deltaX, deltaY)
				};

				var onMouseEnter = function()
				{
					inputDevice.hideMouse();
				};

				var onMouseLeave = function()
				{
					inputDevice.showMouse();
				};

				var onMouseDown = function(mouseCode, x, y)
				{
					if (mouseCode === mouseCodes.BUTTON_0)
					{
						//inputCharacter.setActiveSprite(inputCharacter.spriteManager.roster[1])
						console.log("mouse clicked");
					};
					if (mouseCode === mouseCodes.BUTTON_1)
					{
						//inputCharacter.setActiveSprite(inputCharacter.spriteManager.roster[2])
						console.log("mouse2 clicked");
					};
				}

				var onMouseUp = function onMouseUpFn (mouseCode, x, y)
				{
					if (mouseCode === mouseCodes.BUTTON_0)
					{
						//inputCharacter.setActiveSprite(inputCharacter.spriteManager.roster[0])
						console.log("mouse unclicked");
					};
					if (mouseCode === mouseCodes.BUTTON_1)
					{
						//inputCharacter.setActiveSprite(inputCharacter.spriteManager.roster[0])
						console.log("mouse2 unclicked");
					};

				}
				inputDevice.addEventListener('mouseover', onMouseOver);
				inputDevice.addEventListener('mouseenter', onMouseEnter);
				inputDevice.addEventListener('mouseleave', onMouseLeave);
				inputDevice.addEventListener('mousedown', onMouseDown);
				inputDevice.addEventListener('mouseup', onMouseUp);
		};
	};


};

playerController.prototype.createDeviceProfile = function(pDeviceType)
{
	
	if(pDeviceType)
	{
		var returnDeviceProfile = {}

		switch(pDeviceType)
		{
			case "mouse":
			default:
				returnDeviceProfile.deviceType = this.controlType.mouse;				
				break
		}
		return returnDeviceProfile;
	}
	
};

playerController.prototype.controlType = {
	
	mouse: "mouse",
	keyboard: "keyboard",
	gamepad: "gamepad",
	mouseAndKeyboard: "mouseAndKeyboard"
};

playerController.prototype.actionType = {


}

