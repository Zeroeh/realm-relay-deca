package realmrelay.packets.client;

import java.io.DataInput;
import java.io.DataOutput;
import java.io.IOException;

import realmrelay.data.SlotObject;
import realmrelay.packets.Packet;


public class PetUpgradeRequestPacket extends Packet
{

    public byte petTransType;
    public int PIDOne;
    public int PIDTwo;
    public int objectId;
    public SlotObject slotObject = new SlotObject();
    public byte paymentTransType;

    @Override
    public void parseFromInput(DataInput in) throws IOException
    {
        this.petTransType = in.readByte();
        this.PIDOne = in.readInt();
        this.PIDTwo = in.readInt();
        this.objectId = in.readInt();
        this.slotObject.parseFromInput(in);
        this.paymentTransType = in.readByte();

    }

    @Override
    public void writeToOutput(DataOutput out) throws IOException
    {
        out.writeByte(this.petTransType);
        out.writeInt(this.PIDOne);
        out.writeInt(this.PIDTwo);
        out.writeInt(this.objectId);
        this.slotObject.writeToOutput(out);
        out.writeByte(this.paymentTransType);
    }

}
