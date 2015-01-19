class Song < ActiveRecord::Base
	# Validations
	validates_presence_of :title

	# Association
	belongs_to :user

end
