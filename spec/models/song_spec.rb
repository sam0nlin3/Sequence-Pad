 require 'rails_helper'

describe Song do 
	it { is_expected.to validate_presence_of :name }

	test_person_3 = User.new( username: "test_user9000",
														 password: "password",
														 password_confirmation: "password" )
	test_person_3.save

	test_song = Song.new( name: 'Test Song',
												user_id: test_person_3.id )

	it "a song is valid with a title, and a user_id attribute" do
		expect(test_song).to be_valid
	end	

end
