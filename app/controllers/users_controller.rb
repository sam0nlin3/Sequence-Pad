class UsersController < ApplicationController

	def index
	end	

	def new
		@user = User.new
	end

	def show
		@user = User.find(params[:id])
	end

	def create
		@user = User.new(user_params)
		if @user.save 
			session[:current_user] = @user.id
			redirect_to root_path
		else
			redirect_to root_path
		end
	end
	
	def destroy
		@user = User.find(params[:id])
		@user.destroy
		session[:current_user] = nil
		redirect_to root_path
	end

	private
	def user_params
		params.require(:user).permit(:username, :password, :password_confirmation)
	end	
end	