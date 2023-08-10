config.jars = "jar/Puyo_Pop_Fever_ReChained_LITE_1.51_240.jar";
config.jad = "jar/Puyo_Pop_Fever_ReChained_LITE_1.51_240.jad";
config.midletClassName = "puyo.Puyo"; 
MIDlet.shouldStartBackgroundService = function() {
  return fs.exists("/startBackgroundService");
};