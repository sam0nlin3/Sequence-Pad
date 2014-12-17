Song.destroy_all
User.destroy_all
Cell.destroy_all



User.create(
    username: "Sam",
    password: "password1",
    password_confirmation: "password1"
)

User.create(
    username: "Ross",
    password: "password2",
    password_confirmation: "password2"
)

# row one
for i in 1..16
    Cell.create(
        purple_note: "/assets/marimba/marimba_1.mp3",
        blue_note: "/assets/saw_synth/sawsynth_1.mp3",
        yellow_note: "/assets/Noise/Noise_1.mp3",
        green_note: "/assets/808/808_1.mp3",
        active: "none", 
        row: 1,
        column: i )
end  


# row two   
for i in 1..16
    Cell.create(
        purple_note: "/assets/marimba/marimba_2.mp3",
        blue_note: "/assets/saw_synth/sawsynth_2.mp3",
        yellow_note: "/assets/Noise/Noise_2.mp3",
        green_note: "/assets/808/808_2.mp3",
        active: "none",
        row: 2,
        column: i
    )
end  

# row three   
for i in 1..16
    Cell.create(
        purple_note: "/assets/marimba/marimba_3.mp3",
        blue_note: "/assets/saw_synth/sawsynth_3.mp3",
        yellow_note: "/assets/Noise/Noise_3.mp3",
        green_note: "/assets/808/808_3.mp3",
        active: "none",
        row: 3,
        column: i
    )
end 

# row four   
for i in 1..16
    Cell.create(
        purple_note: "/assets/marimba/marimba_4.mp3",
        blue_note: "/assets/saw_synth/sawsynth_4.mp3",
        yellow_note: "/assets/Noise/Noise_4.mp3",
        green_note: "/assets/808/808_4.mp3",
        active: "none",
        row: 4,
        column: i
    )
end 

# row five   
for i in 1..16
    Cell.create(
        purple_note: "/assets/marimba/marimba_5.mp3",
        blue_note: "/assets/saw_synth/sawsynth_5.mp3",
        yellow_note: "/assets/Noise/Noise_5.mp3",
        green_note: "/assets/808/808_5.mp3",
        active: "none",
        row: 5,
        column: i
    )
end 

# row six   
for i in 1..16
    Cell.create(
        purple_note: "/assets/marimba/marimba_6.mp3",
        blue_note: "/assets/saw_synth/sawsynth_6.mp3",
        yellow_note: "/assets/Noise/Noise_6.mp3",
        green_note: "/assets/808/808_6.mp3",
        active: "none",
        row: 6,
        column: i
    )
end 

# row seven   
for i in 1..16
    Cell.create(
        purple_note: "/assets/marimba/marimba_7.mp3",
        blue_note: "/assets/saw_synth/sawsynth_7.mp3",
        yellow_note: "/assets/Noise/Noise_7.mp3",
        green_note: "/assets/808/808_7.mp3",
        active: "none", 
        row: 7,
        column: i
    )
end 

# row eight   
for i in 1..16
    Cell.create(
        purple_note: "/assets/marimba/marimba_8.mp3",
        blue_note: "/assets/saw_synth/sawsynth_8.mp3",
        yellow_note: "/assets/Noise/Noise_8.mp3",
        green_note: "/assets/808/808_8.mp3",
        active: "none", 
        row: 8,
        column: i
    )
end 

# row nine   
for i in 1..16
    Cell.create(
        purple_note: "/assets/marimba/marimba_9.mp3",
        blue_note: "/assets/saw_synth/sawsynth_9.mp3",
        yellow_note: "/assets/Noise/Noise_9.mp3",
        green_note: "/assets/808/808_9.mp3",
        active: "none", 
        row: 9,
        column: i
    )
end 

# row 10   
for i in 1..16
    Cell.create(
        purple_note: "/assets/marimba/marimba_10.mp3",
        blue_note: "/assets/saw_synth/sawsynth_10.mp3",
        yellow_note: "/assets/Noise/Noise_10.mp3",
        green_note: "/assets/808/808_10.mp3",
        active: "none", 
        row: 10,
        column: i
    )
end 

# row eleven   
for i in 1..16
    Cell.create(
        purple_note: "/assets/marimba/marimba_11.mp3",
        blue_note: "/assets/saw_synth/sawsynth_11.mp3",
        yellow_note: "/assets/Noise/Noise_11.mp3",
        green_note: "/assets/808/808_11.mp3",
        active: "none", 
        row: 11,
        column: i
    )
end 

# row tweleve   
for i in 1..16
    Cell.create(
        purple_note: "/assets/marimba/marimba_12.mp3",
        blue_note: "/assets/saw_synth/sawsynth_12.mp3",
        yellow_note: "/assets/Noise/Noise_12.mp3",
        green_note: "/assets/808/808_12.mp3",
        active: "none", 
        row: 12,
        column: i
    )
end