class CreateCartItems < ActiveRecord::Migration[5.1]
  def change
    create_table :cart_items do |t|
      t.jsonb :substitutions
      t.belongs_to :menu_item, foreign_key: true
      t.belongs_to :order, foreign_key: true

      t.timestamps
    end
  end
end
