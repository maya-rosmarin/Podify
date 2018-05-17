class Api::PlaylistsController < ApplicationController

  def index
    @playlists = current_user.playlists
    render :index
  end

  def create
    @playlist = Playlist.new(playlist_params)
    @playlist.user_id = current_user_id
    if @playlist.save
      render :create
    else
      render json: @playlist.errors.full_messages, status: 402
    end
  end

  def show
    @playlist = Playlist.find(params[:id])
    render :show
  end

  def update
    @playlist = Playlist.find(params[:id])
    if @playlist.update(playlist_params)
      render :update
    else
      render json: @playlist.errors.full_messages, status: 402
    end
  end

  def add_episode
    
    @playlist = Playlist.find(params[:id])
    playlist_episode = PlaylistEpisode.create({ playlist_id: params[:id], episode_id: params[:episodeId] })
    render json: { playlist_id: params[:playlist_id], episode_id: params[:episodeId] }
  end

  def destroy
    @playlist = Playlist.find(params[:id])
    @playlist.destroy
  end

  private

  def playlist_params
    params.require(:playlist).permit(:title, :user_id)
  end

end
