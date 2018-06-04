# Sodium Monitoring Webapp
This project is the user interface for the Sodium Monitoring IP346b initiative. It is an angular front end that interfaces with Java Rest services. 

## This project requires the following. 

```* Git
   * NodeJS
   * NPM (which is included in the nodejs package)
```

## Deploying this project requires
```* Apache2```
## Installing NodeJS 
```
*Note:  If you are installing on a Debian or Ubuntu based distrobution you will need to update your repositories.
Enter:

curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -

Once you are pointing to v10.x repos enter:

sudo apt-get install nodejs
```
## Git project
```
git clone https://github.com/hres/sodium-monitoring-webapp.git
```

## Install package dependencies

Navigate to project root and run the following.
```
npm install
```

## Build Sodium Monitoring Webapp

Run `npm run-script build` to build the project. The build artifacts will be stored in the dist/ directory. Move the `contents` of this folder into your Apache server so that it is available at `/var/www/html/`