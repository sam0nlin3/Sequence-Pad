Song.destroy_all
User.destroy_all
Column.destroy_all
Cell.destroy_all

# row one
for i in 1..16
    i = Column.create()
end    

for i in 1..16
    Cell.create(
    purple_note: "/assets/84570^laserric.mp3",
    purple_active: false,
    blue_note: "/assets/dry_kick.mp3",
    blue_active: false,   
    yellow_note: "/assets/windgong.mp3",
    yellow_active: false,
    green_note: "/assets/slap.mp3",
    green_active: false, 
    row: 1,
    column: i
    )

