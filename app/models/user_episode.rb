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

  belongs_to :user

  belongs_to :episode, inverse_of: :user_episodes

end
