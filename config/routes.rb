Rails.application.routes.draw do

	root 'application#index' 

	# this is to test the production version
	get '/test' => 'application#index'

	resource :cell, only: [:index]
  resource :user, only: [:destroy]

  post '/new_user' => 'users#create'

  get '/get_current_user' => 'application#get_current_user'
    
  post '/sessions' => 'sessions#create'
  
  get '/logout' => 'sessions#destroy'

end
