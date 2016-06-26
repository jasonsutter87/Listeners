class User < ActiveRecord::Base
  validates :first_name, presence: true,
  validates :first_name, presence: true,
  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :password, presence: true

  has_many :locations
end
