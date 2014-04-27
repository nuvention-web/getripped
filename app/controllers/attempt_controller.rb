class AttemptController < ApplicationController
skip_before_filter :verify_authenticity_token

	def create
		attempt = Attempt.new(user_id: params[:user_id], 
			          exercise_id: params[:exercise_id],
			          weight: params[:weight],
			          reps1: params[:reps1],
			          reps2: params[:reps2],
			          reps3: params[:reps3])
		if attempt
			attempt.save
			result = {message: "succeeded"}
			render json: result
		else
			result = {message: "failed"}
			render json: result
		end
	end

	def last
		exercise = Exercise.find(params[:id])
		last_attempt = exercise.attempts.last
		if last_attempt
			response = {weight: last_attempt.weight,
									reps1: last_attempt.reps1,
									reps2: last_attempt.reps2,
									reps3: last_attempt.reps3}
			render json: response
		else
			response = {message: "No attempts."}
			render json: response
		end
	end
end
