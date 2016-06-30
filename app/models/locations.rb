class Locations < ActiveRecord::Base
  validates :lat, presence: true
  validates :long, presence: true
  validates :description, presence: true
end
