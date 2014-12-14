class CreateColumns < ActiveRecord::Migration
  def change
    create_table :columns do |t|

    	t.timestamps
    end
  end
end
