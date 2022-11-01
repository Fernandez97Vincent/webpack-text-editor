import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log('Grabbing data from JATE')
  //connect
  const jateData = await openDB('jate', 1);

  const tx = jateData.transaction('jate', 'readwrite');

  const store = tx.objectStore('jate');

  const req = store.put({id: 1, value: content});

  const res = await req;

  console.log('Data has been saved to JATE', res.value);
  console.error('putDb not implemented');
}

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async (id, content) => {
  console.log('Request to update JATE');

  const jateData = await openDB('jate', 1);

  const tx = jateData.transaction('jate', 'readwrite');

  const store = tx.objectStore('jate');

  const req = store.get(1);

  const res = await req;
  console.log('Data has been saved to JATE', res.value);
  return result?.value
}

initdb();
