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


end
