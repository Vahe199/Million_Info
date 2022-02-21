import * as axios from "axios";

const SET_SHOW_MODAL = 'SET_SHOW_MODAL';
const SET_LIST = 'SET_LIST';
const SET_SHOW_OUT_BUTTONS = 'SET_SHOW_OUT_BUTTONS';
const SET_SHOW_CHOOSE_ITEM = 'SET_SHOW_CHOOSE_ITEM';
const SET_CHOOSED_ITEMS = 'SET_CHOOSED_ITEMS';
const REMOVE_CHOOSED_ITEMS = 'REMOVE_CHOOSED_ITEMS';
const REMOVE_LIST = 'REMOVE_LIST';

let initialState = {
  isItem:false,
  categorysIcons: [
    {
      id: Math.random(),
      name: 'to eat',
      img: require('../../assets/categorys/toEat.png'),
      item:['Rest', 'cafe', 'bar']
    },
    {
      id: Math.random(),
      name: 'to live',
      img: require('../../assets/categorys/toLive.png'),
      item:['Hotel', 'Hostel']
    },
    {
      id: Math.random(),
      name: 'Entertainment',
      img: require('../../assets/categorys/entertainment.png'),
      item:['MALL', 'GYM', 'Game place', 'Pool', 'Hookah', 'Museum', 'Cinema', 'Loft']
    },
    {
      id: Math.random(),
      name: 'Medical',
      img: require('../../assets/categorys/medical.png'),
      item:['Hospital', 'Pharmacy', 'Stomatolgy']
    },
    {
      id: Math.random(),
      name: 'Products',
      img: require('../../assets/categorys/products.png'),
      item:['Supermarket', 'Food Market', 'Home goods', 'Specialized goods']
    },
    {
      id: Math.random(),
      name: 'Finance',
      img: require('../../assets/categorys/finance.png'),
      item:['Banks']
    },
    {
      id: Math.random(),
      name: 'Beauty',
      img: require('../../assets/categorys/star1.png'),
      item:['Beauty salon']
    },
    {
      id: Math.random(),
      name: 'Tourism',
      img: require('../../assets/categorys/tourism.png'),
      item:['Tour agency', 'Sightseeing']
    }
  ],
  list: [],
  choosedItems: [],
  showModal: false,
  showOutButtons: true,
  showChooseItem: false
}

const CategorysReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SHOW_MODAL: {
          return {
            ...state,
            showModal: action.show
          }
        }
        case SET_LIST: {
          return {
            ...state,
            list: action.listItem
          }
        }
        case SET_SHOW_OUT_BUTTONS: {
          return {
            ...state,
            showOutButtons: action.showButton
          }
        }
        case SET_SHOW_CHOOSE_ITEM: {
          return {
            ...state,
            showChooseItem: action.showItem
          }
        }
        case SET_CHOOSED_ITEMS: {
          return {
            ...state,
            isItem:action.isItem,
            choosedItems: action.item
          }
        }
        case REMOVE_CHOOSED_ITEMS: {
          return {
            ...state,
            choosedItems: []
          }
        }
        case REMOVE_LIST: {
          return {
            ...state,
            list: []
          }
        }
        default:
            return state;
    }
}

// export const setShowModal = (show) => ({type: SET_SHOW_MODAL, show});
// export const setList = (listItem) => ({type: SET_LIST, listItem});
// export const setShowOutButtons = (showButton) => ({type: SET_SHOW_OUT_BUTTONS, showButton});
// export const setShowChooseItem = (showItem) => ({type: SET_SHOW_CHOOSE_ITEM, showItem});
// export const setChoosedItems = (item) => ({type: SET_CHOOSED_ITEMS, item});
// export const removeChoosedItems = () => ({type: REMOVE_CHOOSED_ITEMS});
// export const removeList = () => ({type: REMOVE_LIST});




export default CategorysReducer;
