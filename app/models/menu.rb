class Menu < ApplicationRecord
  belongs_to :restaurant
  has_many :menu_items

  validates_presence_of :type
end
