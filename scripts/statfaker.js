//statfaker.js | Zeroeh

var ID_CREATE_SUCCESS = $.findPacketId("CREATE_SUCCESS");
var ID_NEW_TICK = $.findPacketId("NEW_TICK");
var ID_USEITEM = $.findPacketId("USEITEM");
var ID_UPDATE = $.findPacketId("UPDATE");
var ID_TEXT = $.findPacketId("TEXT");
var playerId = -1;
var modify = true;

function onServerPacket(event) {
	var packet = event.getPacket();
	if (packet.id() == ID_CREATE_SUCCESS) {
		playerId = packet.objectId;
	}
	if (modify) 
	{
		if (packet.id() == ID_UPDATE) 
		{
			for (var i = 0; i < packet.newObjs.length; i++) 
			{
				var objectData = packet.newObjs[i];
				/*for (var j = 0; j < packet.newObjs.length; j++) //pet replacing
			if (packet.newObjs[j].objectType == 32601) //snail
				packet.newObjs[j].objectType = 32627;*/ //new pet id (any object), do the following for a random pet: 1850+Math.floor(Math.random()*6);
				for (var j = 0; j < objectData.status.data.length; j++) 
				{
					if (objectData.status.objectId === playerId) 
					{
						var statData = objectData.status.data[j];
						if (statData.id == 2) //size
							statData.intValue = 200;
						else if (statData.id == 5) //xp goal, current xp is in new_tick
							statData.intValue = -1;
						/*else if (statData.id == 12) //inv1
							statData.intValue = 0x9d2;
						else if (statData.id == 13) //inv2
							statData.intValue = 0x9ce;
						else if (statData.id == 14) //inv3
							statData.intValue = 0x912;
						else if (statData.id == 15) //inv4
							statData.intValue = 0x0733;
						else if (statData.id == 16) //inv5
							statData.intValue = 0x9d3;
						else if (statData.id == 17) //inv6
							statData.intValue = 0x913;
						else if (statData.id == 18) //inv7
							statData.intValue = 0xcc1;
						else if (statData.id == 19) //inv8
							statData.intValue = 0x2294;
						else if (statData.id == 20) //attack, all these are after bonus calculation
							statData.intValue = 85;
						else if (statData.id == 21) //defense
							statData.intValue = 44;
						else if (statData.id == 22) //speed, you get dced if it's greater than your normal
							statData.intValue = 50;
						else if (statData.id == 26) //vitality
							statData.intValue = 42;
						else if (statData.id == 27) //wisdom
							statData.intValue = 68;
						else if (statData.id == 28) //dexterity
							statData.intValue = 75;*/
						else if (statData.id == 30) //stars
							statData.intValue = 70;
						else if (statData.id == 31) //name, only shows up in trades
							statData.stringValue = "Larchego";
						else if (statData.id == 35) //gold
							statData.intValue = 2669;
						else if (statData.id == 37) //gold
							statData.intValue = false;
						else if (statData.id == 38) //accountid
							statData.intValue = -1;
						else if (statData.id == 41) //accountid
							statData.intValue = -1;
						else if (statData.id == 62) //guild
							statData.stringValue = "/private/";
						else if (statData.id == 54) //owner account id
							statData.intValue = -1;
						else if (statData.id == 63) //guild rank, 0 initiate, 10 member, 20 officer, 30 leader, 40 founder
							statData.intValue = -1;
						else if (statData.id == 80) //skin (use the number from the Activate tag in the xml, <Activate skinType="914">UnlockSkin</Activate>
							statData.intValue = -1;
						else if (statData.id == 81) //pet instance id
							statData.intValue = -1;
							else if (statData.id == 82) //pet name
							statData.intValue = -1;
						else if (statData.id == 96) //newconstat
							statData.intValue = -1;
						
						//uncomment the following lines for debugging:
						//$.echo("j = " + j + ", id = "+statData.id);
						//$.echo("int = "+statData.intValue);
						//$.echo("str = "+statData.stringValue);
						//$.echo("newObjs["+i+"].status.data["+j+"].stringValue = "+statData.stringValue);

					} /*else 
					{ //OTHER PLAYER MODS - change this stuff to change other players
						if (statData.id == 31) {
							if (statData.stringValue.equals("old name")) { //CHANGE THIS TO THE VICTIM'S NAME
								$.echo("Found other player, replacing");
								statData.stringValue = "new name"; //CHANGE THIS TO THE DESIRED NAME

								for (var j = 0; j < objectData.status.data.length; j++) {
									var statData = objectData.status.data[j];
									if (statData.id == 0) //max health (after bonus calc)
										statData.intValue = 630;
									else if (statData.id == 1) //current health, change in new_tick also otherwise it will revert to your real current
										statData.intValue = 630;
									else if (statData.id == 2) //size
										statData.intValue = 100;
									else if (statData.id == 3) //max mana
										statData.intValue = 389;
									else if (statData.id == 4) //current mana, change in new_tick also otherwise it will revert to your real current
										statData.intValue = 389;
									else if (statData.id == 5) //xp goal, current xp is in new_tick
										statData.intValue = -1;
									else if (statData.id == 7) //level
										statData.intValue = 20;
									else if (statData.id == 8) //weapon
										statData.intValue = 0xc01;
									else if (statData.id == 9) //ability
										statData.intValue = 0x911;
									else if (statData.id == 10) //armor
										statData.intValue = 0x9c4;
									else if (statData.id == 11) //ring
										statData.intValue = 0xbad;
									/*else if (statData.id == 12) //inv1
										statData.intValue = 0x9d2;
									else if (statData.id == 13) //inv2
										statData.intValue = 0x9ce;
									else if (statData.id == 14) //inv3
										statData.intValue = 0x912;
									else if (statData.id == 15) //inv4
										statData.intValue = 0x0733;
									else if (statData.id == 16) //inv5
										statData.intValue = 0x9d3;
									else if (statData.id == 17) //inv6
										statData.intValue = 0x913;
									else if (statData.id == 18) //inv7
										statData.intValue = 0xcc1;
									else if (statData.id == 19) //inv8
										statData.intValue = 0x2294;
									else if (statData.id == 20) //attack, all these are after bonus calculation
										statData.intValue = 85;
									else if (statData.id == 21) //defense
										statData.intValue = 44;
									else if (statData.id == 22) //speed, you get dced if it's greater than your normal
										statData.intValue = 50;
									else if (statData.id == 26) //vitality
										statData.intValue = 42;
									else if (statData.id == 27) //wisdom
										statData.intValue = 68;
									else if (statData.id == 28) //dexterity
										statData.intValue = 75;
									else if (statData.id == 30) //stars
										statData.intValue = 70;
									else if (statData.id == 31) //name, only shows up in trades
										statData.stringValue = "Deathslayier";
									else if (statData.id == 32) //main dye (use the number from the Tex1 tag in the xml, <Tex1>0xa000019</Tex1>
										statData.intValue = 0x01FFD700;
									else if (statData.id == 33) //accessory dye
										statData.intValue = 0x01FFD700;
									else if (statData.id == 35) //gold
										statData.intValue = 2600;
									else if (statData.id == 39) //account fame
										statData.intValue = 41166;
									else if (statData.id == 46) //health bonus
										statData.intValue = 60;
									else if (statData.id == 47) //mana bonus
										statData.intValue = 115;
									else if (statData.id == 48) //attack bonus
										statData.intValue = 10;
									else if (statData.id == 48) //def bonus
										statData.intValue = 19;
									else if (statData.id == 50) //spd bonus
										statData.intValue = 0;
									else if (statData.id == 51) //vit bonus
										statData.intValue = 2;
									else if (statData.id == 52) //wis bonus
										statData.intValue = 8;
									else if (statData.id == 53) //dex bonus
										statData.intValue = 0;
									else if (statData.id == 59) //glow
										statData.intValue = 0;
									else if (statData.id == 62) //guild
										statData.stringValue = "the impresive fihgters";
									else if (statData.id == 57) //char fame
										statData.intValue = 1545;
									else if (statData.id == 58) //char fame goal
										statData.intValue = -1;
									else if (statData.id == 63) //guild rank, 0 initiate, 10 member, 20 officer, 30 leader, 40 founder
										statData.intValue = 30;
									/*else if (statData.id == 71) //backpack1
										statData.intValue = 0xc01;
									else if (statData.id == 72) //backpack2
										statData.intValue = 0xba9;
									else if (statData.id == 73) //backpack3
										statData.intValue = 0xba9;
									else if (statData.id == 74) //backpack4
										statData.intValue = 0xba9;
									else if (statData.id == 75) //backpack5
										statData.intValue = 0xba9;
									else if (statData.id == 76) //backpack6
										statData.intValue = 0xba9;
									else if (statData.id == 77) //backpack7
										statData.intValue = 0xba9;
									else if (statData.id == 78) //backpack8
										statData.intValue = 0xba9;
									else if (statData.id == 79) //has backpack
										statData.intValue = 1;
									else if (statData.id == 80) //skin (use the number from the Activate tag in the xml, <Activate skinType="914">UnlockSkin</Activate>
										statData.intValue = 872;
								}
							}
						}
					}*/
				}
			}
			if (packet.id() == ID_NEW_TICK) 
			{
				for (var x = 0; x < packet.statuses.length; x++) 
				{
					if (packet.statuses[x].objectId == playerId) 
					{
						for (var y = 0; y < packet.statuses[x].data.length; y++) 
						{
							var data = packet.statuses[x].data[y];
							if (data.id == 1) //current health
								data.intValue = 630;
							else if (data.id == 4) //current mana
								data.intValue = 389;
							else if (data.id == 6) //xp
								data.intValue = 2680169;
							//uncomment these three lines for debugging:
							//$.echo("NewTick "+statuses[x]+"."+data[y]+".id = "+packet.statuses[x].data[y].id);
							//$.echo("NewTick "+statuses[x]+"."+data[y]+".intValue = "+packet.statuses[x].data[y].intValue);
							//$.echo("NewTick "+statuses[x]+"."+data[y]+".stringValue = "+packet.statuses[x].data[y].stringValue);
						}
					}
				}
			}
			if (packet.id() == ID_TEXT) 
			{
				if (packet.name.equals("Oshyu")) 
				{
					packet.name = "New Name - if you\'re reading this in game, ya fucked up";
					packet.numStars = 70;
				}
			}
		}
	}
}