class SessionsController < ApplicationController

  def new
  	@user = User.new
  	if current_user
  		redirect_to user_path(current_user)
  	else 
  		render :new
    end
  end

  def create
    @user = User.find_by(username: params[:username])
    if user && user.authenticate(params[:password])
      session[:current_user_id] = user.id
      redirect_to root_path
      puts "XXXXXXXXXXXXXXX Created"
    else
      redirect_to root_path
      puts "XXXXXXXXXXXXXXXXXX Did not log in"
    end
  end

  def destroy
    session[:current_user_id] = nil
    redirect_to root_path
  end

end

