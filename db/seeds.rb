Song.destroy_all
User.destroy_all
Column.destroy_all
Cell.destroy_all

# column1 = Column.create()
# column2 = Column.create()
# column3 = Column.create()
# column4 = Column.create()
# column5 = Column.create()
# column6 = Column.create()
# column7 = Column.create()
# column7 = Column.create()
# column8 = Column.create()
# column9 = Column.create()
# column10 = Column.create()
# column11 = Column.create()
# column12 = Column.create()
# column13 = Column.create()
# column14 = Column.create()
# column15 = Column.create()
# column16 = Column.create()


# row one
for i in 1..16
    i = Column.create()
end    

for i in 1..16
    Cell.create(
    purple_note: "/assets/84570^laserric.mp3",
    purple_active: false,
    blue_note: "/assets/84570^laserric.mp3",
    blue_active: false,   
    yellow_note: "/assets/84570^laserric.mp3",
    yellow_active: false,
    green_note: "/assets/84570^laserric.mp3",
    green_active: false, 
    row: 1,
    column: i
    )


# cell1 = Cell.create!(
#     purple_note: "/assets/84570^laserric.mp3",
#     purple_active: false,
#     blue_note: "/assets/84570^laserric.mp3",
#     blue_active: false,   
#     yellow_note: "/assets/84570^laserric.mp3",
#     yellow_active: false,
#     green_note: "/assets/84570^laserric.mp3",
#     green_active: false, 
#     row: 1,
#     column: 1
# ) 

# cell2 = Cell.create!(
#     purple_note: "/assets/84570^laserric.mp3",
#     purple_active: false,
#     blue_note: "/assets/84570^laserric.mp3",
#     blue_active: false,   
#     yellow_note: "/assets/84570^laserric.mp3",
#     yellow_active: false,
#     green_note: "/assets/84570^laserric.mp3",
#     green_active: false, 
#     row: 1,
#     column: column2
# ) 

# cell3 = Cell.create!(
#     purple_note: "/assets/84570^laserric.mp3",
#     purple_active: false,
#     blue_note: "/assets/84570^laserric.mp3",
#     blue_active: false,   
#     yellow_note: "/assets/84570^laserric.mp3",
#     yellow_active: false,
#     green_note: "/assets/84570^laserric.mp3",
#     green_active: false, 
#     row: 1,
#     column: column3
# ) 

# cell4 = Cell.create!(
#     purple_note: "/assets/84570^laserric.mp3",
#     purple_active: false,
#     blue_note: "/assets/84570^laserric.mp3",
#     blue_active: false,   
#     yellow_note: "/assets/84570^laserric.mp3",
#     yellow_active: false,
#     green_note: "/assets/84570^laserric.mp3",
#     green_active: false, 
#     row: 1,
#     column: column4
# ) 

# cell5 = Cell.create!(
#     purple_note: "/assets/84570^laserric.mp3",
#     purple_active: false,
#     blue_note: "/assets/84570^laserric.mp3",
#     blue_active: false,   
#     yellow_note: "/assets/84570^laserric.mp3",
#     yellow_active: false,
#     green_note: "/assets/84570^laserric.mp3",
#     green_active: false, 
#     row: 1,
#     column: column5
# )

# cell6 = Cell.create!(
#     purple_note: "/assets/84570^laserric.mp3",
#     purple_active: false,
#     blue_note: "/assets/84570^laserric.mp3",
#     blue_active: false,   
#     yellow_note: "/assets/84570^laserric.mp3",
#     yellow_active: false,
#     green_note: "/assets/84570^laserric.mp3",
#     green_active: false, 
#     row: 1,
#     column: column6
# )

# cell7 = Cell.create!(
#     purple_note: "/assets/84570^laserric.mp3",
#     purple_active: false,
#     blue_note: "/assets/84570^laserric.mp3",
#     blue_active: false,   
#     yellow_note: "/assets/84570^laserric.mp3",
#     yellow_active: false,
#     green_note: "/assets/84570^laserric.mp3",
#     green_active: false, 
#     row: 1,
#     column: column7
# )

