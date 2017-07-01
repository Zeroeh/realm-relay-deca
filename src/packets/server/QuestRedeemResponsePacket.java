package realmrelay.packets.server;


import java.io.DataInput;
import java.io.DataOutput;
import java.io.IOException;

import realmrelay.packets.Packet;

public class QuestRedeemResponsePacket extends Packet
{
    public boolean ok;
    public String message;

    @Override
    public void parseFromInput(DataInput in) throws IOException
    {
        this.ok = in.readBoolean();
        this.message = in.readUTF();
    }

    @Override
    public void writeToOutput(DataOutput out) throws IOException
    {
        out.writeBoolean(this.ok);
        out.writeUTF(this.message);
    }
}
