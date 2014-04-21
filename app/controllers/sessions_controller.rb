class SessionsController < ApplicationController

  def new
    @user = User.new
  end

  def create
    user = User.find_by_email(params[:user][:email])
    if user && user.authenticate(params[:user][:password])
      flash[:login] = "Welcome"
      session[:id] = user.id  
      redirect_to :controller => "exercise_controller", :action =>"show", :id => 1
    else
      flash[:error] = "Sign in failed, please try again."
      @user = User.new
      render template: 'sessions/new'
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
