class CreateMenuItems < ActiveRecord::Migration[5.1]
  def change
    create_table :menu_items do |t|
      t.string :name, null: false, default: ''
      t.float :price, null: false, default: 0.0
      t.text :description, null: false, default: ''
      t.boolean :spicy, default: false
      t.string :item_type, null: false, default: ''

      t.timestamps
    end
  end
end
