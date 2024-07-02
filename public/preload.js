const { contextBridge, ipcRenderer,dialog  } = require('electron');


contextBridge.exposeInMainWorld('electron', {
  onNavigate: (callback) => {
    console.log('Listening for navigate events in preload');
    ipcRenderer.on('navigate', (event, path) => {
      console.log('Received navigate event:', path);
      callback(event, path);
    });
  },
  dialog: {
    showMessageBox: (options) => dialog.showMessageBoxSync(options),
    showOpenDialog: (options) => dialog.showOpenDialogSync(options),
    showSaveDialog: (options) => dialog.showSaveDialogSync(options),
  },
  minimize: () => ipcRenderer.send('minimize'),
  maximize: () => ipcRenderer.send('maximize'),
  close: () => ipcRenderer.send('close'),
});

