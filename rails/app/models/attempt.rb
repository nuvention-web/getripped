class Attempt < ActiveRecord::Base
	belongs_to :user
	belongs_to :exercise
	has_many :workoutsets
	before_create :total_reps

	# attr_accessible :user, :exercise, :weight, :reps1, :reps2, :reps3

	def total_reps
		total_reps = self.reps1 + self.reps2 + self.reps3 	
	end

	def self.avg_pct_reps_completed(uid,exId,numberAttempt)
		last_three_attempts = Attempt.where(:user_id => uid, :exercise_id => exId).last(numberAttempt)
		if numberAttempt == 3
			total_reps_attempt_1 = last_three_attempts[0].total_reps
			total_reps_attempt_2 = last_three_attempts[1].total_reps
			total_reps_attempt_3 = last_three_attempts[2].total_reps

			total_reps_P1 = total_reps_attempt_1.to_f / 36  
			total_reps_P2 = total_reps_attempt_2.to_f / 36
			total_reps_P3 = total_reps_attempt_3.to_f / 36

			total_reps_average = (total_reps_P1 + total_reps_P2 + total_reps_P3)/3

			p total_reps_average
		else
			total_reps_attempt_1 = last_three_attempts[0].total_reps
			total_reps_average = total_reps_attempt_1.to_f / 36  
			p total_reps_average
		end
	end

	def self.last_three_equal?(uid,exId)
		last_three_attempts = Attempt.where(:user_id => uid, :exercise_id => exId).last(3)
		if last_three_attempts[2]
			weight_used_attempt_1 = last_three_attempts[0].weight
			weight_used_attempt_2 = last_three_attempts[1].weight
			weight_used_attempt_3 = last_three_attempts[2].weight
			return true if weight_used_attempt_1 == weight_used_attempt_2 && weight_used_attempt_1== weight_used_attempt_3
		else return false
		end
	end

	def self.last_two_not_equal?(uid,exId)
		last_two_attempts = Attempt.where(:user_id => uid, :exercise_id => exId).last(2)
		weight_used_attempt_1 = last_two_attempts[0].weight
		weight_used_attempt_2 = last_two_attempts[1].weight
		return true if weight_used_attempt_1 != weight_used_attempt_2 

	end

	def self.calculate_weight(uid,exId)
		last_weight_used = Attempt.where(:user_id => uid, :exercise_id => exId).last.weight


		if (Attempt.where(:user_id => uid, :exercise_id => exId).count == 1 || Attempt.last_two_not_equal?(uid,exId))
			last_attempt_avg = Attempt.avg_pct_reps_completed(uid,exId,1)
			if last_attempt_avg < 0.5
				p last_attempt_avg
				p last_attempt_avg
				p last_attempt_avg
				p last_attempt_avg
				Attempt.where(:user_id => uid, :exercise_id => exId).last.update_attributes(:next_weight => last_weight_used - 5)
			else
				Attempt.where(:user_id => uid, :exercise_id => exId).last.update_attributes(:next_weight => last_weight_used)	
			end
		elsif Attempt.last_three_equal?(uid,exId)
			avg_total_reps = Attempt.avg_pct_reps_completed(uid,exId,3)
			if  avg_total_reps > 0.8
				Attempt.where(:user_id => uid, :exercise_id => exId).last.update_attributes(:next_weight => last_weight_used + 5)
			elsif avg_total_reps < 0.5
				Attempt.where(:user_id => uid, :exercise_id => exId).last.update_attributes(:next_weight => last_weight_used - 5) 
			end
		else
			Attempt.where(:user_id => uid, :exercise_id => exId).last.update_attributes(:next_weight => last_weight_used)	
		end
	end

end

#add column to exercise for rec_reps in db