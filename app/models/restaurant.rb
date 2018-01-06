class Restaurant < ApplicationRecord
  has_many :menus
  has_many :orders

  validates_presence_of :name, :description, :address
end
