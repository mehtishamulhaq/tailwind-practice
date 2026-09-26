// Photos from Unsplash and avatars from pravatar.cc, shared by the starters and the targets.

const unsplash = (id: string, width = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=80`

export const photos = {
  yosemite: unsplash('1506744038136-46273834b3fb'),
  castleHill: unsplash('1469474968028-56623f02e42e'),
  braies: unsplash('1501785888041-af3ef285b470'),
  skye: unsplash('1470071459604-3b5ec3a7fe05'),
  forest: unsplash('1441974231531-c6227db76b6e'),
  beach: unsplash('1507525428034-b723cf961d3e'),
  desertRoad: unsplash('1500530855697-b586d89ba3ee'),
  moraine: unsplash('1493246507139-91e8fad9978e'),
  yukon: unsplash('1464822759023-fed622ff2c3b'),
  boat: unsplash('1476514525535-07fb3b4ae5f1'),
  canyon: unsplash('1504893524553-b855bce32c67'),
  stars: unsplash('1519681393784-d120267933ba', 1920),
  singer: unsplash('1493225457124-a3eb161ffa5f', 600),
  guitars: unsplash('1511379938547-c1f69419868d', 600),
  dj: unsplash('1470225620780-dba8ba36b745', 800),
  crowd: unsplash('1514525253161-7a46d19cd819', 600),
  gradientViolet: unsplash('1557682250-33bd709cbe85', 600),
  gradientRainbow: unsplash('1579546929518-9e396f3cc809', 600),
}

export const avatar = (n: number) => `https://i.pravatar.cc/160?img=${n}`
