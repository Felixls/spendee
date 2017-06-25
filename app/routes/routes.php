<?php
  use HTTP\Middleware\AuthMiddleware;
  use \HTTP\Middleware\Guest;

  // Vissible by guest users
  $app->group('',function(){
      require 'home/home.php';
  })->add(new Guest($container));

  //Vissible by logged in users
  $app->group('',function() use($app){
    //expenses
    $app->get('/expenses[/{year}[/{month}[/{day}]]]',\HTTP\Controllers\Home\HomeController::class.':expensesView')->setName('expenses');
    require 'main/main.php';
  })->add(new AuthMiddleware($container));

  require 'auth/auth.php';
  #require 'api/api.php';
  #require 'main/budget/index.php';
  require 'errors/errors.php';
 ?>
