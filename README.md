# DevTalks Demo 2016, Helsinki

This is the application was first demoed at [DevTalks 2016](http://www.devtalks.fi/). 

Here are the instructions to run this in your local environment.

## Prerequisites

* Git
* NodeJS

## Installing Ionic and Cordova

```bash
$ npm install -g cordova ionic
```

### OS X

Here is how to install this demo application using OS X.

```bash
$ git clone https://github.com/tavikukko/devtalksdemo.git
$ cd devtalksdemo

$ ionic plugin add cordova-plugin-ms-adal
$ ionic platform add ios
$ ionic emulate ios -lr -c
```

### Windows 10

Here is the instructions how to run this application on Windows 10.

**Prerequisities:**

* Visual Studio 2015 Update 2
* Windows 10 SDK
* Emulators for Windows 10 Mobile

What you need to enable on Visual Studio installer:

<img src="https://raw.githubusercontent.com/tavikukko/devtalksdemo/master/vs%20addins.PNG" width="450">

**Installation**

```bash
$ git clone https://github.com/tavikukko/devtalksdemo.git
$ cd devtalksdemo

$ ionic plugin add cordova-plugin-ms-adal
$ ionic platform add "windows@https://aka.ms/cordova-win10"
```

**The adjustments that needs to be done for this project to work:**

1. Open the project file located in `..devtalksdemo\platforms\windows\CordovaApp.Windows10` with Visual Studio
2. Select x86 + Mobile Emulator 10.0 from the Ribbon, and Press play do emulate :)

<img src="https://raw.githubusercontent.com/tavikukko/devtalksdemo/master/visualstudioemulating.PNG" width="450">

### Recommend IDE

[VSCode](https://code.visualstudio.com) with [Cordova Tools Extension] (https://marketplace.visualstudio.com/items?itemName=vsmobile.cordova-tools)
