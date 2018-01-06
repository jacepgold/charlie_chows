require 'rails_helper'

def create_restaurant
  Restaurant.create(
    name: "Charlie Chow's",
    address: '255 East 400 South SLC UT',
    description: "Charlie Chow's Dragon Grill has always been known for its fine Asian cuisine served in an attractive, contemporary setting in the heart of downtown Salt Lake City. Be sure to sample our fresh, homemade Dim Sum (appetizer) in addition to the delicious entrees made to order and elegantly served. And don't forget to try the Dragon Grill, a tasty new way to	create your own meal and sample a varitey of Asian flavors. Because all of our entrees are made fresh to order, we use no MSG in our cooking. Plus, our traditon of friendly service and great food have made Charlie Chow's Dragon Grill a long time Salt Lake favorite."
  )
end

RSpec.describe Api::RestaurantsController, type: :controller do

  describe "GET #show" do
    it "returns http success" do
      get :show
      expect(response).to have_http_status(:success)
    end

    it "returns correct JSON for the restaurant" do
      create_restaurant
      get :show
      parsed = JSON.parse(response.body)
      expect(parsed['name']).to eq("Charlie Chow's")
    end
  end

  describe "PUT #update" do
    before(:each) do
      @restaurant = create_restaurant
    end

    context 'with valid params' do
      let(:valid_params) { { name: 'Chowlie Charles' } }
      before(:each) { put :update, params: { restaurant: valid_params } }
      it "returns http success" do
        expect(response).to have_http_status(:success)
      end

      it "successfully updates restaurant" do
        parsed = JSON.parse(response.body)
        expect(parsed['name']).to eq(valid_params[:name])
      end
    end
  end

end
