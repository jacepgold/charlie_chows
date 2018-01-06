class ApplicationController < ActionController::API
  include DeviseTokenAuth::Concerns::SetUserByToken

  protected

  def json_error(model)
    render json: { errors: model.errors.full_messages.join(', ') }, status: 422
  end
end
