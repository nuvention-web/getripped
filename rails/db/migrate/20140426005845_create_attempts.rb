class CreateAttempts < ActiveRecord::Migration
  def change
    create_table :attempts do |t|
    	t.belongs_to :user
    	t.belongs_to :exercise
    	t.integer :weight
    	t.integer :reps1
    	t.integer :reps2
    	t.integer :reps3
      t.timestamps
    end
  end
end
