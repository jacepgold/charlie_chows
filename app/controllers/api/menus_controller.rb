class Api::MenusController < ApplicationController
  before_action :set_menu, except: [:index, :create]

  def index
    render json: Menu.all
  end

  def show
    render json: @menu
  end

  def create
    menu = Menu.new(menu_params)
    if menu.save
      render json: menu
    else
      json_error(menu)
    end
  end

  def update
    if @menu.update(menu_params)
      render json: @menu
    else
      json_error(@menu)
    end
  end

  def destroy
    @menu.destroy
  end

  private

  def set_menu
    @menu = Menu.find(params[:id])
  end

  def menu_params
    params.require(:menu).permit(:menu_type)
  end
end
