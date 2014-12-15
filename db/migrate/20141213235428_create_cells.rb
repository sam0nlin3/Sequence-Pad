class CreateCells < ActiveRecord::Migration
  def change
    create_table :cells do |t|
    	t.string :purple_note
    	t.string :blue_note
    	t.string :yellow_note
    	t.string :green_note
    	t.string :active
		t.integer :row
    	t.references :column

    	t.timestamps
    end
  end
end
