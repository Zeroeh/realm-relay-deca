### Realm Relay updated to the DECA era of Realm of the Mad God
I updated realm relay to the current build X15.0.0 as of June 2017.

###Use IntelliJ Community Edition to compile. I won't make a compilation guide but building is very simple. Compile the project, then build a JAR artifact referencing the .jar file in /lib folder. The source as it is should compile with ZERO warnings. Make sure to use the JDK version 1.8 or higher. If the jar still doesn't compile you can run realm relay inside intellij by simply clicking run in the ide.

### What's new?
`Packets have been updated`
`All new packets have been added`
`Minor bug fixes, as well as some performance enhancements (f*ck outta here 100% thread usage)`
`Packet structures have been updated`

### What still needs to be done?
`New packets have been added, but the app doesn't parse them yet.`
`The XML files containing tiles, objects, and items still need to be updated to current builds. (Easy fix, just need to parse the new xml data tags from pets)`

### I want to make a new addition to realm relay, what would be cool to add?
`Make it so that you can type /reload in game so that all scripts get refreshed. Currently the refresh when you switch maps but having them refresh instantly would be amazing.`
`Better non-blocking IO. You can't really sit in a loop in a script without lagging out. It might be the javascript engines fault.`
