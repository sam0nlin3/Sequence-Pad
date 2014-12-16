require 'rails_helper'

describe Cell do 
		it { is_expected.to validate_presence_of :purple_note }
		it { is_expected.to validate_presence_of :blue_note }
		it { is_expected.to validate_presence_of :yellow_note }
		it { is_expected.to validate_presence_of :green_note }
		it { is_expected.to validate_presence_of :active }
		it { is_expected.to validate_presence_of :row }
		it { is_expected.to validate_presence_of :column }									

	cell1 = Cell.new(
							purple_note: 'Sound File',
					    blue_note: 'Sound File',                                   
					    yellow_note: 'Sound File',
					    green_note: 'Sound File',
					    active: "none", 
					    row: 1,
					    column: 1)

	it "A cell is valid with a file for each note, an activation, a row, and a column" do
		expect(cell1).to be_valid
	end

end
