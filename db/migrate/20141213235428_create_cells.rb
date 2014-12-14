class CreateCells < ActiveRecord::Migration
  def change
    create_table :cells do |t|
    	t.string :purple_note
    	t.boolean :purple_active, default: false
    	t.string :blue_note
    	t.boolean :blue_active, default: false
    	t.string :yellow_note
    	t.boolean :yellow_active, default: false
    	t.string :green_note
    	t.boolean :green_active, default: false
		t.integer :row
    	t.references :column

    	t.timestamps
    end
  end
end
