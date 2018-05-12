class CreatePlaylistEpisodes < ActiveRecord::Migration[5.1]
  def change
    create_table :playlist_episodes do |t|
        t.integer :playlist_id
        t.integer :episode_id
        t.timestamps
    end
  end
end
