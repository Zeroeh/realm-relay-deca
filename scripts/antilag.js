//antilag.js | Zeroeh

var ID_SHOWEFFECT = $.findPacketId("SHOWEFFECT");
var ID_ALLYSHOOT = $.findPacketId("ALLYSHOOT");
var ID_SERVERPLAYERSHOOT = $.findPacketId("SERVERPLAYERSHOOT");
var ID_DAMAGE = $.findPacketId("DAMAGE");
var ID_CREATE_SUCCESS = $.findPacketId("CREATE_SUCCESS");
var ID_NOTIFICATION = $.findPacketId("NOTIFICATION");
var ID_PLAYERTEXT = $.findPacketId("PLAYERTEXT");

var active = true;
var playerId = -1;

function onServerPacket(event)
{
    var packet = event.getPacket();

    if (packet.id() == ID_CREATE_SUCCESS)
	{
        handleCreateSuccess(packet, event);
	}
    else if (packet.id() == ID_SHOWEFFECT)
	{
        handleShowEffect(packet, event);
	}
    else if (packet.id() == ID_ALLYSHOOT)
	{
        handleAllyShoot(packet, event);
	}
    else if (packet.id() == ID_DAMAGE)
	{
        handleDamage(packet, event);
	}
	//else if (packet.id() == ID_SERVERPLAYERSHOOT) //experimental
	//{
		//handleServerPlayerShoot(packet, event);
	//}
}

function onClientPacket(event)
{
    var packet = event.getPacket();

    if (packet.id() == ID_PLAYERTEXT)
	{
        handlePlayerText(packet, event);
	}
}

function handleCreateSuccess(packet, event)
{
    playerId = packet.objectId;
}

function handleServerPlayerShoot(packet, event)
{
    if (active)
	{
        event.cancel();
	}
}

function handleShowEffect(packet, event) 
{
    if (active) 
    {
        switch (packet.effectType)
        {
            case 1:
                event.cancel();
                break;
            case 2:
                event.cancel();
                break;
            case 5:
                var notMe = showEffectPacket.targetObjectId != playerId;
                if (notMe)
				{
                    event.cancel();
				}
                break;

            case 6:
                event.cancel();
                break;
            case 7:
                event.cancel();
                break;
            case 8:
                event.cancel();
                break;
            case 9:
                event.cancel();
                break;
            case 10:
                event.cancel();
                break;
            case 12:
                event.cancel();
                break;
            case 17:
                event.cancel();
                break;
            case 18:
                event.cancel();
                break;
            case 19:
                event.cancel();
                break;
        }
    }
}

function handleAllyShoot(packet, event)
{
    if (active)
	{
        event.cancel();
	}
}

function handleDamage(packet, event)
{
    if (active)
	{
        event.cancel();
	}
}

function handlePlayerText(packet, event)
{
    var msg = packet.text;
    
    $.echo(msg);
    if (msg.startsWith("/lag"))
    {
        event.cancel();
        var arr = msg.split(" ");
        if (arr.length > 1)
        {
            if (arr[1] == "off")
            {
                active = true;
                showNotif("Reducing Lag!");
            }
            else if (arr[1] == "on")
            {
                active = false;
                showNotif("Increasing Lag, WTF DUDE!");
            }
            else
            {
                $.echo("(antiLag) Expected on/off argument, got: " + arr[1]);
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