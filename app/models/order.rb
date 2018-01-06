class Order < ApplicationRecord
  belongs_to :restaurant
  has_many :cart_items
  has_many :menu_items, through: :cart_items

  validates_presence_of :customer_address,
                        :customer_first_name,
                        :customer_last_name,
                        :customer_phone
end
