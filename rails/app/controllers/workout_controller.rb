class WorkoutController < ApplicationController

	def index
		workouts = Workout.all
		response = workouts.pluck(:id,:name)
		render json: response
	end

	def show
		workout = Workout.find(params[:id])

		render json: workout
	end

	def show_exercise
		exercises = Exercise.where(workout_id: params[:workout_id])
		#upper body id is 1, lower body exercise_id is 2 
		render json: exercises

	end
end
