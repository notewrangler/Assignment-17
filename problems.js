var problems = [
{id: 0, alt1: 0,  alt2: 0, name: "", image: ""},
{id: 1, alt1: 59, alt2: 70,  name:  "Your house is on fire", image: "assets/images/house-on-fire.jpg"},
{id: 2, alt1: 70, alt2: 71,  name:  "Flash flood", image: "assets/images/flash-floods1.jpg"},
{id: 3, alt1: 56, alt2: 82,  name:  "It's 20 degrees below zero", image: "assets/images/super-cold-frog.jpg"},
{id: 4, alt1: 55, alt2: 72,  name:  "It120 degrees in the shade", image: "assets/images/hot-weather.jpg"},
{id: 5, alt1: 53, alt2: 57,  name:  "The Man/Woman of Your Dreams is naked next to your bed--smiling...", image: "assets/images/"},
{id: 6, alt1: 31, alt2: 24,  name:  "Your girlfriend is mad at you", image: "assets/images/i-am-mad-at-you.jpg"},
{id: 7, alt1: 52, alt2: 57,  name:  "Your boss sends you to Hawaii on business", image: "assets/images/Hawaii.jpg "},
{id: 8, alt1: 17, alt2: 64,  name:  "Your Mom is coming over to visit", image: "assets/images/mom.jpg"},
{id: 9, alt1: 70, alt2: 51,  name:  "Mars Attacks!", image: "assets/images/mars-attacks.jpeg"},
{id: 10, alt1: 49, alt2: 48,  name:  "Imperial Storm Troopers at the door", image: "assets/images/lego-storm-troopers.jpg"},
{id: 11, alt1: 20, alt2: 65,  name:  "Texas Hold'em--Pocket Aces", image: "assets/images/Texas-Hold-Em-pocket-aces.jpg"},
{id: 12, alt1: 73, alt2: 57,  name:  "Imperial Fleet Heading Straight at You", image: "assets/images/Imperial_Fleet_Coruscant.jpg"},
{id: 13, alt1: 20, alt2: 65,  name:  "Munchies", image: "assets/images/ "},
{id: 14, alt1: 57, alt2: 63,  name:  "Heartburn", image: "assets/images/heartburn-reflux-1.jpg"},
{id: 15, alt1: 70, alt2: 52,  name:  "Caught in a hail storm", image: "assets/images/HailStormMan.jpg"},
{id: 16, alt1: 51, alt2: 61,  name:  "Attacked by a Lion", image: "assets/images/lion_attack.jpg"},
{id: 17, alt1: 62, alt2: 51,  name:  "Kitchen Sink too full to use the faucet", image: "assets/images/Kitchen-sink-full-of-dirty-dishes.jpg"},
{id: 18, alt1: 17, alt2: 62,  name:  "Can't find a clean fork", image: "assets/images/dirty-fork.jpg"},
{id: 19, alt1: 57, alt2: 62,  name:  "Stressed to the breaking point", image: "assets/images/stressed-2.jpg"},
{id: 20, alt1: 57, alt2: 53,  name:  "Done with work after 14-hour day", image: "assets/images/done-with-work.jpg"},
{id: 21, alt1: 50, alt2: 13,  name:  "Too drunk to stand up", image: "assets/images/too_drunk_to_karaoke_2.jpg "},
{id: 22, alt1: 75, alt2: 74,  name:  "Heading into Death Valley with 1/8 tank", image: "assets/images/low_fuel.jpg"},
{id: 23, alt1: 67, alt2: 63,  name:  "Breaking bathroom scale, pants don't fit", image: "assets/images/fatty.jpg"},
{id: 24, alt1: 8,  alt2: 17,  name:  "6 friends coming over, nothing in fridge but beer", image: "assets/images/friends.jpg"},
{id: 25, alt1: 76, alt2: 77,  name:  "Toilet backed up", image: "assets/images/toilet.jpg"},
{id: 26, alt1: 78, alt2: 79,  name:  "Roaches--lots of them", image: "assets/images/roaches.jpeg"},
{id: 27, alt1: 70, alt2: 80,  name:  "Choppers--lots of them", image: "assets/images/mash.jpg "},
{id: 28, alt1: 48, alt2: 70,  name:  "4 really big guys with swords coming at you", image: "assets/images/march-w-swords.jpg"},
{id: 29, alt1: 53, alt2: 57,  name:  "Late night booty call", image: "assets/images/Booty-call.jpg"},
{id: 30, alt1: 47, alt2: 65,  name:  "Power out--can't see the breaker box", image: "assets/images/power-failure1.jpg"},
{id: 31, alt1: 62, alt2: 66,  name:  "Forgot to pay the gas bill", image: "assets/images/Gas-bill1.jpg"},
{id: 32, alt1: 69, alt2: 57,  name:  "Internet connection is down!", image: "assets/images/funny-gif-internet-down.gif"},
{id: 33, alt1: 52, alt2: 60,  name:  "Girlfriend out of town for 2 weeks", image: "assets/images/frustrated-man.jpg"},
{id: 34, alt1: 61, alt2: 20,  name:  "The drums are drowning you out", image: "assets/images/Loud-drummer.jpg"},
{id: 35, alt1: 20, alt2: 73,  name:  "The guitar is way too loud", image: "assets/images/Back-Future.jpg"},
{id: 36, alt1: 68, alt2: 63,  name:  "Your dog is chasing cars", image: "assets/images/dog_chasing_cars.jpg"},
{id: 37, alt1: 52, alt2: 61,  name:  "Dumpster diving for your cell phone", image: "assets/images/Dumpster-dive01.jpg"},
{id: 38, alt1: 63, alt2: 51,  name:  "Venereal Disease", image: "assets/images/venereal.jpg "},
{id: 39, alt1: 70, alt2: 51,  name:  "Buffalo Charge!", image: "assets/images/buffalo-charging.jpg "},
{id: 40, alt1: 49, alt2: 14,  name:  "Frozen Hot Pocket", image: "assets/images/hotpockets1.jpg"},
{id: 41, alt1: 60, alt2: 63,  name:  "Need Input!", image: "assets/images/ShortCircuit2.jpg "},
{id: 42, alt1: 63, alt2: 61,  name:  "Need data from remote API", image: "assets/images/cloud-API.jpg"},
{id: 43, alt1: 61, alt2: 57,  name:  "Flat Tire", image: "assets/images/duct-tape.jpg"},
{id: 44, alt1: 58, alt2: 68,  name:  "Neighbors having loud sex", image: "assets/images/loud-sex.jpg"},
{id: 45, alt1: 51, alt2: 73,  name:  "Destroy the evidence", image: "assets/images/FORMAT01.jpg"},
{id: 46, alt1: 57, alt2: 62,  name:  "Suicide Prevention", image: "assets/images/git-push.jpg"},
{id: 47, alt1: 53, alt2: 9,  name:  "Call for an encore", image: "assets/images/encore.jpg"},
{id: 48, alt1: 47, alt2: 20,  name:  "Meet pretty girl in bar", image: "assets/images/femme-fatale-cigarette.jpg"},
{id: 49, alt1: 48, alt2: 61,  name:  "Count Dooku", image: "assets/images/count-dooku.jpg"},
{id: 50, alt1: 63, alt2: 68,  name:  "The Iron Yard, 8:45 am", image: "assets/images/iron-yard.jpg"}
];
