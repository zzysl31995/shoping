import React from 'react';
import {render} from 'react-dom';
import './public/index.less';
import App from './containers/index';
import {Provider} from 'react-redux';
import {configCreateStore} from './store/index';
let store = configCreateStore(
    {userInfo:{cityName:"上海"}}
);
//将store注入到流程中
render(
    <Provider store={store}>
        <App/>
    </Provider>
    ,document.getElementById("root")
);