Rails.application.routes.draw do


	root 'application#index'

	resource :cell, only: [:index]

  resource :user, only: [:show, :create, :destroy]

end
