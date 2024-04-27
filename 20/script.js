const state = {
  name: 'Jim',
  hello: 'world',
  another: 'ass',
}

const actions = [
  {
    type: 'removeProperties',
    keysToRemove: ['another'],
  },
  {
    type: 'addProperties',
    extraData: { yet: 'another property' },
  },
  { type: 'clear' },
  {
    type: 'addProperties',
    extraData: {
      foo: 'bar',
      name: 'Jim',
    },
  },
  {
    type: 'removeProperties',
    keysToRemove: ['name', 'hello'],
  },
]

function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        Object.assign(state, action.extraData);
        continue;

      case 'removeProperties':
        for (const key of action.keysToRemove) {
          delete state[key];
        }
        continue;

      case 'clear':
        for (const key of Object.keys(state)) {
          delete state[key];
        }
        continue;
    }
  }
}

transformState(state, actions);