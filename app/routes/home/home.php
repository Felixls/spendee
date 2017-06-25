<?php
  use \HTTP\Controllers\Home\HomeController;

  $this->get('/',HomeController::class)->setName('home');
  $this->get('/about',HomeController::class.':aboutView')->setName('about');
  $this->get('/contact',HomeController::class.':contactView')->setName('contact');
  $this->get('/help',HomeController::class.':helpView')->setName('help');
  $this->post('/contact',HomeController::class.':contact')->setName('post.contact');

 ?>
