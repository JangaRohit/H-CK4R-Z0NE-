const { app, BrowserWindow, screen } = require('electron');

function createWindow() {
  // Get the primary display's size
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;

  // Create a window that takes a percentage of the screen size
  const mainWindow = new BrowserWindow({
    width: Math.floor(width * 0.8), // 80% of screen width
    height: Math.floor(height * 0.8), // 80% of screen height
    webPreferences: {
      nodeIntegration: true, // Enable Node integration if needed
      contextIsolation: false, // Disable context isolation if needed
    },
  });

  // Load your HTML file
  mainWindow.loadFile('index.html');

  // Open the DevTools (optional)
  mainWindow.webContents.openDevTools();
}

// This method will be called when Electron has finished initialization.
app.whenReady().then(createWindow);

// Quit when all windows are closed, except on macOS.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// On macOS, re-create a window in the app when the dock icon is clicked and there are no other windows open.
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
