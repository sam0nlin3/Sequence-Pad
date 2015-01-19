class CreateSongs < ActiveRecord::Migration
  def change
    create_table :songs do |t|
    	t.string :title
    	t.references :user
    	t.text :song_string

    	t.timestamps
    end
  end
end
