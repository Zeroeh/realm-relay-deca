package realmrelay.packets.server;

import java.io.DataInput;
import java.io.DataOutput;
import java.io.IOException;

import realmrelay.packets.Packet;


public class PasswordPromptPacket extends Packet
{

    public int cleanPasswordStatus;

    @Override
    public void parseFromInput(DataInput in) throws IOException
    {
        this.cleanPasswordStatus = in.readInt();
    }

    @Override
    public void writeToOutput(DataOutput out) throws IOException
    {
        out.writeInt(this.cleanPasswordStatus);
    }

}
