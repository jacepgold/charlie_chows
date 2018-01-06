require 'rails_helper'

RSpec.describe Api::OrdersController, type: :controller do

  describe "GET #index" do
    it "returns http success" do
      get :index
      expect(response).to have_http_status(:success)
    end

    it 'returns correct JSON for all orders' do
      order_count = 10
      FactoryBot.create_list(:order, order_count)
      get :index
      parsed = JSON.parse(response.body)
      expect(parsed.count).to eq(order_count)
    end
  end

  describe "GET #show" do
    before(:each) do
      @order = FactoryBot.create(:order)
      get :show, params: { id: @order.id }
    end
    it "returns http success" do
      expect(response).to have_http_status(:success)
    end

    it 'returns the right order JSON' do
      parsed = JSON.parse(response.body)
      expect(parsed['id']).to eq(@order.id)
    end
  end

  describe "GET #create" do

    context 'with valid params' do
      first_name = 'Billy'
      let(:valid_params) {
        {
          order: {
            customer_address: Faker::Address.street_address,
            customer_first_name: first_name,
            customer_last_name: Faker::Name.last_name,
            customer_phone: Faker::PhoneNumber.phone_number,
          }
        }
      }

      before(:each) { post :create, params: valid_params }

      it "returns http success" do
        expect(response).to have_http_status(:success)
      end

      it "returns the created order's json" do
        parsed = JSON.parse(response.body)
        expect(parsed['customer_first_name']).to eq(first_name)
      end
    end

    context 'with invalid params' do
      let(:invalid_params) {
        {
          order: {
            customer_first_name: 'Billy',
            customer_last_name: Faker::Name.last_name,
            customer_phone: Faker::PhoneNumber.phone_number,
          }
        }
      }

      it 'returns correct error and status on fail' do
        post :create, params: invalid_params
        expect(response).to have_http_status(422)
        expect(JSON.parse(response.body)['errors']).to eq("Customer address can't be blank")
        expect(Order.count).to eq(0)
      end
    end
  end

  describe "PUT #update" do
    before(:each) { @order = FactoryBot.create(:order) }

    context 'with valid params' do
      let(:valid_params) { { first_name: 'Billy' } }
      before(:each) { put :update, params: { id: @order.id, order: valid_params } }
      it "returns http success" do
        expect(response).to have_http_status(:success)
      end

      it 'successfully updates the order' do
        parsed = JSON.parse(response.body)
        expect(parsed['name']).to eq(valid_params[:name])
      end
    end

    context 'with invalid params' do
      it 'fails to update order' do
        put :update, params: { id: @order.id, order: { customer_first_name: '' }}
        parsed = JSON.parse(response.body)
        expect(response).to have_http_status(:unprocessable_entity)
        expect(parsed['errors']).to eq("Customer first name can't be blank")
        @order.reload
        expect(@order.customer_first_name).to_not eq('')
      end
    end

  end

  describe "DELETE #destroy" do
    it "successfully deletes a order" do
      order = FactoryBot.create(:order)
      expect(Order.count).to eq(1)
      delete :destroy, params: { id: order.id }
      expect(response).to have_http_status(:success)
      expect(Order.count).to eq(0)
    end
  end

end
