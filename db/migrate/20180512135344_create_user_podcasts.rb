class CreateUserPodcasts < ActiveRecord::Migration[5.1]
  def change
    create_table :user_podcasts do |t|
      t.integer :podcast_id
      t.integer :user_id
      t.timestamps
    end
  end
end
