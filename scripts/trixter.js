/* vulcan.js by 059

PLAYERSHOOT
 int time
 int bulletId
 int containerType
 Location startingPos
 float angle

ALLYSHOOT
 int bulletId
 int ownerId
 short containerId
 float angle

CREATE_SUCCESS
 int objectId
 int charId
*/
var ID_CREATESUCCESS = $.findPacketId("CREATE_SUCCESS");
var ID_PLAYERSHOOT = $.findPacketId("PLAYERSHOOT");
var ID_PLAYERTEXT = $.findPacketId("PLAYERTEXT");
var ID_ALLYSHOOT = $.findPacketId("ALLYSHOOT");
var ID_BUY = $.findPacketId("BUY");
var ID_BUYRESULT = $.findPacketId("BUYRESULT");
var ID_GOTO = $.findPacketId("GOTO");
var ID_USEITEM = $.findPacketId("USEITEM");
var ID_GOTOACK = $.findPacketId("GOTOACK");
var ID_FAILURE = $.findPacketId("FAILURE");

var player = 0;
var num = 0;
var spam = false;
var itemx = 0;
var itemy = 0;
var enabled = false;

function onClientPacket(event) 
{
	if (enabled)
	{
		var packet = event.getPacket();

		if (packet.id() == ID_USEITEM) 
		{
			itemx = packet.itemUsePos.x;
			itemy = packet.itemUsePos.y;
			spam = true;
			event.cancel();
			if (spam == true) 
			{
				var selfAlly = event.createPacket(ID_GOTO);
				selfAlly.objectId = player;
				selfAlly.pos.x = itemx;	
				selfAlly.pos.y = itemy;	
				event.sendToClient(selfAlly);
			}
		}

		if (packet.id() == ID_PLAYERTEXT) 
		{
			if ((packet.text.length() >= 2) && (packet.text.substring(0, 3) == "/s "))
			{
				event.cancel();
				num = packet.text.substring(3, packet.text.length());
				$.echo("Spamming " + num + " times on next shoot, fire at will.");
				spam = true;
			}
		}
	}
}

function onServerPacket(event)
{
	if (enabled)
	{
		var packet = event.getPacket();
		if (packet.id() == ID_CREATESUCCESS)
		{
			player = packet.objectId;
		}
		else if (packet.id() == ID_FAILURE)
		{
			event.cancel();
		}
	}
}