Restaurant.create(
  name: "Charlie Chow's",
  address: '255 East 400 South SLC UT',
  description: "Charlie Chow's Dragon Grill has always been known for its fine Asian cuisine served in an attractive, contemporary setting in the heart of downtown Salt Lake City. Be sure to sample our fresh, homemade Dim Sum (appetizer) in addition to the delicious entrees made to order and elegantly served. And don't forget to try the Dragon Grill, a tasty new way to	create your own meal and sample a varitey of Asian flavors. Because all of our entrees are made fresh to order, we use no MSG in our cooking. Plus, our traditon of friendly service and great food have made Charlie Chow's Dragon Grill a long time Salt Lake favorite."
)

menus = ['Lunch & Dinner', 'Beverages', 'Dessert']

menus.each_with_index do |menu, i|
  order = Order.create(
    customer_address: Faker::Address.street_address,
    customer_first_name: Faker::Name.first_name,
    customer_last_name: Faker::Name.last_name,
    customer_phone: Faker::PhoneNumber.phone_number,
  )

  MenuItem.create(
    name: "Lemon Sesame Chicken",
    price: 13.50,
    description: "Butterflied shrimp in a light ginger batter, and served with a sweet lemon sauce.",
    spicy: false,
    item_type: "Lunch & Dinner"
  )

  MenuItem.create(
    name: "Pepper Shrimp/Scallops",
    price: 12.50,
    description: "Peppery onions and peppers stir-fired in an oyster sauce with ground peppercorns.",
    spicy: false,
    item_type: "Lunch & Dinner"
  )

  MenuItem.create(
    name: "Singapore Honey Shrimp",
    price: 14.50,
    description: "Butterflied shrimp in a light ginger batter, and served with a sweet lemon sauce.",
    spicy: false,
    item_type: "Lunch & Dinner"
  )

  MenuItem.create(
    name: "Kung Pao Shrimp/Scallops:",
    price: 12.95,
    description: "Spicy stir-fried dish with mixed vegetables, topped with whole roasted peanuts",
    spicy: false,
    item_type: "Lunch & Dinner"
  )

  MenuItem.create(
    name: "Honey Glazed Walnut Shrimp",
    price: 14.95,
    description: "Our Chef's special dish. Shrimp Prepared in an exquisite sauce worthy of an emperor.",
    spicy: false,
    item_type: "Lunch & Dinner"
  )
  MenuItem.create(
    name: "Coconut Shrimp",
    price: 12.95,
    description: "Butterflied shrimp in a coconut batter, deep fried, and served with a hot and sweet Thai dipping sauce.",
    spicy: false,
    item_type: "Lunch & Dinner"
  )

  MenuItem.create(
    name: "Cashew Chicken",
    price: 10.55,
    description: "The Hong Kong tradition-roasted Cashews with assorted Chinese vegetables and fresh mushrooms.",
    spicy: false,
    item_type: "Lunch & Dinner"
  )

  MenuItem.create(
    name: "Lemon Chicken",
    price: 10.55,
    description: "Battered chicken breast, deep fried, served with our lemon sauce on a bed of sweet cabbage.",
    spicy: false,
    item_type: "Lunch & Dinner"
  )
  MenuItem.create(
    name: "Spicy Stir-Fried Orange Peel Beef",
    price: 10.55,
    description: "Braised chicken breast, stir-fried in orange zest, whole chilies, red ginger, served on a bed of nappa cabbage.",
    spicy: false,
    item_type: "Lunch & Dinner"
  )
  MenuItem.create(
    name: "Coca-Cola",
    price: 2.95,
    description: "Soda-Type Beverage",
    spicy: false,
    item_type: "Beverages"
  )

end
