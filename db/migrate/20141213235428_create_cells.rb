class CreateCells < ActiveRecord::Migration
  def change
    create_table :cells do |t|
    	t.string :purple_note
    	t.boolean :purple_active
    	t.string :blue_note
    	t.boolean :blue_active
    	t.string :yellow_note
    	t.boolean :yellow_active
    	t.string :green_note
    	t.boolean :green_active
		t.integer :row
    	t.references :column

    	t.timestamps
    end
  end
end
