class CreateOrders < ActiveRecord::Migration[5.1]
  def change
    create_table :orders do |t|
      t.boolean :delivery, default: false
      t.string :customer_first_name, null: false, default: ''
      t.string :customer_last_name, null: false, default: ''
      t.string :customer_address, null: false, default: ''
      t.string :customer_phone, null: false, default: ''
      t.belongs_to :restaurant, foreign_key: true

      t.timestamps
    end
  end
end
