Restaurant.create(
  name: "Charlie Chow's",
  address: '255 East 400 South SLC UT',
  description: "Charlie Chow's Dragon Grill has always been known for its fine Asian cuisine served in an attractive, contemporary setting in the heart of downtown Salt Lake City. Be sure to sample our fresh, homemade Dim Sum (appetizer) in addition to the delicious entrees made to order and elegantly served. And don't forget to try the Dragon Grill, a tasty new way to	create your own meal and sample a varitey of Asian flavors. Because all of our entrees are made fresh to order, we use no MSG in our cooking. Plus, our traditon of friendly service and great food have made Charlie Chow's Dragon Grill a long time Salt Lake favorite."
)

menus = ['Appetizers', 'Entrees', 'Beverages', 'Desserts']

# menus.each_with_index do |menu, i|
#   order = Order.create(
#     customer_address: Faker::Address.street_address,
#     customer_first_name: Faker::Name.first_name,
#     customer_last_name: Faker::Name.last_name,
#     customer_phone: Faker::PhoneNumber.phone_number,
#   )
#
#   5.times do
#     item = MenuItem.create(
#       name: Faker::Food.dish,
#       price: 3.5,
#       description: Faker::Lorem.sentence,
#       spicy: false,
#       item_type: menus[i]
#     )
#     order.cart_items.create(menu_item_id: item.id)
#   end
#
#
# end

