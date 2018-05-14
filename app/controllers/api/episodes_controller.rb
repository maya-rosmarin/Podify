class Api::EpisodesController < ApplicationController

  def index
    @episodes = Episode.where(user_id: params[:user_id])
  end

  def create
    @episode = Episode.new(episode_params)
    @episode.user_id = current_user_id
    if @episode.save
      UserEpisode.create({episode_id: @episode.id, user_id: current_user_id})
      render :create
    else
      render json: @episode.errors.full_messages, status: 420
    end
  end

  def destroy
  end

  private

  def episode_params
    params.require(:episode).permit(:title, :itunes_author, :audio, :summary, :itunes_author, :user_id)
  end

end
