class Api::PodcastsController < ApplicationController

  def get_episodes
    @episodes = Feedjira::Feed.fetch_and_parse(params[:feed_url]).entries
    @current_user_id = current_user_id
    render 'api/podcasts/episodes'
  end

end
