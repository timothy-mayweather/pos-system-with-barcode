# Overview
> This repository has two branches namely; main and production branches
>
> The production branch is the one whose javascript files have already been processed

# To use the product

# Step 1
> You can choose to either use already built js files or rebuild your own
### To use the already built js files after cloning, use the command
```
git checkout production
```
### Or you can build the javascript files locally, using the commands below
<p>Note that you should have python2 installed</p>

```
npm install
npm run production
```

# Step2
### Get all composer dependencies
 ```
 composer install --optimize-autoloader --no-dev --ignore-platform-reqs
 ```
 
 ### Note1: if you are using sqlite as your database, first use the command below to create a database file
```
php artisan make:sqlite
```
 
 ### Note2: If you are using other kinds of database, please first ensure they are created.

 <br/><br/>

 ## To setup this app
 >First generate .env file by copying .env.example and change the configurations as required.
 <br>Make sure database credentials are added to the .env file (For sqlite, just make DB_CONNECTION=sqlite and delete other db credentials)
 <br>Then, type the commands below
 
 ```
php artisan key:generate
```

## To start using the web app, use the commands below to finish the setup
```
php artisan migrate:fresh --force --seed
php artisan migrate --force --path=vendor/laravel/passport/database/migrations
php artisan passport:install --force
php artisan storage:link
php artisan ensure:install
```
## Finally, to deploy on the server, do all the above and cache the files as stated below for faster processing speeds
```
php artisan config:clear
php artisan config:cache
php artisan route:cache
php artisan view:cache
