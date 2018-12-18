Rails.application.routes.draw do
  get 'quotations/index'
  root to: 'quotations#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
