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
        purple_note: "/assets/marimba/marimba_12.mp3",
        blue_note: "/assets/saw_synth/sawsynth_12.mp3",
        yellow_note: "/assets/Noise_softer/Noise_softer_12.wav",
        green_note: "/assets/808_louder/808_louder_12.wav",
        red_note: "/assets/Flute/Flute_12.wav",
        brown_note: "/assets/Perc/Perc_12.wav",
        active: "none", 
        row: 1,
        column: i )
end  


# row two   
for i in 1..16
    Cell.create(
        purple_note: "/assets/marimba/marimba_11.mp3",
        blue_note: "/assets/saw_synth/sawsynth_11.mp3",
        yellow_note: "/assets/Noise_softer/Noise_softer_11.wav",
        green_note: "/assets/808_louder/808_louder_11.wav",
        red_note: "/assets/Flute/Flute_11.wav",
        brown_note: "/assets/Perc/Perc_11.wav",
        active: "none",
        row: 2,
        column: i
    )
end  

# row three   
for i in 1..16
    Cell.create(
        purple_note: "/assets/marimba/marimba_10.mp3",
        blue_note: "/assets/saw_synth/sawsynth_10.mp3",
        yellow_note: "/assets/Noise_softer/Noise_softer_10.wav",
        green_note: "/assets/808_louder/808_louder_10.wav",
        red_note: "/assets/Flute/Flute_10.wav",
        brown_note: "/assets/Perc/Perc_10.wav",
        active: "none",
        row: 3,
        column: i
    )
end 

# row four   
for i in 1..16
    Cell.create(
        purple_note: "/assets/marimba/marimba_9.mp3",
        blue_note: "/assets/saw_synth/sawsynth_9.mp3",
        yellow_note: "/assets/Noise_softer/Noise_softer_9.wav",
        green_note: "/assets/808_louder/808_louder_9.wav",
        red_note: "/assets/Flute/Flute_9.wav",
        brown_note: "/assets/Perc/Perc_9.wav",
        active: "none",
        row: 4,
        column: i
    )
end 

# row five   
for i in 1..16
    Cell.create(
        purple_note: "/assets/marimba/marimba_8.mp3",
        blue_note: "/assets/saw_synth/sawsynth_8.mp3",
        yellow_note: "/assets/Noise_softer/Noise_softer_8.wav",
        green_note: "/assets/808_louder/808_louder_8.wav",
        red_note: "/assets/Flute/Flute_8.wav",
        brown_note: "/assets/Perc/Perc_8.wav",
        active: "none",
        row: 5,
        column: i
    )
end 

# row six   
for i in 1..16
    Cell.create(
        purple_note: "/assets/marimba/marimba_7.mp3",
        blue_note: "/assets/saw_synth/sawsynth_7.mp3",
        yellow_note: "/assets/Noise_softer/Noise_softer_7.wav",
        green_note: "/assets/808_louder/808_louder_7.wav",
        red_note: "/assets/Flute/Flute_7.wav",
        brown_note: "/assets/Perc/Perc_7.wav",
        active: "none",
        row: 6,
        column: i
    )
end 

# row seven   
for i in 1..16
    Cell.create(
        purple_note: "/assets/marimba/marimba_6.mp3",
        blue_note: "/assets/saw_synth/sawsynth_6.mp3",
        yellow_note: "/assets/Noise_softer/Noise_softer_6.wav",
        green_note: "/assets/808_louder/808_louder_6.wav",
        red_note: "/assets/Flute/Flute_6.wav",
        brown_note: "/assets/Perc/Perc_6.wav",
        active: "none", 
        row: 7,
        column: i
    )
end 

# row eight   
for i in 1..16
    Cell.create(
        purple_note: "/assets/marimba/marimba_5.mp3",
        blue_note: "/assets/saw_synth/sawsynth_5.mp3",
        yellow_note: "/assets/Noise_softer/Noise_softer_5.wav",
        green_note: "/assets/808_louder/808_louder_5.wav",
        red_note: "/assets/Flute/Flute_5.wav",
        brown_note: "/assets/Perc/Perc_5.wav",
        active: "none", 
        row: 8,
        column: i
    )
end 

# row nine   
for i in 1..16
    Cell.create(
        purple_note: "/assets/marimba/marimba_4.mp3",
        blue_note: "/assets/saw_synth/sawsynth_4.mp3",
        yellow_note: "/assets/Noise_softer/Noise_softer_4.wav",
        green_note: "/assets/808_louder/808_louder_4.wav",
        red_note: "/assets/Flute/Flute_4.wav",
        brown_note: "/assets/Perc/Perc_4.wav",
        active: "none", 
        row: 9,
        column: i
    )
end 

# row 10   
for i in 1..16
    Cell.create(
        purple_note: "/assets/marimba/marimba_3.mp3",
        blue_note: "/assets/saw_synth/sawsynth_3.mp3",
        yellow_note: "/assets/Noise_softer/Noise_softer_3.wav",
        green_note: "/assets/808_louder/808_louder_3.wav",
        red_note: "/assets/Flute/Flute_3.wav",
        brown_note: "/assets/Perc/Perc_3.wav",
        active: "none", 
        row: 10,
        column: i
    )
end 

# row eleven   
for i in 1..16
    Cell.create(
        purple_note: "/assets/marimba/marimba_2.mp3",
        blue_note: "/assets/saw_synth/sawsynth_2.mp3",
        yellow_note: "/assets/Noise_softer/Noise_softer_2.wav",
        green_note: "/assets/808_louder/808_louder_2.wav",
        red_note: "/assets/Flute/Flute_2.wav",
        brown_note: "/assets/Perc/Perc_2.wav",
        active: "none", 
        row: 11,
        column: i
    )
end 

# row tweleve   
for i in 1..16
    Cell.create(
        purple_note: "/assets/marimba/marimba_1.mp3",
        blue_note: "/assets/saw_synth/sawsynth_1.mp3",
        yellow_note: "/assets/Noise_softer/Noise_softer_1.wav",
        green_note: "/assets/808_louder/808_louder_1.wav",
        red_note: "/assets/Flute/Flute_1.wav",
        brown_note: "/assets/Perc/Perc_1.wav",
        active: "none", 
        row: 12,
        column: i
    )
end