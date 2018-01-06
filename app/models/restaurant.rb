class Restaurant < ApplicationRecord
  validates_presence_of :name, :description, :address
end
