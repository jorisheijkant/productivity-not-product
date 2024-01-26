# Productivity not product
A simple web site blocker for Firefox that blocks websites at scheduled times. It should allow you to work in peace without the temptation of news websites, social media or other distractions.

## Usage / installation
As for now, this is for the a bit more technical people only, since you have to manually set your schedule and blocked web sites. Later I might add a GUI for this and release this as an official add-on. 

1. Clone this repo.
2. Add the sites you want to block to the `blocked-sites.json` file.
3. Set your schedule in the `schedule.json` file.
4. Open Firefox and navigate to about:debugging.
5. Click on "This Firefox" in the left sidebar.
6. Click on "Load Temporary Add-on" and select the manifest.json file from your extension directory. 