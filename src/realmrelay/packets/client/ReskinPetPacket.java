package realmrelay.packets.client;

import java.io.DataInput;
import java.io.DataOutput;
import java.io.IOException;

import realmrelay.data.SlotObject;
import realmrelay.packets.Packet;


public class ReskinPetPacket extends Packet
{
    public int petInstanceId;
    public int pickedNewPetType;
    public SlotObject item = new SlotObject();

    @Override
    public void parseFromInput(DataInput in) throws IOException
    {
        this.petInstanceId = in.readInt();
        this.pickedNewPetType = in.readInt();
        this.item.parseFromInput(in);
    }

    @Override
    public void writeToOutput(DataOutput out) throws IOException
    {
        out.writeInt(this.petInstanceId);
        out.writeInt(this.pickedNewPetType);
        this.item.writeToOutput(out);
    }

}
