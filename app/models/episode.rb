# == Schema Information
#
# Table name: episodes
#
#  id              :bigint(8)        not null, primary key
#  title           :string
#  summary         :text
#  audio           :string
#  itunes_author   :string
#  itunes_image    :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  user_id         :integer
#  collection_name :string
#  image_url       :string
#

class Episode < ApplicationRecord

  validates :title, :user_id, presence: true

  has_many :playlist_episodes,
    class_name: :PlaylistEpisode,
    foreign_key: :episode_id,
    primary_key: :id

  has_many :playlists,
    through: :playlist_episodes,
    source: :playlist

  has_many :user_episodes,
    inverse_of: :episode

  has_many :users,
    through: :user_episodes,
    source: :user

end
