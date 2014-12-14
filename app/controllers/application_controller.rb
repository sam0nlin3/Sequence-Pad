class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def index
  	render layout: 'application'
  end

  # This makes the method available in any file in our app
  helper_method :current_user

  def authenticate
    redirect_to root_path unless current_user
  end

  def current_user
  	User.find(session[:current_user_id]) if session[:current_user_id]
  end
end
