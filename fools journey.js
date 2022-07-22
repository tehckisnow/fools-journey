var storyContent = ﻿{"inkVersion":19,"root":[[{"->":"start"},["done",{"#f":5,"#n":"g-0"}],null],"done",{"start":[["^Before you is the mysterious temple.","\n","ev","str","^Approach.","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^Depart.","/str","/ev",{"*":".^.c-1","flg":4},"ev","str","^Teleport to the Locus of the Cards","/str",{"VAR?":"debug"},"/ev",{"*":".^.c-2","flg":5},{"c-0":["^ ",{"->":"tarot_temple_outside_entrance"},"\n",{"#f":5}],"c-1":["^ You depart this place, for it is no longer a part of your journey.","\n","end",{"#f":5}],"c-2":["^ ",{"->":"hub"},"\n",{"#f":5}]}],{"#f":1}],"tarot_temple_outside_entrance":[["^The stone walls of the structure tower above you, weilding the crest of the temple just above the entryway; a large relief of a ring. Upon closer inspection, you realize that it is in fact a serpent swallowing it's own tail. Ouroboros.","\n","^The monstrous size of the entrance is intimidating, and the bright light outside makes it difficult to see into the temple's interior.","\n","ev","str","^Ingress the temple.","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^Leave.","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["^ ",{"->":"tarot_temple_entrance"},"\n",{"#f":5}],"c-1":["^ ",{"->":"start"},"\n",{"#f":5}]}],{"#f":1}],"tarot_temple_entrance":[["^The cyclopean structure of the interior matches that of the behemothic entrance.","\n","^There is a long hallway leading further on into the darkness.","\n","ev","str","^Traverse the hallway.","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^Vacate the temple.","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["^ ",{"->":"tarot_temple_hallway"},"\n",{"#f":5}],"c-1":["^ ",{"->":"tarot_temple_outside_entrance"},"\n",{"#f":5}]}],{"#f":1}],"tarot_temple_hallway":[["^Description of hallway.","\n","^The stone hallway is long and dim, lit mainly by light spilling in from the temple's entrance. Small decorative alcoves containing unlit candelabra line the walls of the hall, and it terminates in a doorway to a distinctive chamber at the end.","\n","ev","str","^Intrude upon the chamber.","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^Reconsider, and retreat to the entryway","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["^ ",{"->":"tarot_temple_chamber"},"\n",{"#f":5}],"c-1":["^ ",{"->":"tarot_temple_entrance"},"\n",{"#f":5}]}],{"#f":1}],"tarot_temple_chamber":[["^Description of the chamber.","\n","^On a raised dais on the far side of the room, there is a short, wide, bed-like plinth, surrounded by four tall pedestals holding up a large, decorative, stone awning.","\n","ev","str","^Repose upon the plinth.","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^Withdraw from the chamber.","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["^ You carefully lower yourself into position onto the plinth.","\n",{"->":"tarot_temple_plinth"},{"#f":5}],"c-1":["^ ",{"->":"tarot_temple_hallway"},"\n",{"#f":5}]}],{"#f":1}],"tarot_temple_plinth":[["^You are lying on the plinth, facing the ceiling. Your body fits neatly into the shallow, human-shaped depression in the surface of the plinth.","\n","ev","str","^Examine the baldachin","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^Close your eyes.","/str","/ev",{"*":".^.c-1","flg":4},"ev","str","^Rise.","/str","/ev",{"*":".^.c-2","flg":4},{"c-0":["^ The baldachin is an intensely intricate stone-carved awning perched over the plinth that you now rest upon, employing numerous symbolic motifs; the most recurrant seeming to be a pattern containing symbols for a sword, a wand, a pentacle, and a cup.","\n",{"->":".^.^.^"},{"#f":5}],"c-1":["\n","^You close your eyes and intuitively begin concentrating. You eventually no longer feel your own body, and your physical sensations begin to die down. Awhile later, you begin to feel your essense taken to another place...","\n",{"->":"hub"},{"#f":5}],"c-2":["^ ",{"->":"tarot_temple_chamber"},"\n",{"#f":5}]}],{"#f":1}],"hub":[["^You are floating in a strange, dark place. Colors dance around you as you see the occasional object floating by. After some examination, you recognize them as curiously designed, oversized cards.","\n","ev","str","^Seize the card of the Fool ","ev",{"VAR?":"fool_complete"},"/ev",[{"->":".^.b","c":true},{"b":["^ (glowing) ",{"->":"hub.0.9"},null]}],"nop","/str",{"VAR?":"thefool_unlocked"},"/ev",{"*":".^.c-0","flg":5},"ev","str","^Seize the card of the Magician ","ev",{"VAR?":"magician_complete"},"/ev",[{"->":".^.b","c":true},{"b":["^ (glowing) ",{"->":"hub.0.21"},null]}],"nop","/str",{"VAR?":"themagician_unlocked"},"/ev",{"*":".^.c-1","flg":5},"ev","str","^Awaken.","/str","/ev",{"*":".^.c-2","flg":4},{"c-0":["\n",{"->":"realm_of_the_fool"},{"#f":5}],"c-1":["\n",{"->":"realm_of_the_magician"},{"#f":5}],"c-2":["^ Your surroundings slowly fade and a few moments later you begin to slowly regain consciousness.","\n",{"->":"tarot_temple_plinth"},{"#f":5}]}],{"#f":1}],"realm_of_the_fool":[["^You find yourself in another place.","\n","^A description of the Realm of the Fool.","\n","^You see here a shrine to the Locus of the Cards.","\n","ev","str","^Go to second area.","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^Go to third area.","/str","/ev",{"*":".^.c-1","flg":4},"ev","str","^Focus on the Locus of the Cards.","/str","/ev",{"*":".^.c-2","flg":4},{"c-0":["^ ",{"->":".^.^.^.second_area_of_fool"},"\n",{"#f":5}],"c-1":["^ ",{"->":".^.^.^.third_area_of_fool"},"\n",{"#f":5}],"c-2":["^ ",{"->":"hub"},"\n",{"#f":5}]}],{"second_area_of_fool":[["^Description of second area.","\n","ev","str","^Return to beginning.","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^Go to third area.","/str","/ev",{"*":".^.c-1","flg":4},"ev","str","^Go to fifth area.","/str","/ev",{"*":".^.c-2","flg":4},{"c-0":["^ ",{"->":".^.^.^.^"},"\n",{"#f":5}],"c-1":["^ ",{"->":".^.^.^.^.third_area_of_fool"},"\n",{"#f":5}],"c-2":["^ ",{"->":".^.^.^.^.fifth_area_of_fool"},"\n",{"#f":5}]}],{"#f":1}],"third_area_of_fool":[["^Description of third area.","\n","ev","str","^Go to beginning.","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^Go to second area.","/str","/ev",{"*":".^.c-1","flg":4},"ev","str","^Go to fourth area.","/str","/ev",{"*":".^.c-2","flg":4},{"c-0":["^ ",{"->":".^.^.^.^"},"\n",{"#f":5}],"c-1":["^ ",{"->":".^.^.^.^.second_area_of_fool"},"\n",{"#f":5}],"c-2":["^ ",{"->":".^.^.^.^.fourth_area_of_fool"},"\n",{"#f":5}]}],{"#f":1}],"fourth_area_of_fool":[["^Description of fourth area.","\n","ev",{"VAR?":"fool_orb_obtained"},"!","/ev",[{"->":".^.b","c":true},{"b":["^ There appears to be a fist-sized glass-like orb here. ",{"->":".^.^.^.7"},null]}],"nop","\n","ev","str","^Obtain the orb.","/str",{"CNT?":".^.^.^.fifth_area_of_fool"},{"VAR?":"fool_orb_obtained"},"!","&&","/ev",{"*":".^.c-0","flg":21},"ev","str","^Return to third area.","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["^ You take the orb and mysteriously seem to absorb it's essence as it disappears into you.","\n","ev",1,"/ev",{"VAR=":"fool_orb_obtained","re":true},{"->":".^.^.^"},{"#f":5}],"c-1":["^ ",{"->":".^.^.^.^.third_area_of_fool"},"\n",{"#f":5}]}],{"#f":1}],"fifth_area_of_fool":[["^Description of fifth area.","\n","^There is a sconce here. It has a round depression in it that appears to be a socket that accepts an object of some kind.","\n","ev",{"VAR?":"fool_complete"},"/ev",[{"->":".^.b","c":true},{"b":["^ A glowing blue orb rests in a socket on the front of the sconce. ",{"->":".^.^.^.8"},null]}],"nop","\n","ev","str","^Yield the Fool's orb to the majestic sconce.","/str",{"VAR?":"fool_orb_obtained"},"/ev",{"*":".^.c-0","flg":21},"ev","str","^Return to second area.","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["^ The orb materializes once again in your hand at a mere thought and you place it neatly into the perfectly shaped socket in the sconce before you. The orb begins to glow a pale blue color, and you feel a sense of internal relief upon the sight.","\n","ev",1,"/ev",{"VAR=":"fool_complete","re":true},{"->":".^.^.^"},{"#f":5}],"c-1":["^ ",{"->":".^.^.^.^.second_area_of_fool"},"\n",{"#f":5}]}],{"#f":1}],"#f":1}],"realm_of_the_magician":[["^You find yourself in another place.","\n","^Description of the realm of the Magician.","\n","^You see here a shrine to the Locus of the Cards.","\n","ev","str","^Second area.","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^Focus on the Locus of the Cards","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["^ ",{"->":".^.^.^.second_area_of_magician"},"\n",{"#f":5}],"c-1":["^ ",{"->":"hub"},"\n",{"#f":5}]}],{"second_area_of_magician":[["^Description of area.","\n","ev","str","^Return.","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["^ ",{"->":".^.^.^.^"},"\n",{"#f":5}]}],{"#f":1}],"#f":1}],"global decl":["ev",0,{"VAR=":"debug"},1,{"VAR=":"thefool_unlocked"},1,{"VAR=":"themagician_unlocked"},0,{"VAR=":"fool_orb_obtained"},0,{"VAR=":"fool_complete"},0,{"VAR=":"magician_complete"},"/ev","end",null],"#f":1}],"listDefs":{}};