# == Schema Information
#
# Table name: user_episodes
#
#  id         :bigint(8)        not null, primary key
#  episode_id :integer
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class UserEpisode < ApplicationRecord

  validates_uniqueness_of :episode_id, scope: :user_id
  validates_uniqueness_of :user_id, scope: :episode_id

  belongs_to :user

  belongs_to :episode

end
