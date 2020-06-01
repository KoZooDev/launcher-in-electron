const { app, BrowserWindow } = require('electron')


var win;

function createWindow() {
    // Cria uma janela de navegação.
    win = new BrowserWindow({
        width: 980,
        height: 560,
        titleBarStyle: 'customButtonsOnHover',
        frame: false,
        enableRemoteModule: true,
        webPreferences: {
            nodeIntegration: true
        }
    })

    // and load the index.html of the app.
    win.loadFile('index.html')
    win.setMaximizable(false)
    win.setResizable(false)
    win.setFullScreen(false)
    win.setFullScreenable(false)
    win.removeMenu()
        // Open the DevTools.
        //win.webContents.openDevTools()


}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Algumas APIs podem ser usadas somente depois que este evento ocorre.
app.whenReady().then(createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // No macOS é comum para aplicativos e sua barra de menu 
    // permaneçam ativo até que o usuário explicitamente encerre com Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})

// In this file you can include the rest of your app's specific main process
// code. Você também pode colocar eles em arquivos separados e requeridos-as aqui.