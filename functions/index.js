

'use strict';

const functions = require('firebase-functions');

const max = 10;

exports.truncate = functions.database.ref('/users/{key}').onWrite(async (change) => {
  const parentRef = change.after.ref.parent;
  const snapshot = await parentRef.once('value');
	  if (snapshot.numChildren() >= max) {
    let childCount = 0;
    const updates = {};
    snapshot.forEach((child) => {
      if (++childCount <= snapshot.numChildren() - max) {
        updates[child.key] = null;
      }
    });
    return parentRef.update(updates);
  }
  return null;
});