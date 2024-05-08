function attackDetection()
{
	for(let i = 0; i < mapEnemies.length; i++)
	{
		if(attacking)
		{
			if(lastButtonPressed == "left")
			{
				if(mapEnemies[i].positionX + 16 >= heroX - attackLength &&
					mapEnemies[i].positionX + 16 <= heroX + 8 &&
					mapEnemies[i].positionY + 16 >= heroY &&
					mapEnemies[i].positionY <= heroY + 16
				)
				{
					enemyHit(i);
				}
			}
			if(lastButtonPressed == "right")
			{
				if(mapEnemies[i].positionX <= heroX + 16 + attackLength &&
					mapEnemies[i].positionX >= heroX + 8 &&
					mapEnemies[i].positionY + 16 >= heroY &&
					mapEnemies[i].positionY <= heroY + 16
				)
				{
					enemyHit(i);
				}
			}
			if(lastButtonPressed == "up")
			{
				if(mapEnemies[i].positionX + 16 >= heroX &&
					mapEnemies[i].positionX <= heroX + 16 &&
					mapEnemies[i].positionY + 16 >= heroY - attackLength &&
					mapEnemies[i].positionY + 16 <= heroY + 8
				)
				{
					enemyHit(i);
				}
			}
	     	if(lastButtonPressed == "down")
			{
				if(mapEnemies[i].positionX + 16 >= heroX &&
					mapEnemies[i].positionX <= heroX + 16 &&
					mapEnemies[i].positionY >= heroY + 8 &&
					mapEnemies[i].positionY <= heroY + 16 + attackLength
				)
				{
					enemyHit(i);
				}
			}
		}
	}
}
