Song.destroy_all
User.destroy_all
Column.destroy_all
Cell.destroy_all

column1 = Column.create()

cell1 = Cell.create(
		purple_note: 'https://s3.amazonaws.com/spctrl/Boy+Scouts+sleeping+in+a+tent+1.mp3',
    purple_active: false,
    blue_note: 'https://s3.amazonaws.com/spctrl/Boy+Scouts+sleeping+in+a+tent+1.mp3',
    blue_active: false,   
    yellow_note: 'https://s3.amazonaws.com/spctrl/Boy+Scouts+sleeping+in+a+tent+1.mp3',
    yellow_active: false,
    green_note: 'https://s3.amazonaws.com/spctrl/Boy+Scouts+sleeping+in+a+tent+1.mp3',
    green_active: false, 
    row: 1,
    column_id: 1
)

