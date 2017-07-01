package realmrelay.packets.server;

import java.io.DataInput;
import java.io.DataOutput;
import java.io.IOException;

import realmrelay.packets.Packet;


public class EnterArenaPacket extends Packet
{

    public int currency;

    @Override
    public void parseFromInput(DataInput in) throws IOException
    {
        this.currency = in.readInt();
    }

    @Override
    public void writeToOutput(DataOutput out) throws IOException
    {
        out.writeInt(this.currency);
    }

}