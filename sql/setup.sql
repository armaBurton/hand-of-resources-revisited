DROP TABLE IF EXISTS tmnt CASCADE;

CREATE TABLE tmnt (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name TEXT NOT NULL,
  creature_type TEXT NOT NULL,
  weapon_proficency TEXT NOT NULL,
  group_affiliation TEXT NOT NULL,
  personality TEXT[],
  alignment TEXT NOT NUll,
  stats JSON NOT NULL
);

INSERT INTO tmnt (
  name, 
  creature_type, 
  weapon_proficency, 
  group_affiliation, 
  personality, 
  alignment, 
  stats
)
VALUES 
  (
    'Leonardo', 
    'Turtle', 
    'Katana', 
    'TMNT Member', 
    ARRAY['Super Straight', 'Clever', 'Fast Thinker', 'Excellent Strategist and Tactician', 'Impatient', 'Perfectionist'], 
    'Good',
    '{
      "IQ": "16", 
      "ME": "16", 
      "MA": "17", 
      "PS": "15", 
      "PP": "20", 
      "PE": "18", 
      "PB": "11", 
      "SPD":"11"
    }'
  ),
  (
    'Raphael', 
    'Turtle', 
    'Sai', 
    'TMNT Member', 
    ARRAY['Impulsive', 'Hot Tempered', 'Quick to Argue', 'Quick to Defend Friends'], 
    'Good',
    '{
      "IQ": "12", 
      "ME": "13", 
      "MA": "11", 
      "PS": "20", 
      "PP": "18", 
      "PE": "20", 
      "PB": "5", 
      "SPD":"15"
    }'
  ),
  (
    'Donatello', 
    'Turtle', 
    'Bo', 
    'TMNT Member', 
    ARRAY['Agreeable', 'Quiet', 'Self Contained'], 
    'Good',
    '{
      "IQ": "19", 
      "ME": "15", 
      "MA": "12", 
      "PS": "13", 
      "PP": "17", 
      "PE": "13", 
      "PB": "9", 
      "SPD":"10"
    }'
  ),
  (
    'Michelangelo', 
    'Turtle', 
    'Nunchaku', 
    'TMNT Member', 
    ARRAY['Fun Loving', 'Carefree', 'Friendly'], 
    'Good',
    '{
      "IQ": "11", 
      "ME": "14", 
      "MA": "19", 
      "PS": "16", 
      "PP": "24", 
      "PE": "17", 
      "PB": "16", 
      "SPD":"14"
    }'
  ),
  (
    'Shredder', 
    'Human', 
    'Fist-weapons', 
    'Foot Clan Leader', 
    ARRAY['Mean', 'Suspicious', 'Vengeful'], 
    'Evil',
    '{
      "IQ": "16", 
      "ME": "14", 
      "MA": "20", 
      "PS": "19", 
      "PP": "24", 
      "PE": "19", 
      "PB": "12", 
      "SPD":"9"
    }'
  ),
  (
    'Baxter Stockman', 
    'Human/Cyborg/Housefly', 
    'Mouser Robot', 
    'Mad Scientist', 
    ARRAY['Erratic', 'Unpredictable', 'Boastful'], 
    'Evil',
    '{
      "IQ": "18", 
      "ME": "8", 
      "MA": "12", 
      "PS": "14", 
      "PP": "9", 
      "PE": "17", 
      "PB": "12", 
      "SPD":"4"
    }'
  );