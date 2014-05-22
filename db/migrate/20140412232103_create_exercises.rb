class CreateExercises < ActiveRecord::Migration
  def change
    create_table :exercises do |t|
    	t.string :name
    	t.text :description, :limit => nil
    	t.string :image
    	t.integer :reps
    	t.integer :sets
      t.integer :rest
    	t.integer :weight
      t.timestamps
    end
  end
end
