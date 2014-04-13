# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
require 'csv'

CSV.foreach("workout.csv", :headers => true, :header_converters => :symbol) do |row|
		Exercise.create(
			:name => row[:name],
			:reps => row[:reps],
			:sets => row[:sets],
			:rest => row[:rest]
		)
end

