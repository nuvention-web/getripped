class UserController < ApplicationController

	def create
		user = User.new(first_name: params[:first_name], 
											 last_name: params[:last_name],
											 email: params[:email],
											 password: params[:password]
											 )
		if user
			user.save
		else
			error = {message: "creation failure"}
		end
	end

end
