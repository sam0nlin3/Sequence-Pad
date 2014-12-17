class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  helper_method :current_user
  
  def index
    @cells = Cell.all
    @user = User.new(params[:user_params])
    response = {cells: @cells }
    respond_to do |format|      
      format.json { render json: response }
      format.html { render layout: 'application', text: '' }
    end  
  end

  def authenticate
    redirect_to root_path unless current_user
  end

  def current_user
  	User.find(session[:current_user_id]) if session[:current_user_id]
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :password_confirmation)
  end 

end
