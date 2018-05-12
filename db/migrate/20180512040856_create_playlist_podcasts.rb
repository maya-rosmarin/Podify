class CreatePlaylistPodcasts < ActiveRecord::Migration[5.1]
  def change
    create_table :playlist_podcasts do |t|
      t.integer :playlist_id
      t.integer :podcast_id
      t.timestamps
    end
  end
end
