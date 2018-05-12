class Api::PodcastsController < ApplicationController

  def create
    @podcast = Podcast.new(podcast_params)
  end

  def destroy
  end

  def get_episodes
    @episodes = Feedjira::Feed.fetch_and_parse(params[:feed_url]).entries
    render 'api/podcasts/episodes'
  end

  private

  def podcast_params
    params.require(:podcast).permit(:title, :itunes_author, :audio)
  end

end
