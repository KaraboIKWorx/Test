let shakeUnsub = null;

async function applyShakeSetting() {
  const motion = Registry.get('motion');

  if (shakeUnsub) { shakeUnsub(); shakeUnsub = null; }
  if (!State.settings.shakeToTrigger) return;

  if (!motion.isSupported()) {
    toast('Motion sensors not supported');
    State.settings.shakeToTrigger = false;
    await persistSettings();
    return;
  }

  if (motion.needsPermission()) {
    const result = await motion.requestPermission();
    if (result !== 'granted') {
      toast('Motion permission denied');
      State.settings.shakeToTrigger = false;
      await persistSettings();
      render();
      return;
    }
  }
};