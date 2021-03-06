# Spendee
Spendee expense tracking web application

Spendee is a personal expense tracking app that helps you to make
intelligent choices about how to divert your money for maximum benefit.
The Web app includes a HTML,CSS, Bootstrap, Javascript and Jquery frontend
and PHP and MySQL with Json REST API for webservices at the backend.

# Set Up

# install docker
```
 wget -qO- https://get.docker.com/ | sh

 ```

 # Edit configs

 ```
 cp app/config/config.php.dist app/config/config.php

 ```
 * Edit your database settings

 ```
 cp docker/config.conf.dist docker config.conf
 ```
 * edit your ServerAlias to match your domain name

# Run app
```
docker-compose up -d
```

visit http://localhost:8006

# App Console

```
docker-compose exec web bash

php console.php
```

Access Models, Services and Helpers through the application container

```
$container
```

#Debugging
interactive session

```
eval(\Psy\sh());
```

dump variable

```
dump(var)
```

# Migrations commands

## create migration

`php vendor/bin/phinx  create InitialSetUp -c app/config/config-phinix.php`


## migrate
linux
`php vendor/bin/phinx migrate -c app/config/config-phinix.php`
windows
`cd vendor\bin`
`phinx.bat migrate -c  ../../app/config/config-phinix.php'
## read more

https://siipo.la/blog/how-to-use-eloquent-orm-migrations-outside-laravel

## Default user

* username `admin`
* password `admin123`
