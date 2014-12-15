require 'rails_helper'

describe User do 
	it { is_expected.to validate_presence_of :username }
	it { is_expected.to validate_uniqueness_of :username }


	let(:test_user) { User.new( username: "test_user",
															password: "password1",
															password_confirmation: "password1") }

		it "a user is valid with a username, password, and password confirmation" do
			expect(test_user).to be_valid
		end

		it "a user must have a matching password and password_confirmation" do
   		new_user  = User.new( username: "test2",
		                        password: "password500",
		                        password_confirmation: "password999")
		                        
		  errors = new_user.errors_on(:password_confirmation)
		  error_included = errors.include?("doesn't match Password")
		  expect(error_included).to eq(true)
		end

		it "is invalid without a unique username" do
			test_user.save!
			test_person_2 = User.new( username: "test_user",
																password: "password",
																password_confirmation: "password" )
			expect(test_person_2).to have(1).errors_on(:username)
		end


end