# item = MenuItem.create(
#       name: "Lemon Sesame Shrimp",
#       price: 15.95,
#       description: "Butterflied shrimp in a light ginger batter, and served with a sweet lemon sauce."
#       spicy: false,
#       item_type: menus[i]
#     )
#   order.cart_items.create(menu_item_id: item.id)
# end
#
# item = MenuItem.create(
#       name: "Pepper Shrimp/Scallops",
#       price: 12.95,
#       description: "Peppery onions and peppers stir-fired in an oyster sauce with ground peppercorns.",
#       spicy: false,
#       item_type: menus[i]
#     )
#   order.cart_items.create(menu_item_id: item.id)
# end
#
# item = MenuItem.create(
#       name: "Singapore Honey Shrimp",
#       price: 15.95,
#       description: "Honey glazed deep-fried shrimp with pineapple, red and green peppers and onion.",
#       spicy: false,
#       item_type: menus[i]
#     )
#   order.cart_items.create(menu_item_id: item.id)
# end
#
# item = MenuItem.create(
#       name: "Kung Pao Shrimp/Scallions",
#       price: 15.95,
#       description: "Spicy stir-fried dish with mixed vegetables, topped with whole roasted peanuts"
#       spicy: false,
#       item_type: menus[i]
#     )
#   order.cart_items.create(menu_item_id: item.id)
# end
#
# item = MenuItem.create(
#       name: "Honey Glazed Walnut Shrimp",
#       price: 15.95,
#       description: "Our Chef's special dish. Shrimp Prepared in an exquisite sauce worthy of an emperor."
#       spicy: false,
#       item_type: menus[i]
#     )
#   order.cart_items.create(menu_item_id: item.id)
# end
#
# item = MenuItem.create(
#       name: "Coconut Shrimp",
#       price: 12.95,
#       description: "Butterflied shrimp in a light ginger batter, and served with a sweet lemon sauce."
#       spicy: false,
#       item_type: menus[i]
#     )
#   order.cart_items.create(menu_item_id: item.id)
# end
# item = MenuItem.create(
#       name: Lemon Sesame Shrimp,
#       price: 15.95,
#       description: "Butterflied shrimp in a light ginger batter, and served with a sweet lemon sauce."
#       spicy: false,
#       item_type: menus[i]
#     )
#   order.cart_items.create(menu_item_id: item.id)
# end
# item = MenuItem.create(
#       name: Lemon Sesame Shrimp,
#       price: 15.95,
#       description: "Butterflied shrimp in a light ginger batter, and served with a sweet lemon sauce."
#       spicy: false,
#       item_type: menus[i]
#     )
#   order.cart_items.create(menu_item_id: item.id)
# end
# item = MenuItem.create(
#       name: Lemon Sesame Shrimp,
#       price: 15.95,
#       description: "Butterflied shrimp in a light ginger batter, and served with a sweet lemon sauce."
#       spicy: false,
#       item_type: menus[i]
#     )
#   order.cart_items.create(menu_item_id: item.id)
# end
# item = MenuItem.create(
#       name: Lemon Sesame Shrimp,
#       price: 15.95,
#       description: "Butterflied shrimp in a light ginger batter, and served with a sweet lemon sauce."
#       spicy: false,
#       item_type: menus[i]
#     )
#   order.cart_items.create(menu_item_id: item.id)
# end
# item = MenuItem.create(
#       name: Lemon Sesame Shrimp,
#       price: 15.95,
#       description: "Butterflied shrimp in a light ginger batter, and served with a sweet lemon sauce."
#       spicy: false,
#       item_type: menus[i]
#     )
#   order.cart_items.create(menu_item_id: item.id)
# end
# item = MenuItem.create(
#       name: Lemon Sesame Shrimp,
#       price: 15.95,
#       description: "Butterflied shrimp in a light ginger batter, and served with a sweet lemon sauce."
#       spicy: false,
#       item_type: menus[i]
#     )
#   order.cart_items.create(menu_item_id: item.id)
# end
# item = MenuItem.create(
#       name: Lemon Sesame Shrimp,
#       price: 15.95,
#       description: "Butterflied shrimp in a light ginger batter, and served with a sweet lemon sauce."
#       spicy: false,
#       item_type: menus[i]
#     )
#   order.cart_items.create(menu_item_id: item.id)
# end
# item = MenuItem.create(
#       name: Lemon Sesame Shrimp,
#       price: 15.95,
#       description: "Butterflied shrimp in a light ginger batter, and served with a sweet lemon sauce."
#       spicy: false,
#       item_type: menus[i]
#     )
#   order.cart_items.create(menu_item_id: item.id)
# end
# item = MenuItem.create(
#       name: Lemon Sesame Shrimp,
#       price: 15.95,
#       description: "Butterflied shrimp in a light ginger batter, and served with a sweet lemon sauce."
#       spicy: false,
#       item_type: menus[i]
#     )
#   order.cart_items.create(menu_item_id: item.id)
# end
# item = MenuItem.create(
#       name: Lemon Sesame Shrimp,
#       price: 15.95,
#       description: "Butterflied shrimp in a light ginger batter, and served with a sweet lemon sauce."
#       spicy: false,
#       item_type: menus[i]
#     )
#   order.cart_items.create(menu_item_id: item.id)
# end
# item = MenuItem.create(
#       name: Lemon Sesame Shrimp,
#       price: 15.95,
#       description: "Butterflied shrimp in a light ginger batter, and served with a sweet lemon sauce."
#       spicy: false,
#       item_type: menus[i]
#     )
#   order.cart_items.create(menu_item_id: item.id)
# end
# item = MenuItem.create(
#       name: Lemon Sesame Shrimp,
#       price: 15.95,
#       description: "Butterflied shrimp in a light ginger batter, and served with a sweet lemon sauce."
#       spicy: false,
#       item_type: menus[i]
#     )
#   order.cart_items.create(menu_item_id: item.id)
# end
# item = MenuItem.create(
#       name: Lemon Sesame Shrimp,
#       price: 15.95,
#       description: "Butterflied shrimp in a light ginger batter, and served with a sweet lemon sauce."
#       spicy: false,
#       item_type: menus[i]
#     )
#   order.cart_items.create(menu_item_id: item.id)
# end
# item = MenuItem.create(
#       name: Lemon Sesame Shrimp,
#       price: 15.95,
#       description: "Butterflied shrimp in a light ginger batter, and served with a sweet lemon sauce."
#       spicy: false,
#       item_type: menus[i]
#     )
#   order.cart_items.create(menu_item_id: item.id)
# end
#
# item = MenuItem.create(
#
# )
