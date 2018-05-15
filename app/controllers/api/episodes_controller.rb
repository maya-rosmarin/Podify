class Api::EpisodesController < ApplicationController

  def index
    @episodes = current_user.episodes
    # debugger
    render :index
  end

  def create
    @episode = Episode.new(episode_params)
    @episode.user_id = current_user_id
    if @episode.save
      UserEpisode.create({episode_id: @episode.id, user_id: current_user_id})
      render :create
    else
      render json: @episode.errors.full_messages, status: 402
    end
  end

  def destroy
    @episode = Episode.find(params[:id])
    @episode.destroy
    render :destroy
  end

  private

  def episode_params
    params.require(:episode).permit(:title, :itunes_author, :audio, :summary, :itunes_author, :user_id, :collection_name)
  end

end
