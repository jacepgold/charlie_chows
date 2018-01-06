require 'rails_helper'

RSpec.describe Api::MenuItemsController, type: :controller do

  describe "GET #index" do
    it "returns http success" do
      get :index
      expect(response).to have_http_status(:success)
    end

    it 'returns correct JSON for all menu items' do
      item_count = 10
      FactoryBot.create_list(:menu_item, item_count)
      get :index
      parsed = JSON.parse(response.body)
      expect(parsed.count).to eq(item_count)
    end
  end

  describe "GET #show" do
    before(:each) do
      @menu_item = FactoryBot.create(:menu_item)
      get :show, params: { id: @menu_item.id }
    end
    it "returns http success" do
      expect(response).to have_http_status(:success)
    end

    it 'returns the right menu item JSON' do
      parsed = JSON.parse(response.body)
      expect(parsed['id']).to eq(@menu_item.id)
    end
  end

  describe "GET #create" do

    context 'with valid params' do
      item_name = 'A food'
      let(:valid_params) {
        {
          menu_item: {
            name: item_name,
            description: 'Some Food',
            price: 3.5,
            spicy: false,
            item_type: 'Lunch & Dinner',
          }
        }
      }

      before(:each) { post :create, params: valid_params }

      it "returns http success" do
        expect(response).to have_http_status(:success)
      end

      it "returns the created menu item's json" do
        parsed = JSON.parse(response.body)
        expect(parsed['name']).to eq(item_name)
      end
    end

    context 'with invalid params' do
      let(:invalid_params) {
        {
          menu_item: {
            description: 'Some Food',
            price: 3.5,
            spicy: false,
            item_type: 'Lunch & Dinner',
          }
        }
      }

      it 'returns correct error and status on fail' do
        post :create, params: invalid_params
        expect(response).to have_http_status(422)
        expect(JSON.parse(response.body)['errors']).to eq("Name can't be blank")
        expect(MenuItem.count).to eq(0)
      end
    end
  end

  describe "PUT #update" do
    before(:each) { @menu_item = FactoryBot.create(:menu_item) }

    context 'with valid params' do
      let(:valid_params) { { name: 'Chowlie Charles' } }
      before(:each) { put :update, params: { id: @menu_item.id, menu_item: valid_params } }
      it "returns http success" do
        expect(response).to have_http_status(:success)
      end

      it 'successfully updates the menu item' do
        parsed = JSON.parse(response.body)
        expect(parsed['name']).to eq(valid_params[:name])
      end
    end

    context 'with invalid params' do
      it 'fails to update menu item' do
        put :update, params: { id: @menu_item.id, menu_item: { name: '' }}
        parsed = JSON.parse(response.body)
        expect(response).to have_http_status(:unprocessable_entity)
        expect(parsed['errors']).to eq("Name can't be blank")
        @menu_item.reload
        expect(@menu_item.name).to_not eq('')
      end
    end

  end

  describe "DELETE #destroy" do
    it "successfully deletes a menu item" do
      menu_item = FactoryBot.create(:menu_item)
      expect(MenuItem.count).to eq(1)
      delete :destroy, params: { id: menu_item.id }
      expect(response).to have_http_status(:success)
      expect(MenuItem.count).to eq(0)
    end
  end

end
