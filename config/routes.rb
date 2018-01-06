Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
    get '/restaurant', to: 'restaurants#show'
    put '/restaurant', to: 'restaurant#update'
    resources :menus do
      resources :menu_items
    end
    resources :orders do
      resources :cart_items
    end
  end

  #Do not place any routes below this one
  get '*other', to: 'static#index'
end
