
VAR debug = false

VAR thefool_unlocked = true
VAR themagician_unlocked = true

-> start
=== start ===
Before you is the mysterious temple.
    +[Approach.] -> tarot_temple_outside_entrance
    +[Depart.] You depart this place, for it is no longer a part of your journey.
    -> END
    + { debug } [Teleport to the Locus of the Cards] -> hub

=== tarot_temple_outside_entrance ===
The stone walls of the structure tower above you, weilding the crest of the temple just above the entryway; a large relief of a ring. Upon closer inspection, you realize that it is in fact a serpent swallowing it's own tail. Ouroboros. 
The monstrous size of the entrance is intimidating, and the bright light outside makes it difficult to see into the temple's interior.
    +[Ingress the temple.] -> tarot_temple_entrance
    +[Leave.] -> start

=== tarot_temple_entrance ===
The cyclopean structure of the interior matches that of the behemothic entrance.
There is a long hallway leading further on into the darkness.
    +[Traverse the hallway.] -> tarot_temple_hallway
    +[Vacate the temple.] -> tarot_temple_outside_entrance

=== tarot_temple_hallway ===
Description of hallway.
The stone hallway is long and dim, lit mainly by light spilling in from the temple's entrance. Small decorative alcoves containing unlit candelabra line the walls of the hall, and it terminates in a doorway to a distinctive chamber at the end.
    +[Intrude upon the chamber.] -> tarot_temple_chamber
    +[Reconsider, and retreat to the entryway] -> tarot_temple_entrance

=== tarot_temple_chamber ===
Description of the chamber.
On a raised dais on the far side of the room, there is a short, wide, bed-like plinth, surrounded by four tall pedestals holding up a large, decorative, stone awning.
    +[Repose upon the plinth.] You carefully lower yourself into position onto the plinth.
    -> tarot_temple_plinth
    +[Withdraw from the chamber.] -> tarot_temple_hallway

=== tarot_temple_plinth ===
You are lying on the plinth, facing the ceiling. Your body fits neatly into the shallow, human-shaped depression in the surface of the plinth.
    +[Examine the baldachin] The baldachin is an intensely intricate stone-carved awning perched over the plinth that you now rest upon, employing numerous symbolic motifs; the most recurrant seeming to be a pattern containing symbols for a sword, a wand, a pentacle, and a cup.
    -> tarot_temple_plinth
    +[Close your eyes.]
        You close your eyes and intuitively begin concentrating. You eventually no longer feel your own body, and your physical sensations begin to die down. Awhile later, you begin to feel your essense taken to another place...
     -> hub
    +[Rise.] -> tarot_temple_chamber


//------------------------
// The Locus of the Cards (hub)
//------------------------

=== hub ===
You are floating in a strange, dark place. Colors dance around you as you see the occasional object floating by. After some examination, you recognize them as curiously designed, oversized cards.
    +{ thefool_unlocked } [Seize the card of the Fool { fool_complete: (glowing) }]
    -> realm_of_the_fool
    +{ themagician_unlocked } [Seize the card of the Magician { magician_complete: (glowing) }]
    -> realm_of_the_magician
    +[Awaken.] Your surroundings slowly fade and a few moments later you begin to slowly regain consciousness.
    -> tarot_temple_plinth



//-----------------------------------------
//The Realms//
//-----------------------------------------

//--- The Fool
VAR fool_orb_obtained = false
VAR fool_complete = false
=== realm_of_the_fool ===
You find yourself in another place.
A description of the Realm of the Fool.
You see here a shrine to the Locus of the Cards.
    +[Go to second area.] -> second_area_of_fool
    +[Go to third area.] -> third_area_of_fool
    +[Focus on the Locus of the Cards.] -> hub

= second_area_of_fool
Description of second area.
    +[Return to beginning.] -> realm_of_the_fool
    +[Go to third area.] -> third_area_of_fool
    +[Go to fifth area.] -> fifth_area_of_fool

= third_area_of_fool
Description of third area.
    +[Go to beginning.] -> realm_of_the_fool
    +[Go to second area.] -> second_area_of_fool
    +[Go to fourth area.] -> fourth_area_of_fool

= fourth_area_of_fool
Description of fourth area.
{ not fool_orb_obtained: There appears to be a fist-sized glass-like orb here. }
    *{ fifth_area_of_fool && not fool_orb_obtained } [Obtain the orb.] You take the orb and mysteriously seem to absorb it's essence as it disappears into you.
        ~fool_orb_obtained = true
        -> fourth_area_of_fool
    +[Return to third area.] -> third_area_of_fool
    
    
= fifth_area_of_fool
Description of fifth area.
There is a sconce here. It has a round depression in it that appears to be a socket that accepts an object of some kind.
{ fool_complete: A glowing blue orb rests in a socket on the front of the sconce. }
    *{ fool_orb_obtained } [Yield the Fool's orb to the majestic sconce.] The orb materializes once again in your hand at a mere thought and you place it neatly into the perfectly shaped socket in the sconce before you. The orb begins to glow a pale blue color, and you feel a sense of internal relief upon the sight.
        ~fool_complete = true
        -> fifth_area_of_fool
    +[Return to second area.] -> second_area_of_fool

//---


//--- The Magician
VAR magician_complete = false
=== realm_of_the_magician ===
You find yourself in another place.
Description of the realm of the Magician.
You see here a shrine to the Locus of the Cards.
    +[Second area.] -> second_area_of_magician
    +[Focus on the Locus of the Cards] -> hub

= second_area_of_magician
Description of area.
    +[Return.] -> realm_of_the_magician

//---



