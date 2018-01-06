class Api::MenuItemsController < ApplicationController
  before_action :set_menu
  before_action :set_menu_item, except: [:index, :create]

  def index
    render json: @menu.menu_items
  end

  def show
    render json: @menu_item
  end

  def create
    menu_item = @menu.menu_items.new(menu_item_params)
    if menu_item.save
      render json: menu_item
    else
      json_error(menu_item)
    end
  end

  def update
    if @menu_item.update(menu_item_params)
      render json: @menu_item
    else
      json_error(@menu_item)
    end
  end

  def destroy
    @menu_item.destroy
  end

  private

  def set_menu
    @menu = Menu.find(params[:menu_id])
  end

  def set_menu_item
    @menu_item = @menu.menu_items.find(params[:id])
  end

  def menu_item_params
    params.require(:menu_item).permit(:name, :price, :description, :spicy)
  end
end
