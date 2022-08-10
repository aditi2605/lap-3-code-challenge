import React, { useState, useEffect } from "react";
import axios from 'axios';

function userRepo() {

    const [repoList, setrepoList] = useState(['']);

    const [data, setData] = useState([])
    useEffect(() => {
        const getData = async() => {
            try {
                const { data } = await axios.get('');
                setData(data);
            } catch (e) {
                console.warn('Opps. ${e.message}')
            }
        }
        getData()
    }, [])
  return (
    <div>
      <ul>
        {data}
      </ul>
    </div>
  )
}

export default userRepo;
