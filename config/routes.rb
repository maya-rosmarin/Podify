Rails.application.routes.draw do

  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    get('podcasts/get_episodes', {to: 'podcasts#get_episodes'})
  end

end
