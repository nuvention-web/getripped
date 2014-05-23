# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
require 'csv'

# images = ["dumbellpress.jpg"]

# weights = [20, 30, 40, 50, 60]

upper_body = Workout.create(name: "Upper Body")
lower_body = Workout.create(name: "Lower Body")

CSV.foreach("workout.csv", :headers => true, :header_converters => :symbol) do |row|
		Exercise.all.each do |exercise|
			exercise.update_attributes(image: "https://s3.amazonaws.com/swoletrain/#{row[:name].gsub(/ /,'+')}"+".JPG")	
			if row[:workout] == "Upper Body"
				exercise.update_attributes(workout_id: upper_body.id)
			elsif row[:workout] == "Lower Body"
				exercise.update_attributes(workout_id: lower_body.id)
			end
		end
end	

# CSV.foreach("workout.csv", :headers => true, :header_converters => :symbol) do |row|
# 		if row[:workout] == "Upper Body"
# 			exercise = Exercise.create(
# 				:name => row[:name],
# 				:reps => row[:reps],
# 				:sets => row[:sets],
# 				:rest => row[:rest],
# 				:description => row[:description],
# 				:image => "https://s3.amazonaws.com/swoletrain/#{row[:name].gsub(/ /,'+')}"+".JPG")
# 			exercise.update_attributes(workout_id: upper_body.id)
# 			# Exercise.find_by_name(row[:name]).update_attributes(workout_id: upper_body.id)
# 			# Exercise.find_by_name(row[:name]).update_attributes(:image => "https://s3.amazonaws.com/swoletrain/#{row[:name].gsub(/ /,'+')}"+".JPG")
# 		else
# 			exercise = Exercise.create(
# 				:name => row[:name],
# 				:reps => row[:reps],
# 				:sets => row[:sets],
# 				:rest => row[:rest],
# 				:description => row[:description],
# 				:image => "https://s3.amazonaws.com/swoletrain/#{row[:name].gsub(/ /,'+')}"+".JPG")
# 			exercise.update_attributes(workout_id: lower_body.id)
# 		end
# end


# 10.times do 
# 	Attempt.create(
# 		user: User.first,
# 		exercise: Exercise.all.sample,
# 		weight: weights.sample,
# 		reps1: rand(8) + 1,
# 		reps2: rand(8) + 1,
# 		reps3: rand(8) + 1)
# end
