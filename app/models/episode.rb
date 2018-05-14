# == Schema Information
#
# Table name: episodes
#
#  id            :bigint(8)        not null, primary key
#  title         :string
#  summary       :text
#  audio         :string
#  itunes_author :string
#  itunes_image  :string
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  user_id       :integer
#

class Episode < ApplicationRecord

  validates :title, :itunes_author, presence: true

  has_many :playlist_episodes,
    class_name: :PlaylistEpisode,
    foreign_key: :episode_id,
    primary_key: :id

  has_many :playlists,
    through: :playlist_episodes,
    source: :playlist

  has_many :users, inverse_of: :episode

  has_many :user_episodes,
    class_name: :UserEpisode,
    foreign_key: :podcast_id,
    primary_key: :id

  has_many :users,
    through: :user_episodes,
    source: :user

end
