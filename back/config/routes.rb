Rails.application.routes.draw do
  resources :items
  resources :categories
  resources :products
  resources :users
  
  namespace :v1 do
    resources :users
  end
end
