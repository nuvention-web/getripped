class Attempt < ActiveRecord::Base
	belongs_to :user
	belongs_to :exercise
	has_many :workoutsets
	before_create :total_reps

	# attr_accessible :user, :exercise, :weight, :reps1, :reps2, :reps3

	def total_reps
		total_reps = self.reps1 + self.reps2 + self.reps3 	
	end

	def self.avg_pct_reps_completed
		last_three_attempts = Attempt.last(3)
		total_reps_attempt_1 = last_three_attempts[0].total_reps
		total_reps_attempt_2 = last_three_attempts[1].total_reps
		total_reps_attempt_3 = last_three_attempts[2].total_reps

		total_reps_P1 = total_reps_attempt_1.to_f / 36  
		total_reps_P2 = total_reps_attempt_2.to_f / 36
		total_reps_P3 = total_reps_attempt_3.to_f / 36

		total_reps_average = (total_reps_P1 + total_reps_P2 + total_reps_P3)/3
	end

	def last_three_equal?
		last_three_attempts = Attempt.last(3)
		weight_used_attempt_1 = last_three_attempts[0].weight
		weight_used_attempt_2 = last_three_attempts[1].weight
		weight_used_attempt_3 = last_three_attempts[2].weight

		return true if weight_used_attempt_1 == weight_used_attempt_2 && weight_used_attempt_1== weight_used_attempt_3

	end

	def calculate_weight
		if last_three_equal?
			if Attempt.avg_pct_reps_completed > 0.8
				self.next_weight = Attempt.last.weight + 5
			elsif Attempt.avg_pct_reps_completed < 0.5
				self.next_weight = Attempt.last.weight - 5 
			end
		end
	end

end

#add column to exercise for rec_reps in db