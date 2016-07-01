
class Locations < ActiveRecord::Base
  validates :address, presence: true
end
