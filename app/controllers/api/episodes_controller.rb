class Api::EpisodesController < ApplicationController

  def create
    @episode = Episode.new(episode_params)
    @current_user = current_user
    if @episode.save
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
