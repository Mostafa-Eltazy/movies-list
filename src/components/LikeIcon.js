import React from 'react'
import {BsHeart} from 'react-icons/bs'
import {FaHeart} from 'react-icons/fa'
import {useState} from 'react'

const LikeIcon = ({liked, onClick}) => {
    

    return (
        <div onClick={onClick}>
           {liked ? <FaHeart></FaHeart>:<BsHeart></BsHeart>}            
        </div>
    )
}

export default LikeIcon
