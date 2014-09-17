function playerCharacter(){
	this.activeFrame = 0;
	this.activeSprite = null;

	var defaultActiveSprite = CreateGenericSprite()

	var defaultAnimation = new Array()

	defaultAnimation[0] = defaultActiveSprite

	this.animationManager = new GenericManager()

	this.animationManager.addToRoster(defaultAnimation)

	this.setActiveAnimation(this.animationManager.roster[0])
	this.defaultAnimation = defaultAnimation

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

playerCharacter.prototype.setActiveSprite = function(pSprite, spriteX, spriteY)
{
	if(this.activeSprite != null && this.activeSprite)
	{
		pSprite.x = this.activeSprite.x
		pSprite.y = this.activeSprite.y

		this.activeSprite = pSprite
	}
	else
	{
		this.activeSprite = pSprite

		if(spriteX)
		{
			this.activeSprite.x = spriteX
		}
		if(spriteY)
		{
			this.activeSprite.y = spriteY
		}
	}

}

playerCharacter.prototype.setActiveAnimation = function(pAnimation) 
{
	if(pAnimation)
	{
		this.activeAnimation = pAnimation
		this.activeFrame = 0;
		this.setActiveSprite(this.activeAnimation[this.activeFrame])
	}
};

playerCharacter.prototype.addSpriteToAnimation = function(pSprite, pAnimationIndex, pOptAnimationFrame)
{
	var _animation = this.animationManager.getFromRoster(pAnimationIndex)

	if(pOptAnimationFrame)
	{
		_animation.splice(pOptAnimationFrame, 1, pSprite)
	}
	else
	{
		_animation.push(pSprite)
	}
}

playerCharacter.prototype.removeSpriteFromAnimation = function(pAnimationIndex, pAnimatnionFrame)
{
	var _animation = this.animationManager.getFromRoster(pAnimationIndex)
	_animation.splice(pAnimatnionFrame, 1)
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

playerCharacter.prototype.setActiveState = function(pState)
{
	switch(pState)
	{		
						
	}
}

playerCharacter.prototype.addCharacterState = function(pPropertyName, pPropertyValue)
{
	this.characterStates[pPropertyName] = pPropertyValue
}

playerCharacter.prototype.removeCharacterState = function(pPropertyName)
{
	delete this.characterStates[pPropertyName]
}
