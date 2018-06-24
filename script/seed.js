'use strict';

const database = require('../server/database');
const {Event, Date} = require('../server/database/models');

const seed = async () => {
  await database.sync({
          force: true
        });

  console.log('Sync the database successfully!');

  const eventOne = await Event.create({
                     name: 'Junjie @ TTP',
                     startTime: '10:30',
                     endTime: '11:00',
                     description: 'A chat about upcoming Associate Engineer Programs at Tech Talent Pipeline'
                   });

  const eventTwo = await Event.create({
                     name: 'Junjie @ WE',
                     startTime: '13:00',
                     endTime: '13:45',
                     description: 'A chat about Junior Front End Developer Opportunity at West Elm'
                   });

  const dateOne = await Date.create({
                    id: 12
                  });

  await eventOne.addDate(dateOne);

  await eventTwo.addDate(dateOne);

  const eventThree = await Event.create({
                     name: 'TTP Overview for Spotify Fellowship Application Process',
                     startTime: '12:00',
                     endTime: '13:00',
                     description: 'A conference call about the application process and upcoming next steps'
                   });

  const dateTwo = await Date.create({
                    id: 23
                  });

  await eventThree.addDate(dateTwo);

  console.log('Seed the Event table successfully!');

  console.log('Seed the Date table successfully!');

  console.log('Seed the database successfully!');
};

if (module === require.main) {
  seed()
  .catch(err => {
    console.error(err);
    process.exitCode = 1;
  });
  // .finally(() => {
  //   database.close();

  //   console.log('Close the database connection!');
  // });

  console.log('Seeding...');
}
