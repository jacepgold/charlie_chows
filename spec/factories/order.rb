FactoryBot.define do
  factory :order do
    customer_address Faker::Address.street_address
    customer_first_name Faker::Name.first_name
    customer_last_name Faker::Name.last_name
    customer_phone Faker::PhoneNumber.phone_number
  end
end
