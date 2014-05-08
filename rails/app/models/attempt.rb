class Attempt < ActiveRecord::Base
	belongs_to :user
	belongs_to :exercise
	has_many :workoutsets
	before_create :total_reps

	attr_accessor :user, :exercise, :weight, :reps1, :reps2, :reps3

	def total_reps
		total_reps = reps1 + rep2 + rep3 	
	end

	def calculate_weight(total_reps_P1, total_reps_P2, total_reps_P3)
		weighted average = total_reps_P1/ + total_reps_P2 + total_reps_P3
	end

end
