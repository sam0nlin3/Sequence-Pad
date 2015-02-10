class UsersController < ApplicationController

	def create
		@user = User.new(user_params)
		if @user.save 
			session[:current_user] = @user.id
			render json: { current_user: @user }
		else
			current_user = nil
		end 
	end

	def save_song
		@song = Song.new(song_params)
		if @song.save
			render json: @song
		end	
	end	

	def delete_song
		song = Song.find(params[:id])
		@current_user = User.find(session[:current_user])
		if song.destroy
			render json: @current_user
		else
			render json: @current_user	
		end		
	end	

	private

	def user_params
		params.require(:user).permit(:username, :songs, :password, :password_confirmation)
	end	

	def song_params
		params.require(:song).permit(:title, :song_string, :user_id)
	end	

end	