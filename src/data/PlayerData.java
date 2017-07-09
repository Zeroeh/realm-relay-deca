package realmrelay.data;

public class PlayerData 
{
	//comment after the stat is the stats number in the clients PlayerData struct
	public int maxHealthStat; //0
	public int healthStat; //1
	public int sizeStat; //2
	public int maxManaStat; //3
	public int manaStat; //4
	public int nextLevel; //5
	public int xpStat; //6
	public int levelStat; //7
	public int[] inventory = { -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 }; //8-19
	public int attackStat; //20
	public int defenseStat; //21
	public int speedStat; //22
	public int vitalityStat; //26
	public int wisdomStat; //27
	public int dexterityStat; //28
	public int conditionStat; //29
	public int numStars; //30
	public String currentName; //31
	public int textureOne; //32
	public int textureTwo; //33
	public int merchType; //34
	public int realmGold; //35
	public int merchPrice; //36
	public boolean isActiveStat; //37
	public int accountId; //38
	public int currentFame; //39
	public int merchCurrency; //40
	//public boolean connectStat; //41
	public int connectStat; //41     -might be boolean
	public int merchAmountLeft; //42
	public int merchTimeLeft; //43
	public int merchDiscount; //44
	public int merchRankReq; //45
	public int healthBonus; //46
	public int manaBonus; //47
	public int attackBonus; //48
	public int defenseBonus; //49
	public int speedBonus; //50
	public int vitalityBonus; //51
	public int wisdomBonus; //52
	public int dexterityBonus; //53
	public int ownerAccountId; //54
	public int rankRequired; //55
	public boolean nameRegistered; //56
	public int aliveFame; //57
	public int nextClassQuestFame; //58
	public int legendaryRankStat; //59
	public int sinkLevel; //60
	public int altTexture; //61
	public String guildName; //62
	public int guildRank; //63
	public int oxygenLevel; //64
	public int xpBoosted; //65
	public int xpBoostTimer; //66
	public int lootDropTimer; //67
	public int lootTierTimer; //68
	public int healthPotCount; //69
	public int manaPotCount; //70
	public int[] backPack = { -1, -1, -1, -1, -1, -1, -1, -1 }; //71-78
	public int hasBackPack; //79
	public int textureStat; //80
	public int petInstanceIdStat; //81
	public int petNameStat; //82
	public int petTypeStat; //83
	public int petRarityStat; //84
	public int petMaxAbilityPowerStat; //85
	public int petFamilyStat; //86
	public int petFirstAbilityPointStat; //87
	public int petSecondAbilityPointStat; //88
	public int petThirdAbilityPointStat; //89
	public int petFirstAbilityPowerStat; //90
	public int petSecondAbilityPowerStat; //91
	public int petThirdAbilityPowerStat; //92
	public int petFirstAbilityTypeStat; //93
	public int petSecondAbilityTypeStat; //94
	public int petThirdAbilityTypeStat; //95
	public int newConnStat; //96
	public int fortuneTokens; //97

	public Location pos = new Location();
	public String mapName;

	public boolean hasInc;

	public int id;

	public PlayerData()
	{
	}

