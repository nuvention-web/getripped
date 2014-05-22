class Exercise < ActiveRecord::Base
	has_many :attempts
	has_many :users, through: :attempts
	belongs_to :workout
end
