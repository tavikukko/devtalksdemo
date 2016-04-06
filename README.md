# DevTalks Demo 2016, Helsinki

This is the application was first demoed at [DevTalks 2016](http://www.devtalks.fi/). 

Here are the instructions to run this in your local environment.

### Prerequisites

* Git
* NodeJS

### Installing Ionic and Cordova

```bash
$ npm install -g cordova ionic
```

## OS X with iOS

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
# to run on device 'ionic run ios -lr -c'
```

## Windows 10 with Windows 10 Mobile

Here is the instructions on how to run this application on Windows 10. At the moment (April, 2016), you need to have Visual Studio 2015 Update 2 installed on your environment to emulate it on Windows Phone 10.

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

# Installs ADAL Cordova Plugin to the Project
$ ionic plugin add cordova-plugin-ms-adal

# Adding Platforms to the Project
$ ionic platform add "windows@https://aka.ms/cordova-win10"
```

**To start the emulator you need to do the following:**

1. Open the project file located in `..devtalksdemo\platforms\windows\CordovaApp.Windows10` with Visual Studio
2. Select x86 + Mobile Emulator 10.0 from the Ribbon, and press play to emulate, ;)

<img src="https://raw.githubusercontent.com/tavikukko/devtalksdemo/master/visualstudioemulating.PNG" width="450">

## All OSs with Android

Install and configure Java and Android Studio and you are good to go, but the emaulator are just too slow... :D

```bash
$ git clone https://github.com/tavikukko/devtalksdemo.git
$ cd devtalksdemo

# Installs ADAL Cordova Plugin to the Project
$ ionic plugin add cordova-plugin-ms-adal

# Adding Platforms to the Project
$ ionic platform add android

# Starts the Emulator (-lr = Live Reload, -c = Logging to the Console)
$ ionic emulate android -lr -c
# to run on device 'ionic run android -lr -c'
```

## License

```
Copyright (c) 2016, Tomi Tavela
All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice, this
  list of conditions and the following disclaimer in the documentation and/or
  other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
```
