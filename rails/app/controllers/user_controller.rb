class UserController < ApplicationController
skip_before_filter :verify_authenticity_token

	def create
		p params[:email]
		user = User.find_by_email(params[:email])
		if user
			result = {message: "failed"}
			render json: result
		else
			user = User.create!(first_name: params[:first_name], 
										last_name: params[:last_name],
										email: params[:email],
										password: params[:password],
										password_confirmation: params[:password_confirmation]
											 )
			if user
				user.save
					result = {message: "succeeded"}
					render json: result
			end
		end
	end

end
