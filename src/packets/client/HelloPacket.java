package realmrelay.packets.client;

import java.io.DataInput;
import java.io.DataOutput;
import java.io.IOException;
import realmrelay.packets.Packet;

public class HelloPacket extends Packet 
{
	public String buildVersion;
	public int gameId;
	public String guid;
	public int random1;
	public String password;
	public int random2;
	public String secret;
	public int keyTime;
	public byte[] key = new byte[0];
	//public byte[] obf1 = new byte[0];
	public String mapJson;
	public String entryTag;
	public String gameNet; //rotmg
	public String gameNetUserId;
	public String playPlatform; //rotmg
	public String platformToken;
	public String userToken;
	public String obf1; //not sure why the fuck this needs to be here...
	
	@Override
	public void parseFromInput(DataInput in) throws IOException 
	{
		this.buildVersion = in.readUTF();
		this.gameId = in.readInt();
		this.guid = in.readUTF();
		this.random1 = in.readInt();
		this.password = in.readUTF();
		this.random2 = in.readInt();
		this.secret = in.readUTF();
		this.keyTime = in.readInt();
		this.key = new byte[in.readShort()];
		in.readFully(this.key);
		//this.obf1 = new byte[in.readInt()];
		//in.readFully(this.obf1);
		this.mapJson = in.readUTF();
		this.entryTag = in.readUTF();
		this.gameNet = in.readUTF();
		this.gameNetUserId = in.readUTF();
		this.playPlatform = in.readUTF();
		this.platformToken = in.readUTF();
		this.userToken = in.readUTF();
		this.obf1 = in.readUTF();
	}
	
	@Override
	public void writeToOutput(DataOutput out) throws IOException 
	{
		out.writeUTF(this.buildVersion);
		out.writeInt(this.gameId);
		out.writeUTF(this.guid);
		out.writeInt(random1);
		out.writeUTF(this.password);
		out.writeInt(random2);
		out.writeUTF(this.secret);
		out.writeInt(this.keyTime);
		out.writeShort(this.key.length);
		out.write(this.key);
		//out.writeInt(this.obf1.length);
		//out.write(this.obf1);
		out.writeUTF(this.mapJson);
		out.writeUTF(this.entryTag);
		out.writeUTF(this.gameNet);
		out.writeUTF(this.gameNetUserId);
		out.writeUTF(this.playPlatform);
		out.writeUTF(this.platformToken);
		out.writeUTF(this.userToken);
		out.writeUTF(this.obf1);
	}
	
}
