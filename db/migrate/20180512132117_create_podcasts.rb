class CreatePodcasts < ActiveRecord::Migration[5.1]
  def change
    create_table :podcasts do |t|
      t.string :title
      t.text :summary
      t.string :audio
      t.string :itunes_author
      t.string :itunes_image
      t.timestamps
    end
  end
end
