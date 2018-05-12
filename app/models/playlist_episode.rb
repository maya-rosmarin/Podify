# == Schema Information
#
# Table name: playlist_episodes
#
#  id          :bigint(8)        not null, primary key
#  playlist_id :integer
#  episode_id  :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class PlaylistEpisode < ApplicationRecord

  validates :playlist_id, :podcast_id, presence: true

  belongs_to :playlist,
    class_name: :Playlist,
    foreign_key: :playlist_id,
    primary_key: :id

  belongs_to :episode,
    class_name: :Episode,
    foreign_key: :episode_id,
    primary_key: :id

end
