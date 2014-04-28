class SessionController < ApplicationController
skip_before_filter :verify_authenticity_token

  def new
    @user = User.new
  end


  def create
    user = User.find_by_email(params[:email])
    if user && user.authenticate(params[:password])
      flash[:login] = "Welcome"
      session[:id] = user.id  
      success_response = {
        message: "succeeded"
        user_id: user.id
      }
      render json: success_response 
      # redirect_to :controller => "exercise_controller", :action =>"show", :id => 1
    else
      flash[:error] = "Sign in failed, please try again."
      @user = User.new
       success_response = {
          message: "failed"       
      }
      render json: success_response
      # render template: 'sessions/new'
    end
  end

  def destroy
    session.clear
    flash[:logout] = "Logout Successful"
    redirect_to root_path
  end

  def signout
    session.clear
    flash[:logout] = "Logout Successful"
    redirect_to root_path
  end
end
