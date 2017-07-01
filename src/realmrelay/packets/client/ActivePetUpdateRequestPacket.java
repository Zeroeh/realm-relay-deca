package realmrelay.packets.client;

import java.io.DataInput;
import java.io.DataOutput;
import java.io.IOException;

import realmrelay.packets.Packet;


public class ActivePetUpdateRequestPacket extends Packet
{

    public byte command;
    public int instanceId;

    @Override
    public void parseFromInput(DataInput in) throws IOException
    {
        this.command = in.readByte();
        this.instanceId = in.readInt();
    }

    @Override
    public void writeToOutput(DataOutput out) throws IOException
    {
        out.writeByte(this.command);
        out.writeInt(this.instanceId);
    }

}
