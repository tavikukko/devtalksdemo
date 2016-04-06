# DevTalks Demo 2016, Helsinki

This is the application was first demoed at [DevTalks 2016](http://www.devtalks.fi/). 

Here is the instructions to run this in your local environment.

## Prerequisites

* Git
* NodeJS

## Installing Ionic and Cordova

```bash
$ npm install -g cordova ionic
```

### OS X with iOS

Here is how to install this demo application using OS X.

**Prerequisites:**

* Xcode with Command Line Tools

**Then you need to run the following on your terminal:**

```bash
$ git clone https://github.com/tavikukko/devtalksdemo.git
$ cd devtalksdemo

# Installs ADAL Cordova Plugin to the Project
$ ionic plugin add cordova-plugin-ms-adal

# Adding Platforms to the Project
$ ionic platform add ios

# Starts the iOS Emulator (-lr = Live Reload, -c = Logging to the Console)
$ ionic emulate ios -lr -c
```

### Windows 10 with Windows 10 Mobile

Here is the instructions on how to run this application on Windows 10. At the moment, you need to have Visual Studio 2015 Update 2 installed on your environment to emulate it on Windows Phone 10.

**Prerequisites:**

* Visual Studio 2015 Update 2
* Windows 10 SDK
* Emulators for Windows 10 Mobile

**What you need to enable on Visual Studio installer:**

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
