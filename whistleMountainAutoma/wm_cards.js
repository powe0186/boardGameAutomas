//Variables holding all the action descriptions of actions the outlaws can take
const placeAirship = 'MOVE the shown ariship to a space of the grid adjacent to scaffolds and/or on a machine so that it so that it earns the highest possible number of resources and/or VP';
const buildAScaffold = 'Take a scaffold of the indicated shape  and find a place to build it where it will earn the most points.';
const buildAMachine = 'Take a machine of the indicated size worth the most VP. Build so that maximum number of outlaws are promoted. If it has a build bonus or effect in addition to VP, the outlaw gains 5 pts.';
const upgrade = 'Outlaws take the upgrade from the market worth the most points.';
const moveOutlawWorker = 'Choose the lowest outlaw in the barracks (or lowest on scaffold) and move it to the highest available unoccupied scaffold space.';
const rescueOutlawWorker = 'Choose an outlaw worker in the whirlpool and move it to the highest available unoccupied scaffold space.';
const promoteOutlawWorker = 'Select the highest outlaw on a scaffold and promote it to the tower, collecting the award.';
const climbTheTower = 'Beginning with the highest Outlaw in the tower, move each outlaw up one floor in the tower, collecting awards.';
const rotateOutlawBlockerShips = 'Rotate each dock blocker to the next available dock in this order: Hot air balloon &rarr Blimp $rarr Dreadnought. ';


