class CellsController < ApplicationController

	def index
		@cells = Cell.all
		render :json
	end	


end
