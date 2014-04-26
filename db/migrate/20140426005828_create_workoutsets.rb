class CreateWorkoutsets < ActiveRecord::Migration
  def change
    create_table :workoutsets do |t|
    	t.belongs_to :attempt
    	t.integer :reps	
      t.timestamps
    end
  end
end
