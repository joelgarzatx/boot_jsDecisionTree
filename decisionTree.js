var prompt = require('prompt');

var schema = {
  properties: {
    hungry: {
      description: 'Are you very hungry?',
      pattern: /^[YyNn]$/,
      message: 'Your response must be only Y or N',
      required: true
    },
    cheap: {
      description: 'Do you want cheap?',
      pattern: /^[YyNn]$/,
      message: 'Your response must be only Y or N',
      required: true
    },
    meat: {
      description: 'Do you want meat?',
      pattern: /^[YyNn]$/,
      message: 'Your response must be only Y or N',
      required: true
    },
  }
}

var makeDecision = function(choices) {
  switch (choices) {
    case 'yyy':
      return('Fried Chicken');
    case 'yyn':
      return('Ramen');
    case 'yny':
      return('BBQ');
    case 'ynn':
      return('Vegetarian');
    case 'nyy':
      return('Hot Dogs');
    case 'nyn':
      return('Salad');
    case 'nny':
      return('Steak');
    case 'nnn':
      return('Raspa');
  }
};

prompt.start();
var rawChoices = '';

prompt.get(schema, function (err, result) {

  console.log('Command-line input received:');
  console.log('  Hungry: ' + result.hungry);
  console.log('  Cheap: ' + result.cheap);
  console.log('  Meat: ' + result.meat);
  rawChoices = result.hungry+result.cheap+result.meat;

  var choices = rawChoices.toLowerCase();
  console.log("Your recommendation is " + makeDecision(choices));
});
