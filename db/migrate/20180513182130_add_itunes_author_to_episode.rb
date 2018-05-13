class AddItunesAuthorToEpisode < ActiveRecord::Migration[5.1]
  def change
    add_column :episodes, :user_id, :integer
  end
end
