class Api::RestaurantsController < ApplicationController
  before_action :set_restaurant

  def show
    render json: @restaurant
  end

  def update
    if @restaurant.update(restaurant_params)
      render json: @restaurant
    else
      json_error(@restaurant)
    end
  end

  private

  def set_restaurant
    @restaurant = Restaurant.first
  end

  def restaurant_params
    params.require(:restaurant).permit(:name, :address, :description)
  end
end
