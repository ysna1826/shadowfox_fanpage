// moment.js
// Add your moments here. Each key is the id from the URL (e.g., 1, 2, 101, etc.)
// For each moment, provide a title, an array of image paths, and a content string.
const momentsData = {
  // Example Gallery Moments (replace with your real images and content)
  101: {
    title: "Victory Celebration",
    images: ["gallery/victory1.jpg", "gallery/victory2.jpeg","gallery/victory3.jpg", "gallery/victory4.jpg", "gallery/victory5.jpg"],
    content: `Royal Challengers Bengaluru delivered a statement performance at Wankhede, defeating Mumbai Indians by 12 runs in a high-voltage encounter!\n\nRCB Innings: 221/5 (20 overs)\n\n⭐ Virat Kohli – 67 (42)\n🔥 Rajat Patidar – 64 (32) (Player of the Match)\n🚀 A strong start and explosive finish gave RCB a powerful total.\n\nMI Innings: 209/9 (20 overs)\n\n💪 Tilak Varma – 56 (29)\n⚡ Hardik Pandya – 42 (15)\n🧱 Despite a late surge, RCB bowlers held their nerve.\n\n🔴 RCB broke their Wankhede jinx, sealing their first win at the venue since 2015.\n💥 This victory marked RCB’s dominance and strong intent for IPL 2025!`
  },
  102: {
    title: "Training Session",
    images: ["gallery/training1.png", "gallery/training2.jpg", "gallery/Virat_Kohli_1742271055549.avif", "gallery/training3.png"],
    content: `The grind never stops for the Royal Challengers! 💪\nAs the next match draws closer, the boys in red are putting in the work, staying sharp, and pushing their limits at every session.\n\n🏏 Highlights from the Training Camp:\n<b>Virat Kohli</b> is in beast mode—focused, fired up, and mentoring the squad with intensity.\n\n<b>Bowlers</b> are working on death-over strategies, mastering yorkers and slower balls.\n\n<b>Middle-order batters</b> are fine-tuning their finishing skills with power-hitting drills.\n\n<b>Fielding unit</b> is sharp as ever—diving stops, direct hits, and catching under pressure.\n\n🎙️ "We train like we play – with passion and purpose," said DK.\n\n🔥 The atmosphere is electric, the intent is real, and the message is clear—RCB is coming hard in the next match!\n\n📸 Stay tuned for exclusive practice clips and behind-the-scenes moments.\n🔴 Ee Sala Cup Namde!`
  },
  103: {
    title: "Fan Interaction",
    images: ["gallery/fan1.jpeg", "gallery/fan2.webp", "gallery/fan3.jpg", "gallery/fan4.webp"],
    content: `The heartbeat of Royal Challengers Bengaluru isn't just the players—it’s YOU, the fans!\nFrom the electrifying chants at Chinnaswamy to the wave of support online, the RCB family continues to roar louder with every game.\n\nEvery jersey worn, every cheer echoed, and every post shared adds to the fire that fuels this team. The energy, the passion, the loyalty—RCB fans are in a league of their own.\n\nAs the team trains harder and fights stronger with every match, your support becomes the 12th man on the field. Your voice echoes in every six, every wicket, every celebration.\n\nLet’s keep the fire alive, let the red dominate, and let the spirit of RCB spread across every corner of the cricketing world.\n**Together, we’re not just fans—**we're a movement.\nThis is more than a team, it’s a family. 🔴🖤`
  },
  104: {
    title: "Team Spirit",
    images: ["gallery/sp1.webp", "gallery/sp2.avif", "gallery/sp3.jpg"],
    content: `What sets Royal Challengers Bengaluru apart isn't just talent—it's unshakable team spirit.\n\nFrom the dressing room to the last over under pressure, this squad stands together. Whether it's lifting each other after a loss or celebrating every boundary like a family, RCB plays with heart, passion, and unity.\n\nEvery player brings their fire, but it's the collective energy that turns the team into a force. You see it in their huddles, their fist bumps, their smiles after a breakthrough—it's not just about individual brilliance, it's about trust, belief, and fighting together till the last ball.\n\nWin or lose, this team never backs down.\nThey wear the red with pride.\nThey play for each other.\nThey play for us—the fans.\nThat's RCB. That's family. 🔴🖤`
  },
  106: {
    title: "Stadium View",
    images: ["gallery/gr1.webp", "gallery/gr2.jpg", "gallery/gr3.jpg", "gallery/gr4.avif"],
    content: `🏟️ NAMMA CHINNASWAMY – THE FORTRESS OF FIRE\nWelcome to the heart of RCB – M. Chinnaswamy Stadium, where passion meets power and dreams echo in every cheer!\n\nThis isn’t just a cricket ground—it’s a battlefield, a home, a temple where legends are made and unforgettable moments are born. From deafening roars to spine-chilling silence, this stadium has felt every emotion of the RCB journey.\n\nEvery seat here has seen history.\nEvery stand has shaken with chants of “RCB! RCB!”\nAnd every night under these lights, Bengaluru bleeds red.\n\nIt’s where Kohli waved his bat.\nIt’s where Gayle rained sixes.\nIt’s where belief turns into magic.\n\nThis is Namma Chinnaswamy.\nThe pulse of RCB.\nThe fortress that never gives in.\nThe home where every match feels like a final.\n\n🔴🖤 Let the drums beat, let the chants rise—this is our ground, our pride, our fire.`
  },
  107: {
    title: "INTO the QUALIFIER 1",
    images: ["gallery/lsg1.avif", "gallery/lsg2.avif"],
    content: `Royal Challengers Bengaluru pulled off an unforgettable win against Lucknow Super Giants, chasing a monstrous 228-run target in just 18.4 overs, sealing a dominant 6-wicket victory! 🏏⚡\n\n🏏 LSG Sets the Fire\nRishabh Pant lit up the Ekana Stadium with a jaw-dropping 118 off 61 balls*, supported by Mitchell Marsh's explosive 67. LSG posted a giant 227/3, looking almost untouchable.\nRCB's bowlers struggled early, but held their nerve to keep the damage under control in the final overs. 💥🔥\n\n🔥 RCB's Record-Breaking Response\nPhil Salt and Virat Kohli gave a blazing start in the powerplay. Kohli crafted a classy 54 off 30 balls, keeping the momentum strong.\n\nAfter slipping to 123/4, things looked shaky—until stand-in captain Jitesh Sharma stepped up like a champion. 💪🔴\n\nHe hammered an unbeaten 85 off 33 balls (8 fours, 6 sixes), leading a 107-run partnership with Mayank Agarwal (41* off 23) that turned the tide.\n\nRCB reached 231/4 with 8 balls to spare, completing their highest-ever successful run chase and the third-highest in IPL history! 🚀🔥\n\n🏆 Records Smashed\n✅ RCB became the first team in IPL history to win all 7 away matches in a single season! 🌍🙌\n\n🏏 This win confirmed their place in Qualifier 1 and sent a strong message to every other team—RCB is coming! 💣💯\n\nThe passion, the pressure, the performance—RCB played like a unit on a mission.\nThey didn't just chase runs—they chased history.\nEe Sala Cup Namde! 🔴🖤`
  },
  108: {
    title: "INTO the Finals",
    images: ["gallery/q1.avif", "gallery/q2.jpeg", "gallery/q3.jpg", "gallery/q4.webp"],
    content: `Royal Challengers Bengaluru stormed into the IPL 2025 Final with a commanding all-round performance, demolishing Punjab Kings by 8 wickets in just 10 overs! 🔥🏏\n\n💥 PBKS Innings – Bowling Brilliance Unleashed\nOpting to bowl, RCB's attack struck early and often.\n\nJosh Hazlewood and Suyash Sharma tore through the PBKS top and middle order, picking 3 wickets each, bundling them out for just 101 in 14.1 overs.\n\n⚡ RCB Chase – Salt's Sky-High Speed\nChasing 102, Phil Salt exploded with a blistering 56 off 27 balls*, smashing boundaries at will and keeping the chase clean.\n\nWith support from Virat Kohli (12) and Mayank Agarwal (19), RCB reached 106/2 inside 10 overs, lofting their spirit and momentum straight into the final.\n\n🏆 Statement Victory & Records\nSuyash Sharma was adjudged Player of the Match for his incisive 3/17 spell.\n\nRCB now head to the IPL final for the first time since 2016—this year, they're not just in the race, they mean business.\n\nPhil Salt's quickfire fifty (23 balls) fueled bold predictions: "RCB have won the IPL".\n\nRCB's performance was a perfect storm—brutal bowling, explosive batting, and unwavering belief.\nThey didn't just win a game—they made a statement.\n\nEe Sala Cup Namde! 🔴🖤`
  },
  109: {
    title: "Champions",
    images: ["gallery/ch1.jpg", "gallery/ch4.webp", "gallery/ch5.jpg", "gallery/ch6.webp", "gallery/ch7.jpg"],
    content: `Royal Challengers Bengaluru claimed their maiden IPL crown with a thrilling 6-run win over Punjab Kings in Ahmedabad, finally breaking their heart-wrenching finals curse.\n\n🏏 RCB posted 190/9 batting first, with Virat Kohli leading the charge (43 off 35), backed by useful cameos from Rajat Patidar, Livingstone, and Jitesh Sharma during the middle overs.\n\n🎯 PBKS’s 184/7 felt competitive, with Shashank Singh’s 61 off 30* and Josh Inglis’s 39 keeping them close, but RCB held firm when it mattered.\n\n🔥 Krunal Pandya was the match-winner—his 2/17 spell under pressure earned him the Player of the Match award and delivered in the clutch.\n\n🏆 RCB ended an 18‑year title drought, achieving the dream that has haunted them for so long. The emotion was electric—Kohli was seen in tears, fans erupted, and celebrations swept across the nation.\n\n🏆 Final Glimpse of Glory\nThe atmosphere in Ahmedabad’s Narendra Modi Stadium was charged with anticipation and disbelief.\n\nPhil Salt’s early catch set the tone, while RCB’s bowling unit showcased discipline and bite in the death overs.\n\nWhen the final wicket fell, chants of “Ee Sala Cup Namde!” rose in unison—RCB’s moment of destiny had arrived.\n\nFrom heartbreak to heroics—RCB’s journey this season has been nothing short of cinematic.\nEvery fan’s dream. Every player’s triumph.\nEe Sala Cup Namde! 🔴🖤`
  }
  // Add more moments as needed, following the above structure
};

