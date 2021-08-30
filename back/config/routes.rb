Rails.application.routes.draw do
  namespace :v1 do
    resources :categories
    resources :items do
      collection do
        get :find_by_code
      end
    end
    resources :products
    resources :users
  end
end
