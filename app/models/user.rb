class User < ActiveRecord::Base
	# Validations
	validates_presence_of :username
	validates_uniqueness_of :username
	validates_presence_of :password, on: :create


	# Association
	has_many :songs
	has_secure_password

end
