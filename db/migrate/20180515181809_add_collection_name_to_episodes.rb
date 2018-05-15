class AddCollectionNameToEpisodes < ActiveRecord::Migration[5.1]
  def change
    add_column :episodes, :collectionName, :string
  end
end
