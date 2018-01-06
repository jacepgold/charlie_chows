class Api::OrdersController < ApplicationController
  before_action :set_order, except: [:index, :create]

  def index
    render json: Order.all
  end

  def show
    render json: @order
  end

  def create
    order = Order.new(order_params)
    if order.save
      render json: order
    else
      json_error(order)
    end
  end

  def update
    if @order.update(order_params)
      render json: @order
    else
      json_error(@order)
    end
  end

  def destroy
    @order.destroy
  end

  private

  def set_order
    @order = Order.find(params[:id])
  end

  def order_params
    params.require(:order).permit(
      :delivery,
      :customer_first_name,
      :customer_last_name,
      :customer_address,
      :customer_phone
    )
  end
end
