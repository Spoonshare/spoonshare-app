Rails.application.routes.draw do
  resources :hello_worlds
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  root "hello_worlds#index"
end
