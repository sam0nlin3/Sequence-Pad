class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def index
  	render layout: 'application', text: ''
  end

  # This makes the method available in any file in our app
  helper_method :current_user

  # If the current user is not logged in, go to the login page
  def authenticate
    redirect_to root_path unless current_user
  end

  # Returns the user currently logged in
  def current_user
  	User.find(session[:current_user_id]) if session[:current_user_id]
  end

end
