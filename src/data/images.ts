// Free Unsplash photography (Unsplash License — free for commercial use,
// no attribution required). Two of these were actually shot in Nepal by
// the same photographer, which is a real find rather than generic stock.
function unsplash(id: string, w = 1600) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;
}

export const images = {
  // Sushanta Rokka — "Tranquil Rice Terraces with Rustic Hut in Lush
  // Countryside", shot in Pharping, Dakshinkali, Nepal.
  riceTerraces: unsplash("photo-1754976645463-df5faa0a385a", 2400),
  // Sushanta Rokka — "Friendship and Conversations among Schoolgirls in
  // Nepal", shot in a Nepali classroom.
  nepalSchoolgirls: unsplash("photo-1759143102544-790af882ff45", 1200),
  // Mario Heller — classroom of students at desks.
  classroom: unsplash("photo-1636202339022-7d67f7447e3a", 1200),
  // Vitaly Gariev — mother and daughter sharing a hug at home.
  motherDaughter: unsplash("photo-1752652011858-302f08a6dc9f", 1200),
  // Vitaly Gariev — students collaborating around a laptop.
  studentsLaptop: unsplash("photo-1758270705518-b61b40527e76", 1600),
};
