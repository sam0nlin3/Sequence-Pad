class UsersController < ApplicationController

	def index
		redirect ('/')
	end	

	def show
		@user = User.find(params[:id])
	end

	def create
		redirect('/')
	end
	
	def destroy
		redirect('/')
	end

	def user_params
		params.require(:user).permit(:name)
	end	
end	