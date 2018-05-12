# == Schema Information
#
# Table name: podcasts
#
#  id            :bigint(8)        not null, primary key
#  title         :string
#  summary       :text
#  audio         :string
#  itunes_author :string
#  itunes_image  :string
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Podcast < ApplicationRecord

  validates :title, :itunes_author, presence: true

  has_many :playlist_podcasts,
    class_name: :PlaylistPodcast,
    foreign_key: :podcast_id,
    primary_key: :id

  has_many :user_podcasts,
    class_name: :UserPodcast,
    foreign_key: :podcast_id,
    primary_key: :id

  has_many :users,
    through: :user_podcasts,
    source: :user

end
