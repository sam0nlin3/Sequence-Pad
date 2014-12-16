class Cell < ActiveRecord::Base
	
	# Validations
	validates_presence_of :purple_note
	validates_presence_of :blue_note
	validates_presence_of :yellow_note
	validates_presence_of :green_note
	validates_presence_of :active
	validates_presence_of :row
	validates_presence_of :column


end