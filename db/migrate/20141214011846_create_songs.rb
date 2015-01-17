class CreateSongs < ActiveRecord::Migration
  def change
    create_table :songs do |t|
    	t.string :name
    	t.references :user
    	t.string :song_string

    	t.timestamps
    end
  end
end
