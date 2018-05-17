Rails.application.routes.draw do

  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    get('podcasts/get_episodes', { to: 'podcasts#get_episodes' })
    resources :playlists, only: [:index, :create, :show, :update, :destroy]
    resources :episodes, only: [:index, :create, :destroy]
    resources :playlist_episodes, only: [:index, :show]
    post('/playlists/:id/add_episode', { to: 'playlists#add_episode' })
  end

end
