// This script controls the main process, which runs in a full Node.js environment and is responsible for controlling your app's lifecycle, displaying native interfaces, performing privileged operations, and managing renderer processes

const { app, BrowserWindow } = require('electron')

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  win.loadURL('http://localhost:8080/#/')
}

app.whenReady().then(() => {
  createWindow()
})

