import React from 'react'
import loading from '../../imagenes/loading-bar.gif'
import s from './Loading.module.css'

export default function PaginaDeCarga() {
    return (
          <div className={s.box_loading}>
            <img src={loading} alt="" />
          </div>
    )}