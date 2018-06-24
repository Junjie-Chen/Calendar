const router = require('express').Router();
const {Event, Date} = require('../database/models');

router.post('/', (req, res, next) => {
  const {newEvent, dateId} = req.body;

  Event.create(newEvent)
  .then(newEvent => {
    return Date.findOrCreate({
             where: {
               id: +dateId
             }
           })
           .then(matchingDate => newEvent.addDate(matchingDate[0]));
  })
  .then(matchingDate => {
    const {eventId} = matchingDate[0][0];

    return Event.findAll({
      where: {
        id: eventId
      },
      include: [Date]
    });
  })
  .then(newEvent => res.json(newEvent[0]))
  .catch(next);
});

router.get('/', (req, res, next) => {
  Event.findAll({
    include: [Date]
  })
  .then(events => res.json(events))
  .catch(next);
});

router.put('/:id', (req, res, next) => {
  Event.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  .then(() => {
    return Event.findAll({
      where: {
        id: req.params.id
      },
      include: [Date]
    });
  })
  .then(modifiedEvent => res.json(modifiedEvent[0]))
  .catch(next);
});

router.delete('/:id', (req, res, next) => {
  Event.findById(req.params.id)
  .then(oldEvent => oldEvent.destroy())
  .then(() => res.sendStatus(200))
  .catch(next);
});

module.exports = router;
