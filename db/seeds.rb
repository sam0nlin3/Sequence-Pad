Song.destroy_all
User.destroy_all
Cell.destroy_all


# row one
for i in 1..16
    Cell.create(
        purple_note: "/assets/marimba_1.mp3",
        blue_note: "/assets/synth_1.mp3",
        yellow_note: "/assets/noise_1.mp3",
        green_note: "/assets/808_1.mp3",
        active: 'none', 
        row: 1,
        column: i )
end  


# row two   
for i in 1..16
    Cell.create(
        purple_note: "/assets/marimba_2.mp3",
        blue_note: "/assets/synth_2.mp3",
        yellow_note: "/assets/noise_2.mp3",
        green_note: "/assets/808_2.mp3",
        active: "none",
        row: 2,
        column: i
    )
end  

# row three   
for i in 1..16
    Cell.create(
        purple_note: "/assets/marimba_3.mp3",
        blue_note: "/assets/synth_3.mp3",
        yellow_note: "/assets/noise_3.mp3",
        green_note: "/assets/808_3.mp3",
        active: "none",
        row: 3,
        column: i
    )
end 

# row four   
for i in 1..16
    Cell.create(
        purple_note: "/assets/marimba_4.mp3",
        blue_note: "/assets/synth_4.mp3",
        yellow_note: "/assets/noise_4.mp3",
        green_note: "/assets/808_4.mp3",
        active: "none",
        row: 4,
        column: i
    )
end 

# row five   
for i in 1..16
    Cell.create(
        purple_note: "/assets/marimba_5.mp3",
        blue_note: "/assets/synth_5.mp3",
        yellow_note: "/assets/noise_5.mp3",
        green_note: "/assets/808_5.mp3",
        active: "none",
        row: 5,
        column: i
    )
end 

# row six   
for i in 1..16
    Cell.create(
        purple_note: "/assets/marimba_6.mp3",
        blue_note: "/assets/synth_6.mp3",
        yellow_note: "/assets/noise_6.mp3",
        green_note: "/assets/808_6.mp3",
        active: "none",
        row: 6,
        column: i
    )
end 

# row seven   
for i in 1..16
    Cell.create(
        purple_note: "/assets/marimba_7.mp3",
        blue_note: "/assets/synth_7.mp3",
        yellow_note: "/assets/noise_7.mp3",
        green_note: "/assets/808_7.mp3",
        active: "none", 
        row: 7,
        column: i
    )
end 

# row eight   
for i in 1..16
    Cell.create(
        purple_note: "/assets/marimba_8.mp3",
        blue_note: "/assets/synth_8.mp3",
        yellow_note: "/assets/noise_8.mp3",
        green_note: "/assets/808_8.mp3",
        active: "none", 
        row: 8,
        column: i
    )
end 

# row nine   
for i in 1..16
    Cell.create(
        purple_note: "/assets/marimba_9.mp3",
        blue_note: "/assets/synth_9.mp3",
        yellow_note: "/assets/noise_9.mp3",
        green_note: "/assets/808_9.mp3",
        active: "none", 
        row: 9,
        column: i
    )
end 

# row 10   
for i in 1..16
    Cell.create(
        purple_note: "/assets/marimba_10.mp3",
        blue_note: "/assets/synth_10.mp3",
        yellow_note: "/assets/noise_10.mp3",
        green_note: "/assets/808_10.mp3",
        active: "none", 
        row: 10,
        column: i
    )
end 

# row eleven   
for i in 1..16
    Cell.create(
        purple_note: "/assets/marimba_11.mp3",
        blue_note: "/assets/synth_11.mp3",
        yellow_note: "/assets/noise_11.mp3",
        green_note: "/assets/808_11.mp3",
        active: "none", 
        row: 11,
        column: i
    )
end 

# row tweleve   
for i in 1..16
    Cell.create(
        purple_note: "/assets/marimba_12.mp3",
        blue_note: "/assets/synth_12.mp3",
        yellow_note: "/assets/noise_12.mp3",
        green_note: "/assets/808_12.mp3",
        active: "none", 
        row: 12,
        column: i
    )
end