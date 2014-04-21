class ExerciseController < ApplicationController
	skip_before_filter :verify_authenticity_token
  before_filter :cors_preflight_check
  after_filter :cors_set_access_control_headers

	def index		
		@exercises = Exercise.all

		render json: @exercises
	end

	def show
		@exercise = Exercise.find(params[:id])

		render json: @exercise
	end

end
