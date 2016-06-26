class CreateListenerSession < ActiveRecord::Migration
  def change
    create_table :listener_session do |t|
    t.integer :user_id
    t.integer :listener_id
    t.references :listener, index: true

    t.timestamps
    end
  end
end
