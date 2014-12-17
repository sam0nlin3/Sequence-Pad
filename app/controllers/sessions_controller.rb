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
    else
      redirect_to root_path
    end
  end

  def destroy
    binding.pry
    session[:current_user_id] = nil
    current_user = nil
    redirect_to root_path
  end

end

