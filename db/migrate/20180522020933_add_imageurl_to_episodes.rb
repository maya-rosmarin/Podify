class AddImageurlToEpisodes < ActiveRecord::Migration[5.1]
  def change
    add_column :episodes, :image_url, :string
  end
end
