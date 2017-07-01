//spam.js | Zeroeh //rawrmemuffinman@gmail.com
//old ability spam script, keeping it for legacy reasons

var ID_PLAYERSHOOT = $.findPacketId("PLAYERSHOOT");
var ID_PLAYERTEXT = $.findPacketId("PLAYERTEXT");
var ID_USEITEM = $.findPacketId("USEITEM");
var ID_MOVE = $.findPacketId("MOVE");
var ID_CREATE_SUCCESS = $.findPacketId("CREATE_SUCCESS");

var movePacket = null;
var itemUse = null;
var playerShoot = null;
var playerObjectId = -1;

var set = false;

var usage = 
"Usage: /spam <type> <size> <count> \n\
\t<type>: q -> square		<size>: edge length	\n\
		b -> box			edge length \n\
		d -> diamond			edge length \n\
	 	c -> circle			radius \n\
		s -> spiral			radius \n\
		r -> random			radius \n\
		n -> none			N/A  \n\
		p -> projectile			n -> in place / r -> random \n";

function onClientPacket(event) 
{
	var packet = event.getPacket();
	switch (packet.id()) 
	{
		case ID_CREATE_SUCCESS: 
		{
			playerObjectId = packet.objectId;
			break;
		}
		case ID_MOVE: 
		{
			movePacket = packet;
			break;
		}
		case ID_PLAYERTEXT: 
		{
			var text = packet.text.toLowerCase();
			var params = text.split(" ");

			if (params[0] == "/set")
			{
				event.cancel();
				set = !set;
			}

			if (params[0] == "/spam")
			{
				event.cancel();

				var time = movePacket.time;

				if (params.length != 4)
				{
					event.echo(usage);
					break;
				}

				var type = params[1];
				var size = params[2];
				var count = params[3];

				if (type == "n")
				{
					for (var i = 0; i < count; ++i)
					{
						itemUse.time = time + 800 + i * 550;
						event.sendToServer(itemUse);
					}
				}
				else if (type == "q")
				{
					var orig_x = itemUse.itemUsePos.x;
					var orig_y = itemUse.itemUsePos.y;

					for (var i = 0; i < count; ++i)
					{
						itemUse.time = time + 800 + i * 550;
						itemUse.itemUsePos.x += (i % size);
						itemUse.itemUsePos.y += (Math.floor(i / size) % size);
						event.sendToServer(itemUse);

						itemUse.itemUsePos.x = orig_x;
						itemUse.itemUsePos.y = orig_y;
					}
				}
				else if (type == "c")
				{
					var orig_x = itemUse.itemUsePos.x;
					var orig_y = itemUse.itemUsePos.y;
					var offset = Math.PI * 2 / count;

					for (var i = 0; i < count; ++i)
					{
						itemUse.time = time + 800 + i * 550;
						itemUse.itemUsePos.x += size * Math.sin(i * offset);
						itemUse.itemUsePos.y += size * Math.cos(i * offset);
						event.sendToServer(itemUse);

						itemUse.itemUsePos.x = orig_x;
						itemUse.itemUsePos.y = orig_y;
					}
				}
				else if (type == "s")
				{
					var orig_x = itemUse.itemUsePos.x;
					var orig_y = itemUse.itemUsePos.y;
					var offset = Math.PI * 2 / count * 3;
					var r_offset = size/count;

					for (var i = 0; i < count; ++i)
					{
						itemUse.time = time + 800 + i * 550;
						itemUse.itemUsePos.x += (i * r_offset) * Math.sin(i * offset);
						itemUse.itemUsePos.y += (i * r_offset) * Math.cos(i * offset);
						event.sendToServer(itemUse);

						itemUse.itemUsePos.x = orig_x;
						itemUse.itemUsePos.y = orig_y;
					}
				}
				else if (type == "b")
				{
					var offset = size / (count / 4);
					var orig_x = itemUse.itemUsePos.x;
					var orig_y = itemUse.itemUsePos.y;

					for (i = 0; i < count / 4; ++i)
					{
						itemUse.time = time + 800 + i * 550;
						itemUse.itemUsePos.x += offset;
						event.sendToServer(itemUse);
					}
					for (i = 0; i < count / 4; ++i)
					{
						itemUse.time = time + 800 + (count / 4 + 1) * 550 + i * 550;
						itemUse.itemUsePos.y += offset;
						event.sendToServer(itemUse);
					}
					for (i = 0; i < count / 4; ++i)
					{
						itemUse.time = time + 800 + (count / 2 + 1) * 550 + i * 550;
						itemUse.itemUsePos.x -= offset;
						event.sendToServer(itemUse);
					}
					for (i = 0; i < count / 4; ++i)
					{
						itemUse.time = time + 800 + (3 * count / 4 + 1) * 550 + i * 550;
						itemUse.itemUsePos.y -= offset;
						event.sendToServer(itemUse);
					}
					itemUse.itemUsePos.x = orig_x;
					itemUse.itemUsePos.y = orig_y;
				}
				else if (type == "d")
				{
					var offset = size / (count / 4);
					var orig_x = itemUse.itemUsePos.x;
					var orig_y = itemUse.itemUsePos.y;

					for (i = 0; i < count / 4; ++i)
					{
						itemUse.time = time + 800 + i * 550;
						itemUse.itemUsePos.x += offset;
						itemUse.itemUsePos.y += offset;						
						event.sendToServer(itemUse);
					}
					for (i = 0; i < count / 4; ++i)
					{
						itemUse.time = time + 800 + (count / 4 + 1) * 550 + i * 550;
						itemUse.itemUsePos.x -= offset;
						itemUse.itemUsePos.y += offset;	
						event.sendToServer(itemUse);
					}
					for (i = 0; i < count / 4; ++i)
					{
						itemUse.time = time + 800 + (count / 2 + 1) * 550 + i * 550;
						itemUse.itemUsePos.x -= offset;
						itemUse.itemUsePos.y -= offset;	
						event.sendToServer(itemUse);
					}
					for (i = 0; i < count / 4; ++i)
					{
						itemUse.time = time + 800 + (3 * count / 4 + 1) * 550 + i * 550;
						itemUse.itemUsePos.x += offset;
						itemUse.itemUsePos.y -= offset;	
						event.sendToServer(itemUse);
					}
					itemUse.itemUsePos.x = orig_x;
					itemUse.itemUsePos.y = orig_y;
				}
				else if (type == "r")
				{
					var orig_x = itemUse.itemUsePos.x;
					var orig_y = itemUse.itemUsePos.y;

					for (var i = 0; i < count; ++i)
					{
						itemUse.time = time + 800 + i * 550;
						itemUse.itemUsePos.x += (size * Math.random()) * Math.sin(Math.PI * 2 * Math.random());
						itemUse.itemUsePos.y += (size * Math.random()) * Math.cos(Math.PI * 2 * Math.random());
						event.sendToServer(itemUse);

						itemUse.itemUsePos.x = orig_x;
						itemUse.itemUsePos.y = orig_y;
					}
				}
				else if (type == "p")
				{
					var a = (itemUse != null && playerShoot.time == itemUse.time);

					if (size == "n" && a)
					{
						playerShoot.time = time;
						itemUse.time = time;
						for (var i = 0; i < count; ++i)
						{
							itemUse.time += 1000;
							event.sendToServer(itemUse);

							playerShoot.time += 1000;
							playerShoot.angle = Math.PI * 2 * Math.random() - Math.PI;
							event.sendToServer(playerShoot);
						}
					}
					else if (size == "r")
					{
						for (var i = 0; i < count; ++i)
						{
							playerShoot.time = time + 800 + i * 550;
							playerShoot.angle = Math.PI * 2 * Math.random() - Math.PI;
							if (a)
							{
								itemUse.time = playerShoot.time;
								event.sendToServer(itemUse);
							}
							event.sendToServer(playerShoot);
						}
					}
				}
			}
			break;
		}
		case ID_USEITEM: 
		{
			itemUse = packet;

			if (set)
			{
				var count = 12;
				var size = 2;

				var orig_x = itemUse.itemUsePos.x;
				var orig_y = itemUse.itemUsePos.y;
				var offset = Math.PI * 2 / count;

				for (var i = 0; i < count; ++i)
				{
					itemUse.time += 1000;
					itemUse.itemUsePos.x += size * Math.sin(i * offset);
					itemUse.itemUsePos.y += size * Math.cos(i * offset);
					event.sendToServer(itemUse);

					itemUse.itemUsePos.x = orig_x;
					itemUse.itemUsePos.y = orig_y;
				}
			}
			break;
		}
		case ID_PLAYERSHOOT: 
		{
			playerShoot = packet;

			if (itemUse == null)
			{
				break;
			}

			if (set == "n")
			{
				itemUse.time = playerShoot.time;
				for (var i = 0; i < setCount; ++i)
				{
					itemUse.time += 1000;
					playerShoot.time += 1000;
					event.sendToServer(itemUse);
					event.sendToServer(playerShoot);
				}
			}
			else if (set == "r")
			{
				itemUse.time = playerShoot.time;
				for (var i = 0; i < setCount; ++i)
				{
					itemUse.time += 1000;
					playerShoot.time += 1000;
					playerShoot.angle = Math.PI * 2 * Math.random() - Math.PI;
					event.sendToServer(itemUse);
					event.sendToServer(playerShoot);
				}
			}
			break;
		}
	}
}