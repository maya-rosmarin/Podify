# == Schema Information
#
# Table name: playlists
#
#  id         :bigint(8)        not null, primary key
#  title      :string
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Playlist < ApplicationRecord

  validates :title, :user_id, presence: true

  belongs_to :user,
    class_name: :User,
    foreign_key: :user_id,
    primary_key: :id

  has_many :playlist_podcasts,
    class_name: :playlist_podcasts,
    foreign_key: :playlist_id,
    primary_key: :id

  has_many :podcasts,
    through: :playlist_podcasts,
    source: :podcast

end
