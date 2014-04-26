class AttemptController < ApplicationController

	def create
		Attempt.create(user_id: params[:user_id], 
			             exercise_id: params[:exercise_id],
			             weight: params[:weight],
			             rep1: params[:rep1],
			             rep2: params[:rep2],
			             rep3: params[:rep3])
	end
end
