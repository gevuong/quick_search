Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

    root to: "static_pages#root"

    # Each API endpoint encapsulates a single controller action your app can take. Creating a resource creates a new searches instance that can perform CRUD actions. RESTful design patterns.
    namespace :api, defaults: { format: :json } do
        resources :fetches, only: [:index]
    end
end
