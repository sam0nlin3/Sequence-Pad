Rails.application.routes.draw do

	root 'application#index' 

	resource :cell, only: [:index]

  post '/new_user' => 'users#create'
  post '/users/:id/songs' => 'users#save_song'
  get '/get_current_user' => 'application#get_current_user'
    
  post '/sessions' => 'sessions#create'

  
  get '/logout' => 'sessions#destroy'

end