import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'

import { FaHeart, FaRegHeart } from "react-icons/fa";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import axios from "axios";
import { MOVIE_API_KEY } from "../Request";

const Movie = ({ item, id }) => {
  const navigate = useNavigate()
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false)
  const {user} = UserAuth()

  const movieID = doc(db, 'users', `${user?.email}`)

  const saveShow = async () => {
    if(user?.email) {
      setLike(!like)
      setSaved(true)
      await updateDoc(movieID, {
        savedShows: arrayUnion({
          id: movieID,
          title: item.title,
          image: item.backdrop_path
        })
      })
    } else {
      navigate('/signin')
    }
  }

  return (
    <>
      <div
        key={id}
        className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2"
      >
        <img
          className="w-full h-auto block"
          src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
          alt={item?.title}
        />
        <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
          <p className="text-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
            {item?.title}
          </p>
          <p onClick={saveShow}>
            {saved ? (
              <FaHeart className="absolute top-4 left-4 text-gray-300" />
            ) : (
              <FaRegHeart className="absolute top-4 left-4 text-gray-300" />
            )}
          </p>
        </div>
      </div>
    </>
  );
};

export default Movie;
