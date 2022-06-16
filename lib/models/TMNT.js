const pool = require('../utils/pool');

module.exports = class TMNT {
  id;
  name;
  creatureType;
  weaponProficency;
  groupAffiliation;
  personality;
  alignment;
  stats;

  constructor(rows) {
    this.id = rows.id;
    this.creatureType = rows.creature_type;
    this.weaponProficency = rows.weapon_proficency;
    this.groupAffiliation = rows.group_affiliation;
    this.personality = rows.personality;
    this.alignment = rows.alignment;
    this.stats = rows.stats;
  }

  static async getAll() {
    const { rows } = await pool.query(
      `
        SELECT *
        FROM tmnt
      `
    );
    return rows.map((row) => new TMNT(row));
  }

  static async insert(character) {
    const { rows } = await pool.query(
      `
        INSTER INTO tmnt(
          name,
          creature_type,
          weapon_proficency,
          group_affiliation,
          personality,
          alignment,
          stats
        )
        Values
      `
    );
  }
};
