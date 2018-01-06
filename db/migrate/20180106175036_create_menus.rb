class CreateMenus < ActiveRecord::Migration[5.1]
  def change
    create_table :menus do |t|
      t.string :menu_type, null: false, default: ''

      t.timestamps
    end
  end
end
