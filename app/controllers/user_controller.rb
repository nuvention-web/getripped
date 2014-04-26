class UserController < ApplicationController

	def create
		user = User.new(first_name: params[:first_name], 
										last_name: params[:last_name],
										email: params[:email],
										password: params[:password]
											 )
		if user
			user.save
			result = {message: "creation success"}
			render json: result
		else
			result = {message: "creation failure"}
			render json: result
		end
	end

end
