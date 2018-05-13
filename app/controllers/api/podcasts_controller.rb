class Api::PodcastsController < ApplicationController

  def get_episodes
    @episodes = Feedjira::Feed.fetch_and_parse(params[:feed_url]).entries
    render 'api/podcasts/episodes'
    @current_user_id = current_user_id
    debugger
  end

end
