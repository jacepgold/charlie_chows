class Menu < ApplicationRecord
  has_many :menu_items

  validates_presence_of :menu_type
end
