//connect.js | Zeroeh

var ID_PLAYER_TEXT = $.findPacketId("PLAYERTEXT");
var ID_RECONNECT = $.findPacketId("RECONNECT");
var ID_ESCAPE = $.findPacketId("ESCAPE");

//Server ips up to date as of June 18th, 2017
//go to http://realmofthemadgodhrd.appspot.com/char/list to update the server ips
var servers = { 
	"usw" : "54.153.32.11",
	"usw2" : "54.90.78.228",
	"usw3" : "54.67.119.179",
	"use" : "52.23.232.42",
	"use2" : "52.91.203.118",
	"use3" : "54.157.6.58",
	"uss" : "52.91.68.60",
	"uss2" : "54.197.39.39",
	"uss3" : "52.207.252.131",
	"usmw" : "54.211.143.166",
	"usmw2" : "54.242.131.23",
	"ussw" : "54.183.179.205",
	"usnw" : "54.234.151.78",
	"euw" : "54.154.30.49",
	"euw2" : "54.171.194.60",
	"eun" : "54.194.34.20",
	"eun2" : "54.194.12.37",
	"eue" : "54.154.226.25",
	"eus" : "54.171.241.19",
	"eusw" : "54.154.223.38",
	"ae" : "54.199.197.208",
	"ase" : "52.77.221.237",
};

var usage = 
"Usage: /go <lowercase-abbreviated-server-name>\n \
\t\tNot a valid server...\n";

//If someone wants to bother updating these please let Zeroeh know so he can add it to the official releases
// (or be greedy and keep it to yourself :< )
var portals = { 
		"{epicspiderDen.The_Crawling_Depths}" : 1,
        "{forestMaze.Forest_Maze_Portal}" : 1,
        "{cave.Treasure_Cave_Portal}" : 1,
        "{shatters.The_Shatters}" : 1,
        "{oryxCastle.OryxAPOSs_Chamber_Portal}" : 1,
        "{epicpirateCave.Deadwater_Docks}" : 1,
        "{epicpirateCave.BilgewaterAPOSs_Grotto_Portal}" : 1,
        "{madLab.Mad_Lab_Portal}" : 1,
        "{objects.Pirate_Cave_Portal}" : 1,
        "{objects.Snake_Pit_Portal}" : 1,
        "{objects.Spider_Den_Portal}" : 1,
        "{objects.Undead_Lair_Portal}" : 1,
        "{objects.Battle_Nexus_Portal}" : 1,
        "{objects.Tomb_of_the_Ancients_Portal}" : 1,
        "{objects.Dreamscape_Labyrinth_Portal}" : 1,
        "{objects.Ocean_Trench_Portal}" : 1,
        "{objects.Abyss_of_Demons_Portal}" : 1,
        "{objects.Forbidden_Jungle_Portal}" : 1,
        "{objects.Manor_of_the_Immortals_Portal}" : 1,
        "{objects.Davy_JonesAPOSs_Locker_Portal}" : 1,
        "{objects.Beachzone_Portal}" : 1,
        "{objects.Candyland_Portal}" : 1,
        "{objects.Haunted_Cemetery_Portal}" : 1,
        "{objects.Glowing_Portal}" : 1,
        "{epicforestMaze.Woodland_Labyrinth}" : 1,
        "{hauntedCemetery.Area1_Portal}" : 1,
        "{hauntedCemetery.Haunted_Cemetery_Gates_Portal}" : 1,
        "{hauntedCemetery.Haunted_Cemetery_Graves_Portal}" : 1,
        "{hauntedCemetery.Haunted_Cemetery_Final_Rest_Portal}" : 1,
        "Oryx\'s Castle" : 1,
        "{oryx.Wine_Cellar}" : 1
};

function onClientPacket(event) 
{
	var packet = event.getPacket();
	if (packet.id() == ID_PLAYER_TEXT)
	{
		var text = packet.text.toLowerCase();
		if (text.length() >= 4 && text.substring(0,4) == "/go")
		{
			event.cancel();

			if (text.length() <= 5)
			{
				event.echo(usage)
				return;
			}
			var server = text.substring(5, text.length()).toLowerCase();

			if (servers[server] == null)
			{
				event.echo("Server " + server + " not found.");
			}
			else
			{
				event.setGameIdSocketAddress(-2, servers[server], event.getRemotePort());

				var recon = event.createPacket(ID_RECONNECT);
				recon.name = "Nexus";
				recon.host = "";
				recon.port = 2050;
				recon.gameId = -2;
				event.sendToClient(recon);
			}
			return;
		}
		else if (text == "/realm") // Connects to realm
		{
			var reconPacket = event.getGlobal("realm");
		}
		else if(text == "/vault") // Connects to vault
		{
			var reconPacket = event.getGlobal("vault");
		}
		else if(text == "/ghall") // Connects to ghall
		{
			var reconPacket = event.getGlobal("ghall");
		}
		else if(text == "/dungeon") // Connects to dungeon
		{
			var reconPacket = event.getGlobal("dungeon");
		}
		else
		{
			return;
		}

		event.cancel();
		if (reconPacket != null)
		{
			event.sendToClient(reconPacket);
		}
		else
		{
			event.echo("Nothing to reconnect to.");
		}
	}
    // Overrides escape so that player stays on same server
	else if (packet.id() == ID_ESCAPE)
	{
		event.cancel();
		var recon = event.createPacket(ID_RECONNECT);
		recon.name = "Nexus";
		recon.host = "";
		recon.port = 2050;
		recon.gameId = -2;
		event.sendToClient(recon);
	}
}

function onServerPacket(event) 
{
	var packet = event.getPacket();
	if (packet.id() == ID_RECONNECT)
	{
		//event.echo("Reconnect Name: " + packet.name);
		if (packet.name.length() >= 11 && packet.name.substring(0,11) == "NexusPortal")
		{
			event.setGlobal("realm", packet);
		}
		else if (packet.name == "{\"text\":\"server.vault\"}") //todo: update to just "Vault"
		{
			event.setGlobal("vault", packet);
		}
		else if (packet.name == "Guild Hall")
		{
			event.setGlobal("ghall", packet);
		}
		else if (portals[packet.name] == 1)
		{
			event.setGlobal("dungeon", packet);
		}
	}
}
