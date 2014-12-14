class SessionsController < ApplicationController
  
  # Allows a user to create an account, if they are not already logged in
  def new
  	@user = User.new
  	if current_user
  		redirect_to user_path(current_user)
  	else 
  		redirect_to root_path
  end

  # If a user logs in, create a new session 
  def create
    user = User.find_by(username: params[:username])
    if user && user.authenticate(params[:password])
      session[:current_user_id] = user.id
      redirect_to root_path
    else
      redirect_to root_path
    end
  end

  # If a user logs out, their session is destroyed
  def destroy
    session[:current_user_id] = nil
    redirect_to root_path
  end
end
