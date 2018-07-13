// 登录成功的事件
export const loginSuccessCreator = (user) => {
  return { type: 'LOGIN_SUCCESS', payload: user };
};

const initState = {
  login: false,  // 是否已登录
  user: null, // 登录后的用户信息
};

const reducer = (state = initState, action = {}) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return { ...state, login: true, user: action.payload };
    default:
      return state;
  }
};

export default { initState, reducer };
