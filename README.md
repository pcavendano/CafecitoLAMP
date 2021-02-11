This project creates an independent react frontend for client app and admin app which are deserved by a laravel API on top a nginx server

its important to check the configuration file .env of laravel ad change 127.0.0.1 to mysq
git clone https://github.com/pcavendano/cafecito-portfolio.git
cp env-exemple .env
inside laravel -> .env -> 
APP_URL: laravel.test
key is generated by laravel when the oroject is created
DB_HOST -> MYSQL
DB_DATABASE -> default or the one youy create with create .sql exemple
DB_USERNAME AND PASSWORD -> default secret and root root but dont forget tocreate new ones

inside MYSQL folder. 
cp create.sql.example create.sql
then -> change DB name and user
and remove comments

inside nginx -> sites
cp laravel.conf.example laravel.conf

server_name laravel.test;
    root /var/www/laravel-server/public/;

3 - Run your containers:

inside nginx -> dockerfile -> port=4000
docker-compose up -d nginx phpmyadmin react workspace 

then

docker-compose exec workspace bash
 then
 composer create-project laravel/laravel="7.*" ./laravel-server

 then 
 inside .env ->
 change to DB_HOST=laravel.test
 APP_URL=http://laravel.test

LOG_CHANNEL=stack
LOG_LEVEL=debug

DB_CONNECTION=mysql
DB_HOST=mysql
DB_PORT=3306
DB_DATABASE=cafecito
DB_USERNAME=pcavendano
DB_PASSWORD=050390

-------------------
you need to change the external port inside docker-compose.yml from 3000 to 4000 if you plan to use the workspace container at the same time like this
### react #####################################################
    react:
      build:
        context: ./react
      ports:
        - "4000:3000" 
then to run react

docker-compose exec react bash
npm run install
npm run start

----------------------
once everything is configured -> 
git flow init 

move to ../client ->
npx create-react-app client --template typescript

move to ../containers  and run ->
docker-compose up - d workspace phpmyadmin nginx

Debug php inside workspace 

what wer need to do is use deployement configuration
settigns -> deployement -> create  a new deployement of type sftp
SSH configuration -> ... click +
host -> whatever name you used inside nginx sites like laravel.test
WORKSPACE_SSH_PORT=2222 from .env
Authentication type is key pair -> look for the private key inside workspace folder look for insecure_id_rsa -> dont forget to generate a neww key, the one provided should only be used in a local developpement but never in production
user is root
root path -> same as .env /var/www
web server URL: http://laravel.test
mappings -> 
Local Path /Users/pedrq/projects/portfolio-cafecito/laravel-server/public
Deployement path /var/www/portfolio-cafecito/laravel-server/public
the name of this deployement should be the same as serverName inside docker folder:laradock

ten apply and go to mappings
the local path should point to the entry point of our app 
deployement path on server -> /var/www
then test connection 
then go to settings -> language & frameworks -> PHP -> CLI interpreter -> ... -> + -> Choose SSH -> SSH configuration choose root@laravel.test
ADDITIONAL -> CONFIGURATION OPTIONS -> CLICK THE FOLDER -> ADD 
xdebug.remote_host -> host.docker.internal  ok ok ok

Initialize your project 

cd laravel new laravel-laradock-phpstorm
git init
git add .
git  commit -m "first commit"
git remote add origin git@github.com:LarryEitel/laravel-laradock-phpstorm.git
git push -u origin master

# /c/_dk/laravel-laradock-phpstorm
git submodule add https://github.com/LaraDock/laradock.git
cd laradock

Since we will be hacking a bit on this, need to preserve refactoring with parent repo. So I will remote .git.
rm -rf .git*


Deployement
https://github.com/LarryEitel/laravel-laradock-phpstorm

inside workspace 
npx create-react-app ../client --template typescript