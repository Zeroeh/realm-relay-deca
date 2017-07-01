//spamfilter.js | Zeroeh

var ID_TEXT = $.findPacketId("TEXT");

//Updated keyword list as of June 18th, 2017
var keywords = [
    "realmstock",
	"realmpower",
	"realmitems",
	"cheap",
	"lifepot",
	"org",
	".net",
	",com",
	".com",
	"stock",
	"delivery",
	"website",
	"pric"
	
];

function onServerPacket(event)
{
    var packet = event.getPacket();

    if (packet.id() == ID_TEXT)
    {
        var text = packet.text.toLowerCase();

        for (var i = 0; i < keywords.length; ++i)
        {
            if (text.indexOf(keywords[i]) != -1)
            {
                event.cancel();
                break;
            }
        }
    }
}