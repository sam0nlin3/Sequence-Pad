class SessionsController < ApplicationController

  def new
  	@user = User.new
  	if current_user 
  		redirect_to user_path(current_user)
  	else 
  		render :new
      # need to fix this to render errors
    end
  end

  def create
    @user = User.find_by(username: params[:username])
      if @user.authenticate(params[:password])
      session[:current_user] = @user.id
      redirect_to root_path
    else
      redirect_to root_path
    end
  end

  def destroy
    session[:current_user] = nil
    current_user = nil
    redirect_to root_path
  end

end

