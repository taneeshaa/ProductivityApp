const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 700,
    webPreferences: {
      contextIsolation: true,
    },
  });

  win.loadFile('index.html'); // placeholder
}

app.whenReady().then(createWindow);
