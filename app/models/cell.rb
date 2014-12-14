class Cell < ActiveRecord::Base
	
	# Validations
	validates_presence_of :purple_note
	validates_presence_of :purple_active
	validates_presence_of :blue_note
	validates_presence_of :blue_active
	validates_presence_of :yellow_note
	validates_presence_of :yellow_active
	validates_presence_of :green_note
	validates_presence_of :green_active
	validates_presence_of :row
	validates_presence_of :column

	# Associations
	belongs_to :column

end	
