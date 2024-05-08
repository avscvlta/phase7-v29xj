function enemyHitDetection()
{
	for(let i = 0; i < mapEnemies.length; i++)
	{
		if(
			heroX + 16 > mapEnemies[i].positionX &&
			heroX < mapEnemies[i].positionX + 16 &&
			heroY + 16 > mapEnemies[i].positionY &&
			heroY < mapEnemies[i].positionY + 16 &&
			!heroInvincibility
		)
		{
			if(currentHealth > 0)
			{
				currentHealth = currentHealth - (mapEnemies[i].attack * currentDefenseLevel);
			}
			heroInvincibility = true;
			invincibilityCounter = 1;
		}
		if(invincibilityCounter == 1)
		{
			heroBlink = true;
		}
	}
	if(invincibilityCounter > 0)
	{
		heroBlink = false;
		invincibilityCounter = invincibilityCounter + 1;
		let loggedHeroX = heroX;
		if(invincibilityCounter%10 <= 4)
		{
			heroBlink = true;				
		}
	}
	if(invincibilityCounter > 85)
	{
		invincibilityCounter = 0;
		heroInvincibility = false;
		heroBlink = false;
	}
}
