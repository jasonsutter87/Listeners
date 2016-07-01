class CreateLocations < ActiveRecord::Migration
  def change
    create_table :locations do |t|
      t.integer :op
      t.string :address
      t.float :lat
      t.float :long
      t.text :description
      t.timestamps
    end
  end
end
