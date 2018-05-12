# == Schema Information
#
# Table name: playlist_podcasts
#
#  id          :bigint(8)        not null, primary key
#  playlist_id :integer
#  podcast_id  :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class PlaylistPodcast < ApplicationRecord

  validates :playlist_id, :podcast_id, presence: true

  belongs_to :playlist,
    class_name: :Playlist,
    foreign_key: :playlist_id,
    primary_key: :id

  belongs_to :podcast,
    class_name: :Podcast,
    foreign_key: :podcast_id,
    primary_key: :id

end
