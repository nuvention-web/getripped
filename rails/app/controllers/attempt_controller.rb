class AttemptController < ApplicationController
skip_before_filter :verify_authenticity_token

	def create
		uid = params[:user_id]
		eid = params[:id]
		attempt = Attempt.new(
					  user_id: params[:user_id], 
			          exercise_id: params[:id],
			          weight: params[:weight],
			          reps1: params[:reps1],
			          reps2: params[:reps2],
			          reps3: params[:reps3])
		if attempt
			attempt.save
			Attempt.calculate_weight(uid,eid)
			result = {message: "succeeded"}
			render json: result
		else
			result = {message: "failed"}
			render json: result
		end
	end

	def last
		password = params[:password]
		user = User.find(params[:user_id])
		# last_attempt = user.exercises.find(params[:exercise_id]).attempts.last
		last_attempt = user.attempts.where(exercise_id: params[:exercise_id]).last

		if last_attempt && password == "gotraingo"
			response = {weight: last_attempt.weight,
									reps1: last_attempt.reps1,
									reps2: last_attempt.reps2,
									reps3: last_attempt.reps3,
									next_weight: last_attempt.next_weight}
			render json: response
		else
			response = {message: "No attempts."}
			render json: response
		end
	end
end
