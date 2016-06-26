class ListenersSession < ActiveRecord::Base
  validates :user_id,  uniqueness: true
  validates :listener_id,  uniqueness: true

  has_many :subordinates, class_name: "ListenerSession",
                          foreign_key: "listener_id"
 
  belongs_to :listener, class_name: "ListenerSession"
end