# cell8 = Cell.create!(
#     purple_note: "/assets/84570^laserric.mp3",
#     purple_active: false,
#     blue_note: "/assets/84570^laserric.mp3",
#     blue_active: false,   
#     yellow_note: "/assets/84570^laserric.mp3",
#     yellow_active: false,
#     green_note: "/assets/84570^laserric.mp3",
#     green_active: false, 
#     row: 1,
#     column: column8
# )

# cell9 = Cell.create!(
#     purple_note: "/assets/84570^laserric.mp3",
#     purple_active: false,
#     blue_note: "/assets/84570^laserric.mp3",
#     blue_active: false,   
#     yellow_note: "/assets/84570^laserric.mp3",
#     yellow_active: false,
#     green_note: "/assets/84570^laserric.mp3",
#     green_active: false, 
#     row: 1,
#     column: column9
# )

# cell10 = Cell.create!(
#     purple_note: "/assets/84570^laserric.mp3",
#     purple_active: false,
#     blue_note: "/assets/84570^laserric.mp3",
#     blue_active: false,   
#     yellow_note: "/assets/84570^laserric.mp3",
#     yellow_active: false,
#     green_note: "/assets/84570^laserric.mp3",
#     green_active: false, 
#     row: 1,
#     column: column10
# )

# cell11 = Cell.create!(
#     purple_note: "/assets/84570^laserric.mp3",
#     purple_active: false,
#     blue_note: "/assets/84570^laserric.mp3",
#     blue_active: false,   
#     yellow_note: "/assets/84570^laserric.mp3",
#     yellow_active: false,
#     green_note: "/assets/84570^laserric.mp3",
#     green_active: false, 
#     row: 1,
#     column: column11
# )

# cell12 = Cell.create!(
#     purple_note: "/assets/84570^laserric.mp3",
#     purple_active: false,
#     blue_note: "/assets/84570^laserric.mp3",
#     blue_active: false,   
#     yellow_note: "/assets/84570^laserric.mp3",
#     yellow_active: false,
#     green_note: "/assets/84570^laserric.mp3",
#     green_active: false, 
#     row: 1,
#     column: column12
# )

# cell13 = Cell.create!(
#     purple_note: "/assets/84570^laserric.mp3",
#     purple_active: false,
#     blue_note: "/assets/84570^laserric.mp3",
#     blue_active: false,   
#     yellow_note: "/assets/84570^laserric.mp3",
#     yellow_active: false,
#     green_note: "/assets/84570^laserric.mp3",
#     green_active: false, 
#     row: 1,
#     column: column13
# )

# cell14 = Cell.create!(
#     purple_note: "/assets/84570^laserric.mp3",
#     purple_active: false,
#     blue_note: "/assets/84570^laserric.mp3",
#     blue_active: false,   
#     yellow_note: "/assets/84570^laserric.mp3",
#     yellow_active: false,
#     green_note: "/assets/84570^laserric.mp3",
#     green_active: false, 
#     row: 1,
#     column: column14
# )

# cell15 = Cell.create!(
#     purple_note: "/assets/84570^laserric.mp3",
#     purple_active: false,
#     blue_note: "/assets/84570^laserric.mp3",
#     blue_active: false,   
#     yellow_note: "/assets/84570^laserric.mp3",
#     yellow_active: false,
#     green_note: "/assets/84570^laserric.mp3",
#     green_active: false, 
#     row: 1,
#     column: column15
# )

# cell16 = Cell.create!(
#     purple_note: "/assets/84570^laserric.mp3",
#     purple_active: false,
#     blue_note: "/assets/84570^laserric.mp3",
#     blue_active: false,   
#     yellow_note: "/assets/84570^laserric.mp3",
#     yellow_active: false,
#     green_note: "/assets/84570^laserric.mp3",
#     green_active: false, 
#     row: 1,
#     column: column16
# )
