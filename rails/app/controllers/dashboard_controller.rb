class DashboardController < ApplicationController
	def index
	end

	def show
		avgFirstWeight = []
		avgLasttWeight = []
		avgFirstWeight = Attempt.getFirst(params[:id])
		avgLastWeight = Attempt.getLast(params[:id])
		user = User.find(params[:id]).first_name
		response = {
					username: user,
					weight1: avgFirstWeight[0],
					weight2: avgFirstWeight[1],
					weight3: avgLastWeight[0],
					weight4: avgLastWeight[1],	
				   }
		render json: response 
	end
end
