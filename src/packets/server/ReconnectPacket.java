package realmrelay.packets.server;

import java.io.DataInput;
import java.io.DataOutput;
import java.io.IOException;

import realmrelay.packets.Packet;


public class ReconnectPacket extends Packet 
{
	
	public String name;
	public String host;
	public int port;
	public int gameId;
	public int keyTime;
	public boolean isFromArena;
	public byte[] key = new byte[0];

	@Override
	public void parseFromInput(DataInput in) throws IOException 
	{
		this.name = in.readUTF();
		this.host = in.readUTF();
		this.port = in.readInt();
		this.gameId = in.readInt();
		this.keyTime = in.readInt();
		this.isFromArena = in.readBoolean();
		this.key = new byte[in.readShort()];
		in.readFully(key);
	}

	@Override
	public void writeToOutput(DataOutput out) throws IOException 
	{
		out.writeUTF(this.name);
		out.writeUTF(this.host);
		out.writeInt(this.port);
		out.writeInt(this.gameId);
		out.writeInt(this.keyTime);
		out.writeBoolean(this.isFromArena);
		out.writeShort(this.key.length);
		out.write(this.key);
	}

}
