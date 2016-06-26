class CreateListenerSession < ActiveRecord::Migration
  def change
    create_table :listeners_session do |t|
    t.integer :user_id
    t.integer :listener_id
    t.timestamps
    end
  end
end
