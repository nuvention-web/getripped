class AddNextWeightToAttempts < ActiveRecord::Migration
  def change
    add_column :attempts, :next_weight, :integer
  end
end
