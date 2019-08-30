import React from 'react'
// import './Loading.css';
import style from './Loading.cm.styl';
import { Button } from 'antd'

export default (props) => {
    return (
        <div className={style.autoSuggest}>
            <Button type="primary">
                antd  
            </Button>
            <Button>{props.buttonName}</Button>
        </div>
    )
}