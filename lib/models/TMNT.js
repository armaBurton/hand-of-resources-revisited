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
    this.name = rows.name;
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
        INSERT INTO tmnt(
          name,
          creature_type,
          weapon_proficency,
          group_affiliation,
          personality,
          alignment,
          stats
        )
        VALUES
          ($1, $2, $3, $4, $5, $6, $7)
        RETURNING
          *
      `,
      [
        character.name,
        character.creatureType,
        character.weaponProficency,
        character.groupAffiliation,
        character.personality,
        character.alignment,
        character.stats,
      ]
    );

    return new TMNT(rows[0]);
  }

  static async getById(id) {
    const { rows } = await pool.query(
      `
        SELECT *
        FROM tmnt
        WHERE id=$1
      `,
      [id]
    );

    if (!rows[0]) return null;
    return new TMNT(rows[0]);
  }

  static async updateById(id, character) {
    const { rows } = await pool.query(
      `
        UPDATE tmnt
        SET
          name=$1,
          creature_type=$2,
          weapon_proficency=$3,
          group_affiliation=$4,
          personality=$5,
          alignment=$6,
          stats=$7
        WHERE id=$8
        RETURNING *
      `,
      [
        character.name,
        character.creatureType,
        character.weaponProficency,
        character.groupAffiliation,
        character.personality,
        character.alignment,
        character.stats,
        id,
      ]
    );

    return new TMNT(rows[0]);
  }
};