	public void parseNewTICK(int statId, int statAmount, String statString)
	{
		switch (statId)
		{
			case 0:
				this.maxHealthStat = statAmount;
				break;
			case 1:
				this.healthStat = statAmount;
				break;
			case 2:
				this.sizeStat = statAmount;
				break;
			case 3:
				this.maxManaStat = statAmount;
				break;
			case 4:
				this.manaStat = statAmount;
				break;
			case 5:
				this.nextLevel = statAmount;
				break;
			case 6:
				this.xpStat = statAmount;
				break;
			case 7:
				this.levelStat = statAmount;
				break;
			case 8:
				this.inventory[0] = statAmount;
				break;
			case 9:
				this.inventory[1] = statAmount;
				break;
			case 10:
				this.inventory[2] = statAmount;
				break;
			case 11:
				this.inventory[3] = statAmount;
				break;
			case 12:
				this.inventory[4] = statAmount;
				break;
			case 13:
				this.inventory[5] = statAmount;
				break;
			case 14:
				this.inventory[6] = statAmount;
				break;
			case 15:
				this.inventory[7] = statAmount;
				break;
			case 16:
				this.inventory[8] = statAmount;
				break;
			case 17:
				this.inventory[9] = statAmount;
				break;
			case 18:
				this.inventory[10] = statAmount;
				break;
			case 19:
				this.inventory[11] = statAmount;
				break;
			case 20:
				this.attackStat = statAmount;
				break;
			case 21:
				this.defenseStat = statAmount;
				break;
			case 22:
				this.speedStat = statAmount;
				break;
			case 26:
				this.vitalityStat = statAmount;
				break;
			case 27:
				this.wisdomStat = statAmount;
				break;
			case 28:
				this.dexterityStat = statAmount;
				break;
			case 29:
				this.conditionStat = statAmount;
				break;
			case 30:
				this.numStars = statAmount;
				break;
			case 31:
				this.currentName = statString;
				break;
			case 32:
				this.textureOne = statAmount;
				break;
			case 33:
				this.textureTwo = statAmount;
				break;
			case 34:
				this.merchType = statAmount;
				break;
			case 35:
				this.realmGold = statAmount;
				break;
			case 36:
				this.merchPrice = statAmount;
				break;
			case 37:
				this.isActiveStat = Boolean.parseBoolean(statString);
				break;
			case 38:
				this.accountId = statAmount;
				break;
			case 39:
				this.currentFame = statAmount; //dead fame (whatever is next to realm gold)
				break;
			case 40:
				this.merchCurrency = statAmount;
				break;
			case 41: //might be boolean
				//this.connectStat = Boolean.parseBoolean(statString);
				this.connectStat = statAmount;
				break;
			case 42:
				this.merchAmountLeft = statAmount;
				break;
			case 43:
				this.merchTimeLeft = statAmount;
				break;
			case 44:
				this.merchDiscount = statAmount;
				break;
			case 45:
				this.merchRankReq = statAmount;
				break;
			case 46:
				this.healthBonus = statAmount;
				break;
			case 47:
				this.manaBonus = statAmount;
				break;
			case 48:
				this.attackBonus = statAmount;
				break;
			case 49:
				this.defenseBonus = statAmount;
				break;
			case 50:
				this.speedBonus = statAmount;
				break;
			case 51:
				this.vitalityBonus = statAmount;
				break;
			case 52:
				this.wisdomBonus = statAmount;
				break;
			case 53:
				this.dexterityBonus = statAmount;
				break;
			case 54:
				this.ownerAccountId = statAmount;
				break;
			case 55:
				this.rankRequired = statAmount;
				break;
			case 56:
				this.nameRegistered = Boolean.parseBoolean(statString);
				break;
			case 57:
				this.aliveFame = statAmount;
				break;
			case 58:
				this.nextClassQuestFame = statAmount;
				break;
			case 59:
				this.legendaryRankStat = statAmount;
				break;
			case 60:
				this.sinkLevel = statAmount;
				break;
			case 61:
				this.altTexture = statAmount;
				break;
			case 62:
				this.guildName = statString;
				break;
			case 63:
				this.guildRank = statAmount;
				break;
			case 64:
				this.oxygenLevel = statAmount;
				break;
			case 65:
				this.xpBoosted = statAmount;
				break;
			case 66:
				this.xpBoostTimer = statAmount;
				break;
			case 67:
				this.lootDropTimer = statAmount;
				break;
			case 68:
				this.lootTierTimer = statAmount;
				break;
			case 69:
				this.healthPotCount = statAmount;
				break;
			case 70:
				this.manaPotCount = statAmount;
				break;
			case 71:
				this.backPack[0] = statAmount;
				break;
			case 72:
				this.backPack[1] = statAmount;
				break;
			case 73:
				this.backPack[2] = statAmount;
				break;
			case 74:
				this.backPack[3] = statAmount;
				break;
			case 75:
				this.backPack[4] = statAmount;
				break;
			case 76:
				this.backPack[5] = statAmount;
				break;
			case 77:
				this.backPack[6] = statAmount;
				break;
			case 78:
				this.backPack[7] = statAmount;
				break;
			case 79:
				this.hasBackPack = statAmount;
				break;
			case 80:
				this.textureStat = statAmount;
				break;
			case 81:
				this.petInstanceIdStat = statAmount;
				break;
			case 82:
				this.petNameStat = statAmount;
				break;
			case 83:
				this.petTypeStat = statAmount;
				break;
			case 84:
				this.petRarityStat = statAmount;
				break;
			case 85:
				this.petMaxAbilityPowerStat = statAmount;
				break;
			case 86:
				this.petFamilyStat = statAmount;
				break;
			case 87:
				this.petFirstAbilityPointStat = statAmount;
				break;
			case 88:
				this.petSecondAbilityPointStat = statAmount;
				break;
			case 89:
				this.petThirdAbilityPointStat = statAmount;
				break;
			case 90:
				this.petFirstAbilityPowerStat = statAmount;
				break;
			case 91:
				this.petSecondAbilityPowerStat = statAmount;
				break;
			case 92:
				this.petThirdAbilityPowerStat = statAmount;
				break;
			case 93:
				this.petFirstAbilityTypeStat = statAmount;
				break;
			case 94:
				this.petSecondAbilityTypeStat = statAmount;
				break;
			case 95:
				this.petThirdAbilityTypeStat = statAmount;
				break;
			case 96:
				this.newConnStat = statAmount;
				break;
			case 97:
				this.fortuneTokens = statAmount;
				break;
			default:
				break;

		}

		/*
		//shrink code here
		//keeping this for legacy reasons?
		if (statId == 0)
		{
			this.maxHealthStat = statAmount;
		}
		else if (statId == 1)
		{
			this.healthStat = statAmount;
		}
		else if (statId == 2)
		{
			this.sizeStat = statAmount;
		}
		else if (statId == 3)
		{
			this.maxManaStat = statAmount;
		}
		else if (statId == 4)
		{
			this.manaStat = statAmount;
		}
		else if (statId == 5)
		{
			this.nextLevel = statAmount;
		}
		else if (statId == 6)
		{
			this.xpStat = statAmount;
		}
		else if (statId == 7)
		{
			this.levelStat = statAmount;
		}
		else if (statId == 8) //inventory [0]
		{
			this.slot[0] = statAmount;
		}
		else if (statId == 9)
		{
			this.slot[1] = statAmount;
		}
		else if (statId == 10)
		{
			this.slot[2] = statAmount;
		}
		else if (statId == 11)
		{
			this.slot[3] = statAmount;
		}
		else if (statId == 12)
		{
			this.slot[4] = statAmount;
		}
		else if (statId == 13)
		{
			this.slot[5] = statAmount;
		}
		else if (statId == 14)
		{
			this.slot[6] = statAmount;
		}
		else if (statId == 15)
		{
			this.slot[7] = statAmount;
		}
		else if (statId == 16)
		{
			this.slot[8] = statAmount;
		}
		else if (statId == 17)
		{
			this.slot[9] = statAmount;
		}
		else if (statId == 18)
		{
			this.slot[10] = statAmount;
		}
		else if (statId == 19)  //inventory [11]
		{
			this.slot[11] = statAmount;
		}
		else if (statId == 20)
		{
			this.attackStat = statAmount;
		}
		else if (statId == 21)
		{
			this.defenseStat = statAmount;
		}
		else if (statId == 22)
		{
			this.speedStat = statAmount;
		}
		else if (statId == 26)
		{
			this.vitalityStat = statAmount;
		}
		else if (statId == 27)
		{
			this.wisdomStat = statAmount;
		}
		else if (statId == 28)
		{
			this.dexterityStat = statAmount;
		}
		else if (statId == 29)
		{
			this.conditionStat = statAmount;
		}
		else if (statId == 30)
		{
			this.numStars = statAmount;
		}
		else if (statId == 31)
		{
			this.currentName = statString;
		}
		else if (statId == 32)
		{
			this.textureOne = statAmount;
		}
		else if (statId == 33)
		{
			this.textureTwo = statAmount;
		}
		else if (statId == 34)
		{
			this.merchType = statAmount;
		}
		else if (statId == 35)
		{
			this.realmGold = statAmount;
		}
		else if (statId == 36)
		{
			this.merchPrice = statAmount;
		}
		else if (statId == 37)
		{
			this.isActiveStat = Boolean.parseBoolean(statString);
		}
		else if (statId == 38)
		{
			this.accountId = statAmount;
		}
		else if (statId == 39)
		{
			this.currentFame = statAmount; //dead fame
		}
		else if (statId == 40)
		{
			this.merchCurrency = statAmount;
		}
		else if (statId == 41)
		{
			this.connectStat = statAmount;
		}
		else if (statId == 42)
		{
			this.merchAmountLeft = statAmount;
		}
		else if (statId == 43)
		{
			this.merchTimeLeft = statAmount;
		}
		else if (statId == 44)
		{
			this.merchDiscount = statAmount;
		}
		else if (statId == 45)
		{
			this.merchRankReq = statAmount;
		}
		else if (statId == 46)
		{
			this.healthBonus = statAmount;
		}
		else if (statId == 47)
		{
			this.manaBonus = statAmount;
		}
		else if (statId == 48)
		{
			this.attackBonus = statAmount;
		}
		else if (statId == 49)
		{
			this.defenseBonus = statAmount;
		}
		else if (statId == 50)
		{
			this.speedBonus = statAmount;
		}
		else if (statId == 51)
		{
			this.vitalityBonus = statAmount;
		}
		else if (statId == 52)
		{
			this.wisdomBonus = statAmount;
		}
		else if (statId == 53)
		{
			this.dexterityBonus = statAmount;
		}
		else if (statId == 54)
		{
			this.ownerAccountId = statAmount;
		}
		else if (statId == 55)
		{
			this.rankRequired = statAmount;
		}
		else if (statId == 56)
		{
			this.nameRegistered = Boolean.parseBoolean(statString);
		}
		else if (statId == 57)
		{
			this.aliveFame = statAmount; //alive fame
		}
		else if (statId == 58)
		{
			this.nextClassQuestFame = statAmount;
		}
		else if (statId == 59)
		{
			this.legendaryRankStat = statAmount;
		}
		else if (statId == 60)
		{
			this.sinkLevel = statAmount;
		}
		else if (statId == 61)
		{
			this.altTexture = statAmount;
		}
		else if (statId == 62)
		{
			this.guildName = statString;
		}
		else if (statId == 63)
		{
			this.guildRank = statAmount;
		}
		else if (statId == 64)
		{
			this.oxygenLevel = statAmount;
		}
		else if (statId == 65)
		{
			this.xpBoosted = statAmount;
		}
		else if (statId == 66)
		{
			this.xpBoostTimer = statAmount;
		}
		else if (statId == 67)
		{
			this.lootDropTimer = statAmount;
		}
		else if (statId == 68)
		{
			this.lootTierTimer = statAmount;
		}
		else if (statId == 69)
		{
			this.healthPotCount = statAmount;
		}
		else if (statId == 70)
		{
			this.manaPotCount = statAmount;
		}
		else if (statId == 71) //backpack slot 0
		{
			this.backPack[0] = statAmount;
		}
		else if (statId == 72)
		{
			this.backPack[1] = statAmount;
		}
		else if (statId == 73)
		{
			this.backPack[2] = statAmount;
		}
		else if (statId == 74)
		{
			this.backPack[3] = statAmount;
		}
		else if (statId == 75)
		{
			this.backPack[4] = statAmount;
		}
		else if (statId == 76)
		{
			this.backPack[5] = statAmount;
		}
		else if (statId == 77)
		{
			this.backPack[6] = statAmount;
		}
		else if (statId == 78) //backpack slot [7]
		{
			this.backPack[7] = statAmount;
		}
		else if (statId == 79)
		{
			this.hasBackPack = statAmount;
		}
		else if (statId == 80)
		{
			this.textureStat = statAmount;
		}
		//shrink code here
		*/

	}
}