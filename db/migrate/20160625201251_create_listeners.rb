class CreateListeners < ActiveRecord::Migration
  def change
    create_table :listeners do |t|
      t.integer :listenee_id
      t.integer :listener_id
    end
  end
end
