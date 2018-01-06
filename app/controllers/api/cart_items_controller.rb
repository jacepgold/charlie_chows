class Api::CartItemsController < ApplicationController
  before_action :set_order
  before_action :set_cart_item, except: [:index, :create]
  before_action :set_menu_item, only: [:show]

  def index
    render json: @order.menu_items
  end

  def show
    render json: @menu_item
  end

  def create
    cart_item = @order.cart_items.new(cart_item_params)
    if cart_item.save
      render json: @order.menu_items.find(cart_item.menu_item_id)
    else
      json_error(cart_item)
    end
  end

  def update
    if @cart_item.update(cart_item_params)
      render json: @order.menu_items.find(@cart_item.menu_item_id)
    else
      json_error(@cart_item)
    end
  end

  def destroy
    @cart_item.destroy
  end

  private

  def set_order
    @order = Order.find(params[:order_id])
  end

  def set_cart_item
    @cart_item = @order.cart_items.find(params[:id])
  end

  def set_menu_item
    @menu_item = @order.menu_items.find(@cart_item.menu_item_id)
  end

  def cart_item_params
    params.require(:cart_item).permit(:menu_item_id, :special_instructions)
  end
end
