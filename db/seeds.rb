# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
require 'csv'

images = [
"dumbellpress.jpg"
]

weights = [20, 30, 40, 50, 60]

CSV.foreach("workout.csv", :headers => true, :header_converters => :symbol) do |row|
		Exercise.create(
			:name => row[:name],
			:reps => row[:reps],
			:sets => row[:sets],
			:rest => row[:rest],
			:description => row[:description],
			:image => images.slice!(0)
		)
end

10.times do 
	Attempt.create(
		user: User.first,
		exercise: Exercise.all.sample,
		weight: weights.sample,
		reps1: rand(8) + 1,
		reps2: rand(8) + 1,
		reps3: rand(8) + 1)
end
