class MenuItem < ApplicationRecord
  has_many :cart_items
  has_many :orders, through: :cart_items
end
