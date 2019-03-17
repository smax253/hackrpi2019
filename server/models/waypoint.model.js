const mongoose = require('mongoose');

const WaypointSchema = new mongoose.Schema({
  name: {
    type: String
  },
  location_id: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  ranking_string: {
    type: String
  },
  location_string: {
    type: String
  },
  latitude: {
    type: String
  },
  longitude: {
    type: String
  },
  category: {
    type: String
  },
  subcategory: {
    type: String
  },
  rating_image_url: {
    type: String
  },
}, {
  versionKey: false
});


module.exports = mongoose.model('Waypoint', WaypointSchema);