const outlawCardDeck = [
    //All of the outlaw cards UNSHUFFLED. 
    //Holds a name, file location of its img, and a string with the 2 actions the outlaws will perform.
    //REMINDER:  I NEED TO PUT AN alt PROPERTY IN EACH CARD OBJECT.
    {
        'name': 'outlawCard1',
        'file': 'images/outlawCard1.png',
        'action1': placeAirship,
        'action2': promoteOutlawWorker,
        'alt': 'Place airship and promote worker.'
    },
    {
        'name': 'outlawCard2',
        'file': 'images/outlawCard2.png',
        'action1': placeAirship,
        'action2': upgrade,
        'alt': 'Place airship and upgrade'
        
    },
    {
        'name': 'outlawCard3',
        'file': 'images/outlawCard3.png',
        'action1': placeAirship,
        'action2': promoteOutlawWorker,
        'alt': 'Place airship and promote worker.'
    },
    {
        'name': 'outlawCard4',
        'file': 'images/outlawCard4.png',
        'action1': buildAScaffold,
        'action2': moveOutlawWorker,
        'alt': 'Build scaffold and move worker.'
    },
    {
        'name': 'outlawCard5',
        'file': 'images/outlawCard5.png',
        'action1': placeAirship,
        'action2': climbTheTower,
        'alt': 'Place airship and climb tower.'
    },
    {
        'name': 'outlawCard6',
        'file': 'images/outlawCard6.png',
        'action1': buildAScaffold,
        'action2': rescueOutlawWorker,
        'alt': 'Build scaffold and rescue worker.'
    },
    {
        'name': 'outlawCard7',
        'file': 'images/outlawCard7.png',
        'action1': placeAirship,
        'action2': upgrade,
        'alt': 'Place airship and upgrade.'
    },
    {
        'name': 'outlawCard8',
        'file': 'images/outlawCard8.png',
        'action1': buildAScaffold,
        'action2': rescueOutlawWorker,
        'alt': 'Build scaffold and rescue worker'
    },
    {
        'name': 'outlawCard9',
        'file': 'images/outlawCard9.png',
        'action1': placeAirship,
        'action2': upgrade,
        'alt': 'Place airship and upgrade.'
    },
    {
        'name': 'outlawCard10',
        'file': 'images/outlawCard10.png',
        'action1': buildAScaffold,
        'action2': moveOutlawWorker,
        'alt': 'Build scaffold and move worker.'
    },
    {
        'name': 'outlawCard11',
        'file': 'images/outlawCard11.png',
        'action1': placeAirship,
        'action2': climbTheTower,
        'alt': 'Place airship and climb tower.'
    },
    {
        'name': 'outlawCard12',
        'file': 'images/outlawCard12.png',
        'action1': placeAirship,
        'action2': upgrade,
        'alt': 'Place airship and upgrade.'
    },
    {
        'name': 'outlawCard13',
        'file': 'images/outlawCard13.png',
        'action1': buildAScaffold,
        'action2': moveOutlawWorker,
        'alt': 'Build scaffold and move worker.'
    },
    {
        'name': 'outlawCard14',
        'file': 'images/outlawCard14.png',
        'action1': placeAirship,
        'action2': moveOutlawWorker,
        'alt': 'Place airship and move worker.'
    },
    {
        'name': 'outlawCard15',
        'file': 'images/outlawCard15.png',
        'action1': placeAirship,
        'action2': buildAMachine,
        'alt': 'Place airship and build machine.'
    },
    {
        'name': 'outlawCard16',
        'file': 'images/outlawCard16.png',
        'action1': placeAirship,
        'action2': rescueOutlawWorker,
        'alt': 'Place airship and rescue worker.'
    },
    {
        'name': 'outlawCard17',
        'file': 'images/outlawCard17.png',
        'action1': placeAirship,
        'action2': climbTheTower,
        'alt': 'Place airship and climb tower.'
    },
    {
        'name': 'outlawCard18',
        'file': 'images/outlawCard18.png',
        'action1': placeAirship,
        'action2': climbTheTower,
        'alt': 'Place airship and climb tower.'
    },
    {
        'name': 'outlawCard19',
        'file': 'images/outlawCard19.png',
        'action1': moveOutlawWorker,
        'action2': rotateOutlawBlockerShips,
        'alt': 'Move worker and rotate blocker ships.'
    },
    {
        'name': 'outlawCard20',
        'file': 'images/outlawCard20.png',
        'action1': upgrade,
        'action2': rotateOutlawBlockerShips,
        'alt': 'Upgrade and rotate outlaw blocker ships.'
    },
    {
        'name': 'outlawCard21',
        'file': 'images/outlawCard21.png',
        'action1': rescueOutlawWorker,
        'action2': rotateOutlawBlockerShips,
        'alt': 'Rescue worker and rotate blocker ships.'
    },
    {
        'name': 'outlawCard22',
        'file': 'images/outlawCard22.png',
        'action1': promoteOutlawWorker,
        'action2': climbTheTower,
        'alt': 'Promote worker and climb tower.'
    },
    {
        'name': 'outlawCard23',
        'file': 'images/outlawCard23.png',
        'action1': upgrade,
        'action2': rotateOutlawBlockerShips,
        'alt': 'Upgrade and rotate blocker ships.'
    },
    {
        'name': 'outlawCard24',
        'file': 'images/outlawCard24.png',
        'action1': moveOutlawWorker,
        'action2': promoteOutlawWorker,
        'alt': 'Move worker and promote worker.'
    },
    {
        'name': 'outlawCard25',
        'file': 'images/outlawCard25.png',
        'action1': buildAScaffold,
        'action2': buildAMachine,
        'alt': 'Build scaffold and build machine.'
    },
    {
        'name': 'outlawCard26',
        'file': 'images/outlawCard26.png',
        'action1': buildAScaffold,
        'action2': moveOutlawWorker,
        'alt': 'Build scaffold and move worker.'
    },
    {
        'name': 'outlawCard27',
        'file': 'images/outlawCard27.png',
        'action1': buildAScaffold,
        'action2': buildAMachine,
        'alt': 'Build scaffold and build machine.'
    },
    {
        'name': 'outlawCard28',
        'file': 'images/outlawCard28.png',
        'action1': placeAirship,
        'action2': rotateOutlawBlockerShips,
        'alt': 'Place airship and rotate blocker ships.'
    },
    {
        'name': 'outlawCard29',
        'file': 'images/outlawCard29.png',
        'action1': buildAScaffold,
        'action2': buildAMachine,
        'alt': 'Build scaffold and build machine.'
    },
    {
        'name': 'outlawCard30',
        'file': 'images/outlawCard30.png',
        'action1': buildAScaffold,
        'action2': rescueOutlawWorker,
        'alt': 'Build scaffold and rescue worker.'
    },
    {
        'name': 'outlawCard31',
        'file': 'images/outlawCard31.png',
        'action1': buildAScaffold,
        'action2': buildAMachine,
        'alt': 'Build scaffold and build machine.'
    },
    {
        'name': 'outlawCard32',
        'file': 'images/outlawCard32.png',
        'action1': buildAScaffold,
        'action2': buildAMachine,
        'alt': 'Build scaffold and build machine.'
    },
    {
        'name': 'outlawCard33',
        'file': 'images/outlawCard33.png',
        'action1': buildAScaffold,
        'action2': buildAMachine,
        'alt': 'Build scaffold and build machine.'
    },
    {
        'name': 'outlawCard34',
        'file': 'images/outlawCard34.png',
        'action1': buildAScaffold,
        'action2': buildAMachine,
        'alt': 'Build scaffold and build machine.'
    },
    {
        'name': 'outlawCard35',
        'file': 'images/outlawCard35.png',
        'action1': buildAScaffold,
        'action2': buildAMachine,
        'alt': 'Build scaffold and build machine.'
    },
    {
        'name': 'outlawCard36',
        'file': 'images/outlawCard36.png',
        'action1': placeAirship,
        'action2': buildAMachine,
        'alt': 'Place airship and build machine.'
    }
];