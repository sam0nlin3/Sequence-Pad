class DropColumns < ActiveRecord::Migration
  def change
  	drop_table :columns
  end
end
