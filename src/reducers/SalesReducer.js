import { ADD_PART, REMOVE_PART } from '../actions/SalesAction';


const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  };

  export const SalesReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_PART:
            return {
              ...state,
              car: {
                ...state.car,
                features: [
                  ...state.car.features,
                  action.payload
                ]
              },
             additionalPrice: state.additionalPrice + action.payload.price,
              additionalFeatures: state.additionalFeatures.filter((feature) => {
                if(feature.id !== action.payload.id)
                return feature
              })
            }
          case REMOVE_PART:
            return {
              ...state,
              car: {
                ...state.car,
                features: state.car.features.filter((feature) => {
                  if(feature.id !== action.payload.id)
                  return feature
                })
              },
              additionalPrice: state.additionalPrice - action.payload.price,
              additionalFeatures: [
                ...state.additionalFeatures,
                action.payload
              ]
            }

        default: return state;
    }

  }

