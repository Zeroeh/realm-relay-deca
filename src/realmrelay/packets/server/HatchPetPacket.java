package realmrelay.packets.server;

import java.io.DataInput;
import java.io.DataOutput;
import java.io.IOException;

import realmrelay.packets.Packet;


public class HatchPetPacket extends Packet
{

    public String petName;
    public int petSkin;

    @Override
    public void parseFromInput(DataInput in) throws IOException
    {
        this.petName = in.readUTF();
        this.petSkin = in.readInt();
    }

    @Override
    public void writeToOutput(DataOutput out) throws IOException
    {
        out.writeUTF(this.petName);
        out.writeInt(this.petSkin);
    }

}
