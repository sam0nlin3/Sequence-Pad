class SessionsController < ApplicationController

  def create
    @user = User.find_by(username: params[:username])
    if @user.authenticate(params[:password])
      session[:current_user] = @user.id  
      render json: @user
    else
      render json: {error: "Username or password is incorrect."}
    end  
  end

  def destroy
    session[:current_user] = nil
    current_user = nil
    @current_user = User.find(session[:current_user]) if session[:current_user]
    render json: @current_user 
  end

end

