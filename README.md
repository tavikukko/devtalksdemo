## Using this project

### Prerequisites
* Git
* NodeJS

### Installing ionic with cordova
```bash
$ npm install -g cordova ionic
```

### To run this demo (osx + xcode)
```bash
$ git clone https://github.com/tavikukko/devtalksdemo.git
$ cd devtalksdemo

$ ionic plugin add cordova-plugin-ms-adal
$ ionic platform add ios
$ ionic emulate ios -lr -c
```

### To run this demo (windows 10 + visual studio 2015 update 2 + windows 10 SDK + emulators for windows 10 mobile)
<img src="https://raw.githubusercontent.com/tavikukko/devtalksdemo/master/vs%20addins.PNG" width="450">

```bash
$ git clone https://github.com/tavikukko/devtalksdemo.git
$ cd devtalksdemo

$ ionic plugin add cordova-plugin-ms-adal
$ ionic platform add "windows@https://aka.ms/cordova-win10"
```

- Open the project file located in ..devtalksdemo\platforms\windows\CordovaApp.Windows10 with Visual Studio
- Select x86 + Mobile Emulator 10.0 the ribbon. Press play..

###Editor
[VSCode](https://code.visualstudio.com) with [Cordova Tools Extension] (https://marketplace.visualstudio.com/items?itemName=vsmobile.cordova-tools)
