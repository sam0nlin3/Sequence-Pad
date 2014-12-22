class UsersController < ApplicationController

	def create
		@user = User.new(user_params)
		if @user.save 
			session[:current_user] = @user.id
			render json: @user
		else
			render json: {error: "username or password must match."}
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