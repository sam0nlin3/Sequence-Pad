class Cell < ActiveRecord::Base
	
	# Validations
	validates_presence_of :purple_note
	validates :purple_active, inclusion: { in: [true, false] } 
	validates_presence_of :blue_note
	validates :blue_active, inclusion: { in: [true, false] }
	validates_presence_of :yellow_note
	validates :yellow_active, inclusion: { in: [true, false] }
	validates_presence_of :green_note
	validates :green_active, inclusion: { in: [true, false] }
	validates_presence_of :row
	validates_presence_of :column_id

	# Associations
	belongs_to :column

end