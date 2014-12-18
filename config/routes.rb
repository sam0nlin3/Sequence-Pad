Rails.application.routes.draw do

	root 'application#index'

	resource :cell, only: [:index]
  resource :user, only: [:new, :create, :show, :destroy]

  get '/login' => 'sessions#new'
  post '/sessions' => 'sessions#create'
  get '/logout' => 'sessions#destroy'

end
