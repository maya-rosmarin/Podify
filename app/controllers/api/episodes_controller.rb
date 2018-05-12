class Api::EpisodesController < ApplicationController

  def create
    @episode = Episode.new(episode_params)
  end

  def destroy
  end

  private

  def podcast_params
    params.require(:episode).permit(:title, :itunes_author, :audio)
  end

end
