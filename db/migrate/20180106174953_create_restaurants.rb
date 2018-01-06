class CreateRestaurants < ActiveRecord::Migration[5.1]
  def change
    create_table :restaurants do |t|
      t.string :name, null: false, default: ''
      t.string :address, null: false, default: ''
      t.text :description, null: false, default: ''

      t.timestamps
    end
  end
end
