json.array @cart_items do |cart_item|
  json.id cart_item.id
  json.item_id cart_item.menu_item_id
  json.item_name cart_item.menu_item.name
  json.item_price cart_item.menu_item.price
  json.special_instructions cart_item.special_instructions
end
