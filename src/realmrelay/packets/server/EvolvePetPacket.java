package realmrelay.packets.server;

import java.io.DataInput;
import java.io.DataOutput;
import java.io.IOException;

import realmrelay.packets.Packet;


public class EvolvePetPacket extends Packet
{

    public int petId;
    public int initialSkin;
    public int finalSkin;

    @Override
    public void parseFromInput(DataInput in) throws IOException
    {
        this.petId = in.readInt();
        this.initialSkin = in.readInt();
        this.finalSkin = in.readInt();
    }

    @Override
    public void writeToOutput(DataOutput out) throws IOException
    {
        out.writeInt(this.petId);
        out.writeInt(this.initialSkin);
        out.writeInt(this.finalSkin);
    }

}
