const db = require('../../../db');

const MEMBER_MODEL_NAME = 'member';

const memberSchema = db.Schema({
  name: String,
  wallet: String,
  created: Number,
  updated: Number,
  lastLogin: Number,
  email: String,
  discordId: String,
  roles: [{ id: String, name: String }],
  tags: [{ id: String, name: String }],
  intro: {
    bio: String,
    from: String,
    doing: String,
    interested: String,
  },
});

const Member = db.model(MEMBER_MODEL_NAME, memberSchema, MEMBER_MODEL_NAME);

module.exports = {
  Member,
};
