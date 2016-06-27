class Listeners < ActiveRecord::Base
  validates :listenee_id,  uniqueness: true
  validates :listener_id,  uniqueness: true

  belongs_to :listenee_id, class_name: 'User', foreign_key: :listenee_id
  belongs_to :listener_id, class_name: 'User', foreign_key: :listener_id
end
