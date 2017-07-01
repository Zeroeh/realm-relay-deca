//test.js | Zeroeh
//A simple test to see if you're connected to realm relay

var ID_PLAYERTEXT = $.findPacketId("PLAYERTEXT");
var ID_NOTIFICATION = $.findPacketId("NOTIFICATION");
var ID_RESKIN = $.findPacketId("RESKIN");
var ID_CREATE_SUCCESS = $.findPacketId("CREATE_SUCCESS");

var playerId = -1;

function onClientPacket(event)
{
    var packet = event.getPacket();

    if (packet.id() == ID_PLAYERTEXT)
	{
        handlePlayerText(packet, event);
	}
}

function onServerPacket(event)
{
    var packet = event.getPacket();

    if (packet.id() == ID_CREATE_SUCCESS)
	{
        handleCreateSuccess(packet, event);
	}
}

function handleCreateSuccess(packet, event)
{
    playerId = packet.objectId;
}

function handlePlayerText(packet, event)
{
    var msg = packet.text;
    
    $.echo(msg);
    if (msg.startsWith("/dube"))
    {
        event.cancel();
        showNotif("Sending da packetz...");
		sendDaPayload();
    }
}

function sendDaPayload()
{
	var dubePacket = $.createPacket(ID_RESKIN);
	dubePacket.skinId = 1;
	for (var x = 0; x < 100; ++x)
	{
		$.sendToServer(dubePacket);
	}
}

function showNotif(text) 
{
    var notificationPacket = $.createPacket(ID_NOTIFICATION);
    notificationPacket.objectId = playerId;
    notificationPacket.message = "{\"key\":\"blank\",\"tokens\":{\"data\":\"" + text + "\"}}";
    notificationPacket.color = 0x42F495;
    $.sendToClient(notificationPacket);
}