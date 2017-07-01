package realmrelay.packets.server;

import java.io.DataInput;
import java.io.DataOutput;
import java.io.IOException;

import realmrelay.packets.Packet;


public class PingPacket extends Packet {
	
	public int serial;

	@Override
	public void parseFromInput(DataInput in) throws IOException {
		this.serial = in.readInt();
	}

	@Override
	public void writeToOutput(DataOutput out) throws IOException {
		out.writeInt(this.serial);
	}

}
