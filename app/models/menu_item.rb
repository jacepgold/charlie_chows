class MenuItem < ApplicationRecord
  has_many :cart_items
  has_many :orders, through: :cart_items

  validates_presence_of :name, :price, :description, :item_type
end
