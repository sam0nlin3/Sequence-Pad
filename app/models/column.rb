class Column < ActiveRecord::Base

	# Column does not have any validations

	# Associations
	has_many :cells

end