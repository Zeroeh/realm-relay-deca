package realmrelay.packets.server;

import java.io.DataInput;
import java.io.DataOutput;
import java.io.IOException;

import realmrelay.packets.Packet;


public class ActivePetUpdatePacket extends Packet
{

    public int instanceId;

    @Override
    public void parseFromInput(DataInput in) throws IOException
    {
        this.instanceId = in.readInt();
    }

    @Override
    public void writeToOutput(DataOutput out) throws IOException
    {
        out.writeInt(this.instanceId);
    }

}