class MenuItem < ApplicationRecord
  belongs_to :menu
  has_many :cart_items
  has_many :orders, through: :cart_items
end
