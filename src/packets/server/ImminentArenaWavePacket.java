package realmrelay.packets.server;

import java.io.DataInput;
import java.io.DataOutput;
import java.io.IOException;

import realmrelay.packets.Packet;


public class ImminentArenaWavePacket extends Packet
{

    public int currentRuntime;

    @Override
    public void parseFromInput(DataInput in) throws IOException
    {
        this.currentRuntime = in.readInt();
    }

    @Override
    public void writeToOutput(DataOutput out) throws IOException
    {
        out.writeInt(this.currentRuntime);
    }

}
