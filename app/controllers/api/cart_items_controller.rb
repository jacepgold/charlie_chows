class Api::CartItemsController < ApplicationController
  def index
  end

  def show
  end

  def create
  end

  def update
  end

  def destroy
  end

  private

  def set_order
  end

  def cart_item_params
    params.require(:cart_item).permit(:menu_item_id, :subsitutions)
  end
end