function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

const momentId = getQueryParam('id');
const moment = momentsData[momentId];

if (moment) {
  // Carousel HTML for multiple images
  let imagesHtml = '';
  if (moment.images && moment.images.length > 1) {
    imagesHtml = `
      <div class="carousel-indicator"></div>
      <div class="carousel">
        <button class="carousel-btn prev" aria-label="Previous image">&#8592;</button>
        ${moment.images.map(img => `<img src="${img}" class="carousel-img" alt="${moment.title}" />`).join('')}
        <button class="carousel-btn next" aria-label="Next image">&#8594;</button>
      </div>
    `;
  } else if (moment.images && moment.images.length === 1) {
    imagesHtml = `<div style="display:flex;justify-content:center;margin-bottom:2rem;"><img src="${moment.images[0]}" class="carousel-img" alt="${moment.title}" /></div>`;
  } else {
    imagesHtml = '<p style="color:#888;text-align:center;">No images available for this moment.</p>';
  }
  document.getElementById('moment-content').innerHTML = `
    <div class="moment-content-box">
      <h1>${moment.title}</h1>
      ${imagesHtml}
      <p>${moment.content.replace(/\n/g, '<br>')}</p>
      <a href="index.html" class="back-link">&larr; Back to Moments</a>
    </div>
  `;
} else {
  document.getElementById('moment-content').innerHTML = '<p>Moment not found.</p>';
} 