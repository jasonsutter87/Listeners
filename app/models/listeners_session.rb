class ListenersSession < ActiveRecord::Base
  validates :user_id,  uniqueness: true
  validates :listener_id,  uniqueness: true

  belongs_to :userasble, polymorphic: true
  belongs_to :user
end
