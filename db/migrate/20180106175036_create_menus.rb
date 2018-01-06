class CreateMenus < ActiveRecord::Migration[5.1]
  def change
    create_table :menus do |t|
      t.string :type, null: false, default: ''
      t.belongs_to :restaurant, foreign_key: true

      t.timestamps
    end
  end
end
