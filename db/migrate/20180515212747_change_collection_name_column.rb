class ChangeCollectionNameColumn < ActiveRecord::Migration[5.1]
  def change
    remove_column :episodes, :collectionName
    add_column :episodes, :collection_name, :string
  end
end
