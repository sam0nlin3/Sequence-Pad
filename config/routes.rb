Rails.application.routes.draw do

	root 'application#index' 

	resource :cell, only: [:index]

  post '/new_user' => 'users#create'
  post '/users/:id/songs' => 'users#save_song'
  # get '/users/:id/songs/:id' => 'users#saved_song'
  get '/get_current_user' => 'application#get_current_user'
    
  post '/sessions' => 'sessions#create'

  delete '/songs/:id' => 'users#delete_song'

  get '/logout' => 'sessions#destroy'

end