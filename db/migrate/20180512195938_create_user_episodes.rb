class CreateUserEpisodes < ActiveRecord::Migration[5.1]
  def change
    create_table :user_episodes do |t|
      t.integer :episode_id
      t.integer :user_id
      t.timestamps
    end
  end
end
