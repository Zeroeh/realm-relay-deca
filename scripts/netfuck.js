//netfuck.js | Zeroeh

var ID_PING = $.findPacketId("PING"); //int serial
var ID_PONG = $.findPacketId("PONG"); //int serial, int time
var ID_CREATE_SUCCESS = $.findPacketId("CREATE_SUCCESS");
var ID_NOTIFICATION = $.findPacketId("NOTIFICATION");
var ID_PLAYERTEXT = $.findPacketId("PLAYERTEXT");


function onServerPacket(event)
{
    var packet = event.getPacket();

    if (packet.id() == ID_PING)
    {
		var pongPacket = $.createPacket(ID_PONG);
		
		pongPacket.serial = packet.serial;
		pongPacket.time = $.getGameTime;
		//$.sendToServer(pongPacket);
		
    }
}


function onClientPacket(event)
{
	var packet = event.getPacket();
	
	if (packet.id() == ID_PONG)
	{
		
	}
}

function handlePlayerText(packet, event)
{
    var msg = packet.text;
    
    $.echo(msg);
    if (msg.startsWith("/pong"))
    {
        event.cancel();
        var arr = msg.split(" ");
        if (arr.length > 1)
        {
            if (arr[1] == "on")
            {
                active = true;
                showNotif("on");
            }
            else if (arr[1] == "off")
            {
                active = false;
                showNotif("off");
            }
            else
            {
                $.echo("(netfuck) Expected on/off argument, got: " + arr[1]);
            }
        }
    }
}

function showNotif(text) 
{
    var notificationPacket = $.createPacket(ID_NOTIFICATION);
    notificationPacket.objectId = playerId;
    notificationPacket.message = "{\"key\":\"blank\",\"tokens\":{\"data\":\"" + text + "\"}}";
    notificationPacket.color = 0xCF000F;
    $.sendToClient(notificationPacket);
}