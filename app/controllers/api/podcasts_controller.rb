class Api::PodcastsController < ApplicationController

  def get_episodes
    @episodes = Feedjira::Feed.fetch_and_parse(params[:feed_url]).entries
    # debugger
    # @episodes.each do |episode|
    #   if !episode.enclosure_url
    #     {}
    #   end
    # end
    @current_user_id = current_user_id
    render 'api/podcasts/episodes'
  end

end
