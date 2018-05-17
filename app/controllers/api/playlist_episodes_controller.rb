class Api::PlaylistEpisodesController < ApplicationController

  def index
    @playlist_episodes = PlaylistEpisode.find_by(playlist_id: params[:id])
    @episodes = @playlist_episodes.map do |episode_id|
      Episode.find(episode_id)
    end
    render :index
  end

  def show
    @episodes = Playlist.find(params[:id]).episodes
    render 'api/episodes/index'
  end

end
