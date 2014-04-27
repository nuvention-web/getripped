class UserController < ApplicationController
skip_before_filter :verify_authenticity_token

	def create
		user = User.new(first_name: params[:first_name], 
										last_name: params[:last_name],
										email: params[:email],
										password: params[:password]
											 )
		if user
			user.save
			result = {message: "succeeded"}
			render json: result
		else
			result = {message: "failed"}
			render json: result
		end
	end

end
