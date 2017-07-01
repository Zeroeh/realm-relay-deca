//who.js | Zeroeh

var ID_TEXT = $.findPacketId("TEXT");

function onServerPacket(event) 
{
	var packet = event.getPacket();
	switch (packet.id()) 
	{
		case ID_TEXT: 
		{
			var star = packet.numStars;
			var text = packet.text;
			var params = text.split(" ");
			if (text.indexOf("Players online") != -1 && star == -1) 
			{
				var count = params.length - 2;
				yellowAlert(event, "Count: " + count);
			}
			break;
		}
	}
}

function yellowAlert(event, text) 
{
	var textPacket = event.createPacket(ID_TEXT);
	textPacket.name = "";
	textPacket.objectId = -1;
	textPacket.numStars = -1;
	textPacket.bubbleTime = 0;
	textPacket.recipient = "";
	textPacket.text = text;
	textPacket.cleanText = "";
	event.sendToClient(textPacket);
}