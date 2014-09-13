function spriteBatch(){
	this.batch = new Array()

}

spriteBatch.prototype.addSprite = function(sprite) {
	
	var currentBatchLength = this.batch.length

	this.batch[currentBatchLength] = sprite
};

spriteBatch.prototype.CreateGenericSprite = function (){

	var genericTexture = CreateGenericTexture()

	var sprite = Draw2DSprite.create({
		texture: genericTexture,
		width: 64,
		height: 64,
		x: 0,
		y: 0,
		color: [1,1,1,1]
	})

	return sprite;
}

spriteBatch.prototype.CreateGenericTexture = function (){

	var graphicsDevice = TurbulenzEngine.getGraphicsDevice();

	var newGenericTexture = graphicsDevice.createTexture({
		src: "assets/textures/defaultTexture.png",
		mipmaps: true
	})
	//console.log("newGenericTexture = ", newGenericTexture)
	return newGenericTexture;
}

spriteBatch.prototype.drawSpriteBatch = function(spriteBatch)
{
	for (iSprite = 0; iSprite < spriteBatch.length; iSprite++)
	{
		var currentSprite = spriteBatch[iSprite]

		draw2d.drawSprite(currentSprite)
	}

}