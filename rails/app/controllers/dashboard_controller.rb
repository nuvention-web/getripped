class DashboardController < ApplicationController
	def index
	end

	def show
		avgWeight = []
		avgWeight = Attempt.test(params[:id])
		response = {
					weight1: avgWeight[0],
					weight2: avgWeight[1]
				   }
		render json: avgWeight 
	end
end
