class Song < ActiveRecord::Base
	# Validations
	validates_presence_of :name

	# Association
	belongs_to :user

end
